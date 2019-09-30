import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repos } from './repos';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  user: Users;
  repo: Repos;
  newRepo: any;
  newUser: any;
  private userName: string;


  private accessToken = '7eefaf4f6093f2d9bca88d60c85d764c1bdbf8d9';


  constructor(private http: HttpClient) {

    // tslint:disable-next-line: new-parens
    this.user = new Users ('', '', '', '', '', '', '',  new Date);
    this.repo = new Repos('', '', '');
    console.log('Service Works!');
    this.userName = 'JECINTA534521';

  }
  getUserInfo() {

    interface ApiResponse {

      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;
      name: string;

      created_at: Date;
      html_url: string;

    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName +
      '?access_token=' + environment.apiKey)

      .toPromise().then(response => {
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.followers_url = response.followers;
        this.user.following_url = response.following;
        this.user.repos_url = response.public_repos;
        this.user.name = response.name;

        this.user.createdAt = response.created_at;
        this.user.repo_url = response.html_url;
        console.log(this.user);

      },
      error => {
        reject(error);
      });
    } ));
    return promise;

  }

  getRepoInfo(username) {

    interface ApiResponse {

     name: string;
      repo_url: string;
      description: string;

    }

    const promise = new Promise(( (resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiKey)
      .toPromise()
      // tslint:disable-next-line: variable-name
      .then(response_repo => {
        this.newRepo = response_repo;
        // console.log(this.newRepo);

        resolve();
  },
  error => {
    reject(error);
  }
);
}));
    return promise;
  }


 updateProfile(userName: string) {
   this.userName = userName;
 }
}
