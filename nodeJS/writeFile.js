const fs = require('fs');

const DATA = [
  {
    'email': 'example1@test.com',
    'eventId': '95ea8419-a557-4cde-a175-13cb31e8eeac',
    'outreachManualEmailId': '6f67dead-4f2c-402b-8dcc-0c3edf917457',
    'attendeeId': 'ada6de1a-19cb-4cd8-b2df-2d962f1054f7',
    'timestamp': 1513299569,
    'smtp-id': '<14c5d75ce93.dfd.64b469@ismtpd-555>',
    'event': 'delivered',
    'category': 'cat facts',
    'sg_event_id': 'sg_event_id',
    'sg_message_id': 'sg_message_id'
  },
  {
    'email': 'example2@test.com',
    'eventId': '95ea8419-a557-4cde-a175-13cb31e8eeac',
    'outreachManualEmailId': '6f67dead-4f2c-402b-8dcc-0c3edf917457',
    'attendeeId': 'ada6de1a-19cb-4cd8-b2df-2d962f1054f7',
    'timestamp': 1513299569,
    'smtp-id': '<14c5d75ce93.dfd.64b469@ismtpd-555>',
    'event': 'dropped',
    'ip': '168.1.1.1',
    'category': 'cat facts',
    'sg_event_id': 'sg_event_id',
    'sg_message_id': 'sg_message_id',
    'response': '400 try again later',
    'attempt': '5'
  },
  {
    'email': 'example3@test.com',
    'eventId': '95ea8419-a557-4cde-a175-13cb31e8eeac',
    'outreachManualEmailId': '6f67dead-4f2c-402b-8dcc-0c3edf917457',
    'attendeeId': 'ada6de1a-19cb-4cd8-b2df-2d962f1054f7',
    'timestamp': 1513299569,
    'smtp-id': '<14c5d75ce93.dfd.64b469@ismtpd-555>',
    'event': 'open',
    'ip': '168.1.1.1',
    'category': 'cat facts',
    'sg_event_id': 'sg_event_id',
    'sg_message_id': 'sg_message_id',
    'response': '250 OK'
  },
  {
    'email': 'example3@test.com',
    'eventId': '95ea8419-a557-4cde-a175-13cb31e8eeac',
    'outreachManualEmailId': '6f67dead-4f2c-402b-8dcc-0c3edf917457',
    'attendeeId': '0ec67486-8318-4929-8a0c-7a45e426893c',
    'timestamp': 1513299569,
    'smtp-id': '<14c5d75ce93.dfd.64b469@ismtpd-555>',
    'event': 'bounce',
    'reason': 'too ugly',
    'ip': '168.1.1.1',
    'category': 'cat facts',
    'sg_event_id': 'sg_event_id',
    'sg_message_id': 'sg_message_id',
    'response': '250 OK'
  },
];

function randomize(item) {
  const updated = { ...item };
  const events = [ 'processed', 'dropped', 'delivered', 'deferred', 'bounce', 'click', 'open', 'spamreport' ];

  updated.timestamp = new Date().getTime() - Math.floor(Math.random() * 10000);
  updated.event = events[Math.floor(Math.random() * events.length)];

  return updated;
}

const folderPath = 'temp/'; 
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

const string = DATA.map(d => JSON.stringify(randomize(d))).join('\n');

fs.writeFile(`${folderPath}${new Date().getTime()}_uuid.json`, string, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Data written to file!');
  }
});
