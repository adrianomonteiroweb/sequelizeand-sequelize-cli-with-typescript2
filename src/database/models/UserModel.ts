import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class UserModel extends Model {}

export default UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    tableName: 'user',
    timestamps: false,
    sequelize,
  }
);
