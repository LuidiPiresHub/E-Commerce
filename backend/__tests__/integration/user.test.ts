import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import User from '../../src/database/models/user.models';
import { Model } from 'sequelize';
import { verifyToken } from '../../src/auth/jwtFunction';
import {
  sucessResponseMock,
  userRegister,
  userLogin,
  registerResponseFail,
  dbError,
  serverError,
} from './mocks/user.mock';

chai.use(chaiHttp);

const loginRoute = '/user/login';
const registerRoute = '/user/register';
const pattern1 = 'Verifica se a rota';
const pattern2 = 'retorna uma mensagem de erro caso';

describe('Testes Integração da rota /user', () => {
  afterEach(() => sinon.restore());

  describe('Casos de Sucesso', () => {
    it(`${pattern1} "${registerRoute}" cadastra um usuario com sucesso`, async () => {
      sinon.stub(User, 'create').resolves(sucessResponseMock as Model);
      const { status, body } = await chai.request(app).post(registerRoute).send(userRegister);
      expect(status).to.equal(201);
      expect(verifyToken(body.message)).to.not.equal(null);
      expect(typeof body.message).to.equal('string');
    });

    it(`${pattern1} "${loginRoute}" realiza o login com sucesso`, async () => {
      sinon.stub(User, 'findOne').resolves(sucessResponseMock as Model);
      const { status, body } = await chai.request(app).post(loginRoute).send(userLogin);
      expect(status).to.equal(200);
      expect(verifyToken(body.message)).to.not.equal(null);
      expect(typeof body.message).to.equal('string');
    });
  });

  describe('Casos de Erro', () => {
    it(`${pattern1} "${registerRoute}" ${pattern2} de conflito com o email`, async () => {
      sinon.stub(User, 'create').throws(registerResponseFail);
      const { status, body } = await chai.request(app).post(registerRoute).send(userRegister);
      expect(status).to.equal(409);
      expect(body).to.deep.equal({ message: 'Email already registered' });
    });

    it(`${pattern1} "${registerRoute}" lança um erro caso ocorra um erro interno`, async () => {
      sinon.stub(User, 'create').throws(serverError);
      const { status, body } = await chai.request(app).post(registerRoute).send(userRegister);
      expect(status).to.equal(500);
      expect(body).to.deep.equal({ message: { name: 'Internal Server Error' } });
    });

    it(`${pattern1} "${loginRoute}" ${pattern2} o login esteja errado`, async () => {
      sinon.stub(User, 'findOne').resolves(null);
      const { status, body } = await chai.request(app).post(loginRoute).send(userLogin);
      expect(status).to.equal(401);
      expect(body).to.deep.equal({ message: 'Invalid fields' });
    });

    it(`${pattern1} "${loginRoute}" lança um erro caso ocorra um erro interno`, async () => {
      sinon.stub(User, 'findOne').throws(serverError);
      const { status, body } = await chai.request(app).post(loginRoute).send(userLogin);
      expect(status).to.equal(500);
      expect(body).to.deep.equal({ message: { name: 'Internal Server Error' } });
    });

    it(`${pattern1} ${loginRoute} lança um erro caso ocorra um erro no DB`, async () => {
      sinon.stub(User, 'findOne').throws(dbError);
      const { status, body } = await chai.request(app).post(loginRoute).send(userLogin);
      expect(status).to.equal(500);
      expect(body).to.deep.equal({ message: 'Error on Database' });
    });
    it('', () => {
      expect(true).to.eq(true);
    });
  });
});