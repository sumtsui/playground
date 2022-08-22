/**
write a function that takes in an array of flight objects, a fare limit, and a flight origin, return an array of flight destinations that with the fare not higher than the fare limit. Combined flights are allowed.
*/

type Flight = {
  origin: string;
  destination: string;
  fare: number;
}

const flights: Flight[] = [
  { origin: 'KKB', destination: 'ABC', fare: 98 },
  { origin: 'ABC', destination: 'OKK', fare: 200 },
  { origin: 'OKK', destination: 'MLB', fare: 156 },
  { origin: 'KKB', destination: 'PRS', fare: 400 },
  { origin: 'LPO', destination: 'OKK', fare: 56 },
  { origin: 'PRS', destination: 'BIO', fare: 90 },
  { origin: 'KKB', destination: 'PPP', fare: 78 },
  { origin: 'BIO', destination: 'OKK', fare: 66.7 },
  { origin: 'OKK', destination: 'PPP', fare: 300.5 },
];

function findFlights(flights: Flight[], limit: number, origin: string): Array<Array<string>> {
  const result: Array<Array<string>> = [];
  const prices: number[] = [];

  function buildRoute(origin: string, route: string[], routeTotal: number) {

    for (const f of flights) {
      if (origin === f.origin) {
        if (routeTotal + f.fare < limit) 
          buildRoute(f.destination, [ ...route, f.destination ], routeTotal + f.fare);
      }
    }

    result.push(route);
    prices.push(routeTotal);
  }

  buildRoute(origin, [], 0);

  console.log(result); 
  console.log(prices); 
  return result;
}

findFlights(flights, 500, 'KKB');



