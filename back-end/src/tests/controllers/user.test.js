// const chai = require("chai");
// const sinon = require("sinon");
// const app = require("../../api/app");
// // const connection = require('../../../src/database/connection');
// // const Model = require('../../models/')
// // const chatHttp = require('chai-http');
// const { expect } = require("chai");
// 
// describe("test in route register", function () {
//   let chaiHttpResponse;
// 
//   it("is do not possible to receive the data in the route user", async function () {
//     // chaiHttpResponse = await chai
//     //   .request(app)
//     //   .post("/login")
//     //   .send({ email: "batataUser@gmail.com", password: "1234567" });
//     // expect(chaiHttpResponse.status).to.be.equal(401);
//     // expect(chaiHttpResponse.body).to.be.deep.equal({
//     //   message: "user not found",
//     // });
//   });
//   it("is possible to receive the data in the route user", async function () {
//     chaiHttpResponse = await chai
//       .request(app)
//       .post("/login")
//       .send({
//         email: "fulana@deliveryapp.com",
//         password: "3c28d2b0881bf46457a853e0b07531c6",
//       });
//     expect(chaiHttpResponse.status).to.be.deep.equal(201);
//     // expect(chaiHttpResponse.body).to.be.equal({ message: "Created" })
//   });
//   it("if the token and role is right ", async () => {
//     chaiHttpResponse = await chai
//     .request(app)
//     .post("/login")
//     .send({
//       email: "adm@deliveryapp.com",
//       password: "--adm2@21!!--",
//     });
//     const { body: { response: { token }} } = chaiHttpResponse;
//     
//     // expect(chaiHttpResponse.status).to.be.equal(201);
// 
//     const role = await chai
//       .request(app)
//       .post("/register")
//       .set("Authorization", token)
//       .send({
//         email: "romeropereira@gmail.com",
//         name: "Romero Pereira",
//         password: "1234567",
//       })
//     console.log('role', role)
//     // console.log('chaiHttpResponse', chaiHttpResponse)
//     expect(role.status).to.be.equal(201);
//     // expect(role.body).to.be.deep.equal({ role: "administrator" });
//   });
//   it("is possible to register one person in the data ", async () => {
//     
//     chaiHttpResponse = await chai
//       .request(app)
//       .post("/register")
//       .set("authorization", token)
//       .send({
//         email: "marciopereira@gmail.com",
//         name: "Márcio Pereira",
//         password: "1234567",
//       })
//     expect(chaiHttpResponse.status).to.be.equal(201);
//     expect(chaiHttpResponse.body).to.be.deep.equal({
//       token,
//       message: "Created",
//     });
//   });
//   it("is do not possible to register one person in the data ", async () => {
//     chaiHttpResponse = await chai
//       .request(app)
//       .post("/register")
//       .send({ email: "batata.com", password: "12" });
//     expect(chaiHttpResponse.status).to.be.equal(404);
//     expect(chaiHttpResponse.body).to.be.deep.equal({
//       message: "Field 'name' doesn't have a default value",
//     });
//   });
//   afterEach(function () {
//     sinon.restore();
//   });
// });
