export class Session {
  constructor(
    public accessToken: string,
    public name: string,
    public email: string,
    public role: number
  ) {  }
}
