const chai = require('chai')
const sinon = require('sinon')
const app = require('../../api/app');
import { user1, userErro } from require('../mocks/user')
const chatHttp = require('chai-http');
const { expect } = require('chai');
import User from ('../../models/User')
chai.use(chatHttp)

describe('test in route register', () => {
  let chaiHttpResponse;
  afterEach(sinon.restore)

  it('is do not possible to receive the data in the route user', async () => {
    sinon.stub(User, "create").resolves(user1)
    chaiHttpResponse = await chai
    .request(app)
    .post('./register')
    .send({email: 'tester@gmail.com', password: '1231231'})
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(user1)
  })
  it('is possible to receive the data in the route user', async () => {
    sinon.stub(User, "create").resolves(userErro)
    chaiHttpResponse = await chai
    .request(app)
    .post('./register')
    
    expect(chaiHttpResponse.status).to.be.equal(409);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Conflict' })
  })
})