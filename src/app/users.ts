export class Users {
  // tslint:disable-next-line: variable-name
  constructor(
    public login: string,
    // tslint:disable-next-line: variable-name
    public avatar_url: string,
    // tslint:disable-next-line: variable-name
    public followers_url: string,
    // tslint:disable-next-line: variable-name
    public following_url: string,
    // tslint:disable-next-line: variable-name
    public repos_url: string,
    public name: string,
    // tslint:disable-next-line: variable-name
    public repo_url: string,
    public createdAt: Date
  ) {}
}
