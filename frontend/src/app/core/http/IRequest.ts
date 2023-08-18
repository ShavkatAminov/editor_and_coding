import {HttpParams} from "@angular/common/http";


export interface IRequest {
    getUri(): string;

    body: object;

    params: HttpParams;
}
