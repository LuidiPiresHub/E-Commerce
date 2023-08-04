import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin'
      },
      {
        name: 'João',
        email: 'joao@gmail.com',
        password: 'joaozinho',
        role: 'user'
      },
      {
        name: 'Maria',
        email: 'maria@gmail.com',
        password: 'mariazinha',
        role: 'user'
      },
    ], {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {}, {});
  }
};