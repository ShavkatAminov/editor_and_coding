import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogged = false;
  access_token: string = '';

  login(access_token: string) {
    this.access_token = access_token;
    this.isLogged = true;
  }
  logout() {
    this.access_token = "";
    this.isLogged = false;
  }
}
