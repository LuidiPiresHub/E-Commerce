import { DataTypes, Model } from 'sequelize';
import connection from './index';

class Products extends Model {
  declare id: number;
  declare productName: string;
  declare price: number;
  declare category: string;
}

Products.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  tableName: 'products',
  timestamps: false,
  underscored: true,
});

export default Products;