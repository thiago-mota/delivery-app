const JWT = require('jsonwebtoken');
const chai = require("chai");
const sinon = require("sinon");
const app = require("../../api/app");
const chaiHttp = require("chai-http");

const { allProducts } = require('.././mocks/products');

const { expect } = require("chai");

chai.use(chaiHttp);

describe("testing products endpoint", function () {
  let chaiHttpResponse;

  it("returns all products", async function () {
   
    chaiHttpResponse = await chai
      .request(app)
      .get("/products")
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allProducts);
  });
  it("throws an error", async function () {
    sinon.stub(JWT, 'sign').returns('token');
    chaiHttpResponse = await chai
      .request(app)
      .get("/products1")
    expect(chaiHttpResponse.status).to.be.equal(500);
  });
});
