export const emptyBody = {};

export const loginInvalidEmail = { email: 'notEmail' };
export const loginMissingPassword = { email: 'test@gmail.com' };
export const loginShortPassword = { email: 'test@gmail.com', password: '1234' };
export const loginInvalidPasswordType = { email: 'test@gmail.com', password: 123456 };
export const loginSucess = { email: 'test@gmail.com', password: '123456' };

export const registerShortName = { name: 'TI' };
export const registerMissingEmail = { name: 'test' };
export const registerInvalidEmail = { name: 'test', ...loginInvalidEmail };
export const registerMissingPassoword = { name: 'test', ...loginMissingPassword };
export const registerShortPassoword = { name: 'test', ...loginShortPassword };
export const registerInvalidPasswordType = { name: 'test', ...loginInvalidPasswordType };
export const registerMissingRole = { name: 'test', ...loginSucess };
export const registerSucess = { name: 'test', ...loginSucess, role: 'user' };
