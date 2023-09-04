import {HttpParams} from "@angular/common/http";
import {IRequest} from "../../../core/http/IRequest";
import HttpUtils from "../../../core/http/HttpUtils";

export class AbstractSearch implements IRequest {
  getUri(): string {
    return this.url;
  };
  params!: HttpParams;

  constructor(protected url: string, private paramsObj: any = {}) {
    this.url = this.url + '';
    paramsObj['pageable'] = new Pageable();
    this.setParams(paramsObj);
  }

  setPage(page: number) {
    this.paramsObj.pageable.page = page - 1;
    this.setParams(this.paramsObj);
  }

  setParams(paramsObj: any) {
    this.params = HttpUtils.toHttpParams(paramsObj)
  }
}

export class Pageable {
  page: number = 0;
  perPage: number = 10;
}
