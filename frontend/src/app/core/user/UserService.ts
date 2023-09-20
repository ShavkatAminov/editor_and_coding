import {Injectable} from "@angular/core";
import {LocalService} from "../services/local.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static ACCESS_TOKEN: string = "ACCESS_TOKEN";
  constructor(private local: LocalService) {
    this.access_token = this.local.getData(UserService.ACCESS_TOKEN);
    if(this.access_token) {
      this.isLogged = true;
    }
  }
  isLogged = false;
  access_token: string | null = '';

  login(access_token: string) {
    this.access_token = access_token;
    this.isLogged = true;
    this.local.saveData(UserService.ACCESS_TOKEN, access_token);
  }

  logout() {
    this.access_token = "";
    this.isLogged = false;
    this.local.removeData(UserService.ACCESS_TOKEN);
  }
}
