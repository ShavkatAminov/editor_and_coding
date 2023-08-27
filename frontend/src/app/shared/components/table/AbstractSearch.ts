import {HttpParams} from "@angular/common/http";
import {IRequest} from "../../../core/http/IRequest";

export class AbstractSearch implements IRequest {
  getUri(): string {
    return this.url;
  };
  params: HttpParams = new HttpParams();
  body: any = {
    pageable: new Pageable(),
  };

  constructor(protected url: string, body = {}) {
    this.url = this.url + '';

    this.body = {...this.body, ...body}
  }


}

export class Pageable {
  index: number = 0;
  size: number = 20;
}
