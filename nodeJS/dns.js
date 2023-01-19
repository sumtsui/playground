const dns = require('dns');

function dnsLookup(domain, value) {
  return new Promise((resolve, reject) => {
    dns.resolveTxt(domain, (err, result) => {
      if (err) reject(err);
      resolve(Boolean(result.map((it) => it[0]).find((it) => it === value)));
    });
  });
}

dnsLookup('fdc3c6df-1bdc-4b09-9255-f3495b2a50d6.digimon.one', '90007b45-ddcc-4401-b6d0-87e4385c35e4').then(res => console.log(res));