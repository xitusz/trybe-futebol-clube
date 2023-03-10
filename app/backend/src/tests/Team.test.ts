import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('/teams', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  let chaiHttpResponse: Response;

  it('All Teams', async () => {
    sinon
      .stub(Team, "findAll")
      .resolves([
        {
          teamName: "Avaí/Kindermann"
        },
        {
          teamName: "Bahia"
        },
        {
          teamName: "Botafogo"
        },
        {
          teamName: "Corinthians"
        },
        {
          teamName: "Cruzeiro"
        },
        {
          teamName: "Ferroviária"
        },
        {
          teamName: "Flamengo"
        },
        {
          teamName: "Grêmio"
        },
        {
          teamName: "Internacional"
        },
        {
          teamName: "Minas Brasília"
        },
        {
          teamName: "Napoli-SC"
        },
        {
          teamName: "Palmeiras"
        },
        {
          teamName: "Real Brasília"
        },
        {
          teamName: "Santos"
        },
        {
          teamName: "São José-SP"
        },
        {
          teamName: "São Paulo"
        }
      ] as Team[]);

    chaiHttpResponse = await chai
       .request(app)
       .get('/teams');

    const { status, body } = chaiHttpResponse;

    body.forEach((team: Team) => {
      expect(status).to.be.equal(200);

      expect(team).to.have.property('teamName');
    })
  });

  it('Team by Id', async () => {
    sinon
      .stub(Team, 'findOne')
      .resolves({
        teamName: "Avaí/Kindermann",
      } as Team);
    
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/1');

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.equal(200);

    expect(body).to.have.property('teamName');
    expect(body.teamName).to.be.equal('Avaí/Kindermann');
  });
});
