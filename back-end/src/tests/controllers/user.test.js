const chai = require('chai')
const sinon = require('sinon')
const app = require('../../api/app');
const connection = require('../../../src/database/connection');
const Model = require('../../models/')
const chatHttp = require('chai-http');
const { expect } = require('chai');


describe('test in route register', function () {
  let chaiHttpResponse;
  it('is do not possible to receive the data in the route user', async function() {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send( { email: 'batata@gmail.com', password: '1234567' })
      expect(chaiHttpResponse.status).to.be.equal(409);
      expect(chaiHttpResponse.body).to.be.equal({ message: "error in login" })
  })
  it('is possible to receive the data in the route user', async function() {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send( { email: 'fulana@deliveryapp.com', password: '3c28d2b0881bf46457a853e0b07531c6' })
      expect(chaiHttpResponse.status).to.be.equal(201);
      // expect(chaiHttpResponse.body).to.be.equal({ message: "Created" })
  })
  it('if the token and role is right ', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'fulana@deliveryapp.com', password: 's3c28d2b0881bf46457a853e0b07531c6' })
    expect(chaiHttpResponse.status).to.be.equal(201)

    const role = await chai
      .request(app)
      .post('/login')
      .set('Authorization', chaiHttpResponse.body.token)

    expect(role.status).to.be.equal(200)
    expect(role.body).to.be.deep.equal({ role: 'administrator' })
  })
  it('is possible to register one person in the data ', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send( { email: 'batata@gmail.com', password: '1234567' })
    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body).to.be.equal({ message: "Created" })
  })
  it('is do not possible to register one person in the data ', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send( { email: 'batata.com', password: '12' })
    expect(chaiHttpResponse.status).to.be.equal(409);
    expect(chaiHttpResponse.body).to.be.equal({ message: "Conflict" })
  })
})