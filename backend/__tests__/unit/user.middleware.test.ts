import { NextFunction, Request, Response } from 'express';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { validateLogin, validateRegister } from '../../src/middlewares/validateUser';
import * as mocks from './mocks/user.middleware.mock';

chai.use(sinonChai);

describe('Testes Unitários da rota /user', () => {
  const req = {} as Request;
  const res = {} as Response;
  let next: NextFunction;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    next = sinon.spy();
  });

  afterEach(() => sinon.restore());

  describe('Middleware de Login', () => {
    it('Verifica se o campo Email existe', () => {
      req.body = mocks.emptyBody;
      validateLogin(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"email" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o email é valido', () => {
      req.body = mocks.loginInvalidEmail;
      validateLogin(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"email" must be a valid email' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o campo password existe', () => {
      req.body = mocks.loginMissingPassword;
      validateLogin(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o password tem no minimo 6 caractes', () => {
      req.body = mocks.loginShortPassword;
      validateLogin(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" length must be at least 6 characters long' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o password é do tipo string', () => {
      req.body = mocks.loginInvalidPasswordType;
      validateLogin(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" must be a string' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o login foi aprovado', () => {
      req.body = mocks.loginSucess;
      validateLogin(req, res, next);
      expect(res.status).to.not.have.been.called;
      expect(res.json).to.not.have.been.called;
      expect(next).to.have.been.called;
    });
  });

  describe('Middleware de Registro', () => {
    it('Verifica se o campo name existe', () => {
      req.body = mocks.emptyBody;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o campo name tem no minimo 3 caractes', () => {
      req.body = mocks.registerShortName;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 3 characters long' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o campo Email existe', () => {
      req.body = mocks.registerMissingEmail;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"email" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o Email é valido', () => {
      req.body = mocks.registerInvalidEmail;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"email" must be a valid email' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o campo password existe', () => {
      req.body = mocks.registerMissingPassoword;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o password tem no minimo 6 caractes', () => {
      req.body = mocks.registerShortPassoword;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" length must be at least 6 characters long' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o password é do tipo string', () => {
      req.body = mocks.registerInvalidPasswordType;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"password" must be a string' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o campo role existe', () => {
      req.body = mocks.registerMissingRole;
      validateRegister(req, res, next);
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"role" is required' });
      expect(next).to.not.have.been.called;
    });

    it('Verifica se o registro foi aprovado', () => {
      req.body = mocks.registerSucess;
      validateRegister(req, res, next);
      expect(res.status).to.not.have.been.called;
      expect(res.json).to.not.have.been.called;
      expect(next).to.have.been.called;
    });
  });
});
