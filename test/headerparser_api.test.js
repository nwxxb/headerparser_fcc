const request = require('supertest')
const app = require('../index.js')
const server = app.listen(process.env.port)

describe('Timestamp endpoint', () => {
  it('return needed req headers on response body', async () => {
    const res = await request(app)
		  .get('/api/whoami')
		  .set('Accept-Language', 'en-US,en;q=0.5')
		  .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0')
		  .set('X-Real-Ip', '101.172.173.100')
		  .set('X-Forwarded-For', '101.172.173.100')
    expect(res.status).toEqual(200)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(res.body.language).toEqual('en-US,en;q=0.5')
    expect(res.body.software).toEqual('Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0')
  });
});

server.close()
