export = index;
declare class index {
  // Circular reference from index
  static Strategy: any;
  constructor(options: any, verify: any);
  name: any;
  authenticate(req: any, options: any): any;
  authorizationParams(options: any): any;
  parseErrorResponse(body: any, status: any): any;
  tokenParams(options: any): any;
  userProfile(accessToken: any, done: any): void;
}
