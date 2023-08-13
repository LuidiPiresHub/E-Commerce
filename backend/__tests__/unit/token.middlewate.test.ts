import { NextFunction, Request, Response } from 'express';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import validateToken from '../../src/middlewares/validateToken';
import * as mocks from './mocks/token.middleware.mock';

chai.use(sinonChai);

describe('Testes do Middleware de token', () => {
  const req = {} as Request;
  const res = {} as Response;
  let next: NextFunction;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    next = sinon.spy();
  });

  it('Verifica se o é campo authorization existe', () => {
    req.headers = mocks.missingToken;
    validateToken(req, res, next);
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Token is required' });
    expect(next).to.not.have.been.called;
  });

  it('Verifica se o token é invalido é retornado uma mensagem de erro', () => {
    req.headers = mocks.invalidToken;
    validateToken(req, res, next);
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Invalid Token' });
    expect(next).to.not.have.been.called;
  });

  it('Verifica se o token é validado corretamente', () => {
    req.headers = mocks.validToken;
    validateToken(req, res, next);
    expect(res.status).to.not.have.been.called;
    expect(res.json).to.not.have.been.called;
    expect(next).to.have.been.called;
  });
});