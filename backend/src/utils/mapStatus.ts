export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  UNIQUE = 409,
  INTERNAL = 500
}

export const mapStatus = (type: keyof typeof HttpStatus): number => HttpStatus[type];
