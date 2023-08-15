export const userRegister = {
  name: 'userTest',
  email: 'userTest@gmail.com',
  password: '123456',
  role: 'user',
};

export const userLogin = {
  email: userRegister.email,
  password: userRegister.password
};

export const sucessResponseMock = { dataValues: { id: 1, ...userRegister } };

export const registerResponseFail = { name: 'SequelizeUniqueConstraintError' };

export const dbError = { name: 'SequelizeConnectionError' };

export const serverError = 'Internal Server Error';
