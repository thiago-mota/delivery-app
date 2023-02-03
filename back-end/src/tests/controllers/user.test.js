const JWT = require('jsonwebtoken');
const chai = require('chai');
const sinon = require("sinon");
const app = require('../../api/app');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { allUsers } = require('../mocks/user');

chai.use(chaiHttp);

describe('test in route users', function () {
  let chaiHttpResponse;
  it('is possible to receive the data in the route user', async function() {
    chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allUsers)
  })
  it('is possible to create an user', async () => {

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
    expect(chaiHttpResponse.status).to.be.equal(200)

   chaiHttpResponse = await chai
    .request(app)
    .post('/users')
    .send( { email: 'batata545453@gmail.com', name: "Oswaldo2154 Pereira", password: '1234567' })
    expect(chaiHttpResponse.status).to.be.equal(201);
  })
  it('is not possible to create an user that already exists', async () => {

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
    expect(chaiHttpResponse.status).to.be.equal(200)

   chaiHttpResponse = await chai
    .request(app)
    .post('/users')
    .send( { email: 'fulana@deliveryapp.com', name: "Fulana Pereira", password: 'fulana@123' })
    expect(chaiHttpResponse.status).to.be.equal(409);
  })
  it('is possible to delete an user', async () => {
    sinon.stub(JWT, 'sign').returns('token');
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
    expect(chaiHttpResponse.status).to.be.equal(200)

    sinon.stub(JWT, 'verify').returns('token');
   chaiHttpResponse = await chai
     .request(app)
     .delete('/users')
    .send({
      "id": "3"
    })
    expect(chaiHttpResponse.status).to.be.equal(200);
  })
  it('is not possible to create an user without a deafult name', async () => {

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
    expect(chaiHttpResponse.status).to.be.equal(200)

   chaiHttpResponse = await chai
    .request(app)
    .post('/users')
    .send( { email: 'batata545453@gmail.com', name: "", password: '1234567' })
    expect(chaiHttpResponse.status).to.be.equal(409);
  })
  afterEach(function () {
    sinon.restore();
  });
})
