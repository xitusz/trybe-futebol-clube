import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


describe('/matches', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  let chaiHttpResponse: Response;

  it('All Matches', async () => {
    sinon
      .stub(Match, "findAll")
      .resolves([
        {
          homeTeam: 16,
          homeTeamGoals: 1,
          awayTeam: 8,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 1,
          awayTeam: 14,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 4,
          homeTeamGoals: 3,
          awayTeam: 11,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 0,
          awayTeam: 2,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 7,
          homeTeamGoals: 1,
          awayTeam: 10,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 5,
          homeTeamGoals: 1,
          awayTeam: 13,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 2,
          awayTeam: 6,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 0,
          awayTeam: 1,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 0,
          awayTeam: 12,
          awayTeamGoals: 3,
          inProgress: false,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 9,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 13,
          homeTeamGoals: 1,
          awayTeam: 3,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 6,
          homeTeamGoals: 0,
          awayTeam: 4,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 8,
          homeTeamGoals: 2,
          awayTeam: 5,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 2,
          awayTeam: 16,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 0,
          awayTeam: 15,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 11,
          homeTeamGoals: 0,
          awayTeam: 7,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 2,
          awayTeam: 8,
          awayTeamGoals: 3,
          inProgress: false,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 4,
          awayTeam: 5,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 11,
          homeTeamGoals: 2,
          awayTeam: 2,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 7,
          homeTeamGoals: 0,
          awayTeam: 9,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 6,
          homeTeamGoals: 3,
          awayTeam: 13,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 4,
          homeTeamGoals: 3,
          awayTeam: 3,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 2,
          awayTeam: 16,
          awayTeamGoals: 3,
          inProgress: false,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 2,
          awayTeam: 14,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 6,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 13,
          homeTeamGoals: 1,
          awayTeam: 1,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 5,
          homeTeamGoals: 1,
          awayTeam: 15,
          awayTeamGoals: 2,
          inProgress: false,
        },
        {
          homeTeam: 16,
          homeTeamGoals: 3,
          awayTeam: 7,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 0,
          awayTeam: 4,
          awayTeamGoals: 4,
          inProgress: false,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 0,
          awayTeam: 12,
          awayTeamGoals: 4,
          inProgress: false,
        },
        {
          homeTeam: 8,
          homeTeamGoals: 2,
          awayTeam: 10,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 5,
          awayTeam: 11,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 1,
          awayTeam: 16,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 3,
          awayTeam: 6,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 1,
          awayTeam: 5,
          awayTeamGoals: 3,
          inProgress: false,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 7,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 0,
          awayTeam: 13,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 2,
          awayTeam: 4,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 2,
          awayTeam: 11,
          awayTeamGoals: 0,
          inProgress: false,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 4,
          awayTeam: 8,
          awayTeamGoals: 1,
          inProgress: false,
        },
        {
          homeTeam: 16,
          homeTeamGoals: 2,
          awayTeam: 9,
          awayTeamGoals: 0,
          inProgress: true,
        },
        {
          homeTeam: 6,
          homeTeamGoals: 1,
          awayTeam: 1,
          awayTeamGoals: 0,
          inProgress: true,
        },
        {
          homeTeam: 11,
          homeTeamGoals: 0,
          awayTeam: 10,
          awayTeamGoals: 0,
          inProgress: true,
        },
        {
          homeTeam: 7,
          homeTeamGoals: 2,
          awayTeam: 15,
          awayTeamGoals: 2,
          inProgress: true,
        },
        {
          homeTeam: 5,
          homeTeamGoals: 1,
          awayTeam: 3,
          awayTeamGoals: 1,
          inProgress: true,
        },
        {
          homeTeam: 4,
          homeTeamGoals: 1,
          awayTeam: 12,
          awayTeamGoals: 1,
          inProgress: true,
        },
        {
          homeTeam: 8,
          homeTeamGoals: 1,
          awayTeam: 14,
          awayTeamGoals: 2,
          inProgress: true,
        },
        {
          homeTeam: 13,
          homeTeamGoals: 1,
          awayTeam: 2,
          awayTeamGoals: 1,
          inProgress: true,
        }
      ] as Match[]);
  
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches');

    const { status, body } = chaiHttpResponse;

    body.forEach((match: Match) => {
      expect(status).to.be.equal(200);
      
      expect(match).to.have.property('homeTeam');

      expect(match).to.have.property('homeTeamGoals');

      expect(match).to.have.property('awayTeam');

      expect(match).to.have.property('awayTeamGoals');

      expect(match).to.have.property('inProgress');
    })
  });

  it('Match created', async () => {
    const token = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTU5MTI0MzQsImV4cCI6MTY1NjUxNzIzNH0.5-9uxQOsQtf-agMAVp1OveLCTKOkCZRSzGT92HBLKq8";

    sinon.stub(Match, 'create')
    .resolves({
      homeTeam: 16,
      awayTeam: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
      inProgress: true,
    } as Match);
    
    chaiHttpResponse = await chai
       .request(app)
       .post('/matches')
       .set('authorization', token)
       .send({
        homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        inProgress: true,
      })

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(201);
  
    expect(body).to.have.property('homeTeam');
    expect(body.homeTeam).to.be.equal(16);

    expect(body).to.have.property('awayTeam');
    expect(body.awayTeam).to.be.equal(8);

    expect(body).to.have.property('homeTeamGoals');
    expect(body.homeTeamGoals).to.be.equal(2);

    expect(body).to.have.property('awayTeamGoals');
    expect(body.awayTeamGoals).to.be.equal(2);

    expect(body).to.have.property('inProgress');
    expect(body.inProgress).to.be.equal(true);
  });

  it('Finish Match', async () => {
    sinon
      .stub(Match, 'update')
      .resolves();

    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/1/finish')

    const { status, body } = chaiHttpResponse;
    
    expect(status).to.be.equal(200);

    expect(body).to.have.property('message');
    expect(body.message).to.be.equal('Finished');
  });
});
