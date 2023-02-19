// interface Person {
//   name: string
//   age: number
// }

// function printPerson(person: Person) {
//   console.log(person.name);
// }

// const John = { name: 'John', age: 30 };
// // 鸭子类型，只要它像鸭子一样会叫，那它就一定是只鸭子
// const Mary = { name: 'Mary', age: 25, phoneNumber: '13344400999' };
// printPerson(John);
// printPerson(Mary);

// type Car = {
//   maker: string;
//   year: string;
//   accelarate: () => void
// }

// function makeCar(car: Partial<Car>) {
//   const fallback = {
//     maker: 'BMW',
//     year: '2010'
//   };
//   return { ...fallback, ...car };
// }

// // makeCar({ maker: 'Honda', year: '2013', accelarate: () => null });

// Optional pick!!! 
const manualEmailFormFields = [
  'eventId',
  'name',
  'sender',
] as const;

type ManualEmailCreateParams = Pick<
OutreachManualEmail,
  typeof manualEmailFormFields[number]
>;

class OutreachManualEmail {
  eventId: string;
  name: string;
  sender: string; 
}

const params: ManualEmailCreateParams = { name: 'haha' };

type SendgridPlaceholders<T extends string> = {
  [K in T]: `%${K}%`;
};

function convertKeysToSendgridPlaceholders<T extends string[]>(
  mergeTagKeys: T,
): SendgridPlaceholders<T[number]> {
  return Object.fromEntries(
    mergeTagKeys.map((it) => [ it, `%${it}%` ]),
  ) as unknown as SendgridPlaceholders<T[number]>;
}

type ContentMergeTags = {
  utmCampaign: string;
  eventName: string;
  organizationName: string;
  eventDateTime: string;
};

export const tuple =
  <Y>() =>
    <T extends keyof Y>(a: T[]): T[] =>
      a;

// const result = tuple<ContentMergeTags>();

// console.log('result', result);

const sendgridPlaceholders = convertKeysToSendgridPlaceholders(
  tuple<ContentMergeTags>()([
    'eventName',
    'organizationName',
    'eventDateTime',
    'utmCampaign',
  ]),
);








