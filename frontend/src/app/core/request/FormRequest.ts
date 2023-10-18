import {HttpParams} from "@angular/common/http";
import {IRequest} from "../http/IRequest";

export class FormRequest implements IRequest {

  constructor(public url: string, public id: number | null = null) {}

  getUri(): string {
    return this.url + (this.id ? "/" + this.id : '');
  }

  body: any = {};
  params: HttpParams = new HttpParams();
}
