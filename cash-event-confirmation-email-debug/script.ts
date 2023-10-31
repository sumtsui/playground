const csv = require('csv-parser');
import fs from 'fs';
import path from 'path';

const eventId = 'a18568cf-b8df-4745-9c68-b0761f3b6d8f';
const subject = 'Seat Confirmation for 2023 CASH Annual Dinner cum Golden Sail Music Awards Presentation';
const emailMap = new Map<string, any[]>();

function main() {
  
  fs.createReadStream(path.resolve(__dirname, './0852e4ee-df6f-4dae-9487-4554ea9c1eaa.csv'))
    .pipe(csv())
    .on('data', (data: any) => {
      // console.log('data', data);
      const uniqueArgs = JSON.parse(data['unique_args']);
      // if (uniqueArgs.eventId === eventId && data.subject.toLowerCase().includes(subject.toLocaleLowerCase()) && data.processed) {
      //   // console.log('data', data);
      //   emailMap.get(data.email) ? emailMap.get(data.email)!.push(data) : emailMap.set(data.email, [ data ]);
      // }
      if (uniqueArgs.eventId === eventId) {
        console.log('data', data);
        // emailMap.get(data.email) ? emailMap.get(data.email)!.push(data) : emailMap.set(data.email, [ data ]);
      }
    })
    .on('end', () => {
      return;
      console.log(emailMap.size); 
      if (fs.existsSync(path.resolve(__dirname, 'sendgrid_email_sent_count.csv'))) {
        fs.unlinkSync(path.resolve(__dirname, 'sendgrid_email_sent_count.csv'));
      }
      fs.promises.appendFile(path.resolve(__dirname, './sendgrid_email_sent_count.csv'), 'email,events\n');
      for (const email of emailMap.keys()) {
        const events = emailMap.get(email)!; 
        fs.promises.appendFile(path.resolve(__dirname, './sendgrid_email_sent_count.csv'), `${email.toLocaleLowerCase()},${events.length},\n`);
      }
  
    });
  

  return;
  
  const sendgridStream = fs.createReadStream(path.resolve(__dirname, './sendgrid_email_sent_count.csv'))
    .pipe(csv());
  
  const attendeeStream = fs.createReadStream(path.resolve(__dirname, './query_result_2023-10-31T08_28_48.688783Z.csv'))
    .pipe(csv());
  
  const results: any[] = [];
  const sendgridResult: any[] = []; 
  const attendeeResult: any[] = []; 
  
  // Function to handle data from the streams
  function processData1(data: any) {
    sendgridResult.push(data);
  }
  function processData2(data: any) {
    attendeeResult.push(data);
  }
    
  // Listen for 'data' events from the streams
  sendgridStream.on('data', processData1).on('end', () => {
    results[0] = sendgridResult;
    crossCheck();
  });
  attendeeStream.on('data', processData2).on('end', () => {
    results[1] = attendeeResult;
    crossCheck();
  });
  
  function crossCheck() {
    if (results.length !== 2) {
      console.log('not yet');
      return;
    }
  
    console.log('start now');
    const [ sendgridEvents, attendees ] = results;
  
    const sendgridEventMap = new Map(sendgridEvents.map(it => ([ it.email, it.events ])));
  
    console.log('sendgridEventMap', sendgridEventMap.size);

    if (fs.existsSync(path.resolve(__dirname, 'result.csv'))) {
      fs.unlinkSync(path.resolve(__dirname, 'result.csv'));
    }

    // fs.promises.appendFile(path.resolve(__dirname, 'result.csv'), 'invitation_email,attendee_total,sendgrid_total\n');

    for (const attendee of attendees) {
      console.log('attendee', attendee);
      if (attendee.total > (sendgridEventMap.get(attendee.invitation_email.toLocaleLowerCase()) ?? 0)) {
        fs.promises.appendFile(path.resolve(__dirname, 'result.csv'), `${attendee.invitation_email},${attendee.total},${sendgridEventMap.get(attendee.invitation_email.toLocaleLowerCase()) ?? 0}\n`);
      }
    }
  } 
}

main();





