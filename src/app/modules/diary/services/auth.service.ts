import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  private token = ''

  constructor() {}

  login() {
    this.token = 'Abc'
  }

  logout() {
    this.token = ''
  }

  isAuthenticated(): boolean {
    return !!this.token
  }
}
