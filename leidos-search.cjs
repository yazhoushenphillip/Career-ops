const https = require('https');

function post(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const opts = {
      hostname: 'leidos.wd5.myworkdayjobs.com',
      port: 443,
      path: '/wday/cxs/leidos/External/jobs',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    const req = https.request(opts, res => {
      let buf = '';
      res.on('data', c => buf += c);
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const searches = [
  { appliedFacets: {}, limit: 50, offset: 0, searchText: 'data scientist' },
  { appliedFacets: {}, limit: 50, offset: 0, searchText: 'machine learning' },
  { appliedFacets: {}, limit: 50, offset: 0, searchText: 'AI engineer' },
];

async function main() {
  const allJobs = new Map();

  for (const body of searches) {
    const res = await post(body);
    process.stderr.write(`"${body.searchText}": ${res.total} total, ${(res.jobPostings || []).length} returned\n`);
    for (const j of (res.jobPostings || [])) {
      const reqId = (j.bulletFields || [])[0] || 'N/A';
      if (!allJobs.has(reqId)) {
        allJobs.set(reqId, {
          title: j.title,
          reqId,
          location: j.locationsText || '',
          path: j.externalPath || '',
          posted: j.postedOn || ''
        });
      }
    }
  }

  const titleKw = ['data scientist', 'machine learning', 'ai engineer', 'data analyst', 'mlops', 'ai/ml', 'analytics', ' ml ', 'artificial intelligence'];
  const remoteKw = ['remote', 'telework'];

  const remote = [], other = [];

  for (const [, j] of allJobs) {
    const tl = j.title.toLowerCase();
    const ll = j.location.toLowerCase();
    if (!titleKw.some(k => tl.includes(k))) continue;
    const url = 'https://leidos.wd5.myworkdayjobs.com/External' + j.path;
    const entry = { ...j, url };
    if (remoteKw.some(k => ll.includes(k))) {
      remote.push(entry);
    } else {
      other.push(entry);
    }
  }

  console.log('\n=== REMOTE / TELEWORK ===');
  for (const j of remote) {
    console.log(`${j.title} | ${j.reqId} | ${j.location} | ${j.posted}`);
    console.log(j.url);
    console.log('');
  }

  console.log('\n=== ON-SITE / HYBRID ===');
  for (const j of other) {
    console.log(`${j.title} | ${j.reqId} | ${j.location} | ${j.posted}`);
    console.log(j.url);
    console.log('');
  }

  console.log(`Summary: ${remote.length} remote, ${other.length} on-site/hybrid`);
}

main().catch(console.error);
