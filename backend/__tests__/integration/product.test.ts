import chai ,{ expect } from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import mockProduct from './mocks/product.mock';
import Products from '../../src/database/models/products.models';
import { Model } from 'sequelize';

chai.use(chaiHttp);

describe('Teste de integração da rota /product', () => {
  afterEach(() => sinon.restore());
  describe('Testando caso de sucesso', () => {
    it('Testa se a rota /product retorna os productos', async () => {
      sinon.stub(Products, 'findAll').resolves(mockProduct as Model[]);
      const { body, status } = await chai.request(app).get('/products');

      expect(status).to.equal(200);
      expect(body).to.deep.equal({message: mockProduct.map(({ dataValues }) => dataValues)});
    });
  });

  describe('Testando caso de erro', () => {
    it('Testa se a rota /product retorna um erro se não tiver produtos', async () => {
      sinon.stub(Products, 'findAll').resolves([]);
      const { body, status } = await chai.request(app).get('/products');

      expect(status).to.equal(404);
      expect(body).to.deep.equal({message: 'Product not found'});
    });

    it('Testa se a rota /product retorna um erro interno', async () => {
      sinon.stub(Products, 'findAll').throws('Internal Server Error');
      const { body, status } = await chai.request(app).get('/products');

      expect(status).to.equal(500);
      expect(body).to.deep.equal({message: {name: 'Internal Server Error'} });
    });
  });
});