import { generateToken } from '../../../src/auth/jwtFunction';

export const missingToken = { authorization: '' };
export const invalidToken = { authorization: 'Token Inválido' };
export const validToken = { authorization: generateToken('Token Valido') };
