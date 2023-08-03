import { DataTypes, Model } from 'sequelize';
import connection from './index';

class User extends Model {
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: string;
}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  tableName: 'users',
  timestamps: false,
});

export default User;