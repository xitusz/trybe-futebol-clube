import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('/login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password:
          '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
      } as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Login successfully', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
         email: 'admin@admin.com',
         password: 'secret_admin'
       })

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(200);
    
    expect(body).to.have.property('user');

    expect(body.user).to.have.property('username');
    expect(body.user.username).to.be.equal('Admin');

    expect(body.user).to.have.property('role');
    expect(body.user.role).to.be.equal('admin');

    expect(body.user).to.have.property('email');
    expect(body.user.email).to.be.equal('admin@admin.com');

    expect(body.user).to.not.have.property('password');

    expect(body).to.have.property('token');
  });

  it('test empty Email', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
         email: '',
         password: 'secret_admin'
       })

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(400);

    expect(body).to.have.property('message');
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('test empty Password', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
         email: 'admin@admin.com',
         password: ''
       })

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(400);

    expect(body).to.have.property('message');
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('test incorrect Password', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
         email: 'admin@admin.com',
         password: 'secret_admi'
       })

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(401);

    expect(body).to.have.property('message');
    expect(body.message).to.be.equal('Incorrect email or password');
  });

  it('test validate Role', async () => {
    const token = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTU5MTI0MzQsImV4cCI6MTY1NjUxNzIzNH0.5-9uxQOsQtf-agMAVp1OveLCTKOkCZRSzGT92HBLKq8";

    chaiHttpResponse = await chai
       .request(app)
       .get('/login/validate')
       .set('authorization', token)

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(200);

    expect(body).to.be.equal('admin');
  });
});
