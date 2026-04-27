const dns = require('dns');
dns.resolveSrv('_mongodb._tcp.cluster0.ssqlccs.mongodb.net', (err, addresses) => {
  if (err) {
    console.error('DNS SRV Resolve Error:', err);
  } else {
    console.log('DNS SRV Addresses:', addresses);
  }
});
