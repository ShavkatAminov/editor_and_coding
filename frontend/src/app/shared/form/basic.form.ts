import { Injectable, OnDestroy } from "@angular/core";
import {AbstractControl} from "@angular/forms";
import { Subscription } from "rxjs";
import {HttpClientService} from "../../core/http/http.client.service";
import {requestTypes} from "../../core/http/http.requests";
import {FormError} from "./FormError";

@Injectable()
export abstract class BasicForm extends FormError implements OnDestroy {

  private subscription$: Subscription = new Subscription();

  constructor(public http: HttpClientService) {
    super();
  }

  beforeSave(): void {
    if(this.request)
      this.request.body = this.form.value;
  }

  onValidError(): void{ }

  saveCallback(result: Object): void { }

  errorCallback(error: Object): void {
    /*if(error instanceof HttpErrorResponse) {
      if(error.status === ErrorCodes.BAD_REQUEST) {
        let errors = error.error.errors;
        if(errors && errors.length > 0) {
          errors.forEach((errorItem: any) => {
            this.form.get(errorItem.field)?.setErrors({
              error: true,
            });
            if(!this.errorMessages.hasOwnProperty(errorItem.field)) {
              this.errorMessages[errorItem.field] = errorItem.message;
            }
            else {
              this.errorMessages[errorItem.field] += errorItem.message + ',';
            }
          })
        }
      }
    }*/
  }

  afterSave(): void {}

  request: any;

  getMethod(): requestTypes {
    if(this.request.id) {
      return "put";
    }
    else {
      return "post";
    }
  }

  private sendRequest(): void {
    if(this.request) {
      this.subscription$.add(this.http
          .request(this.request, this.getMethod())
          .subscribe({
            next: (v) => this.saveCallback(v),
            error: (e) => this.errorCallback(e),
            complete: () => this.afterSave()
          }));
    }
  }

  public saveProcess() {
    console.log('saveProcess');
    this.beforeSave();
    this.validateForm();
    if (this.form?.valid || this.form == null) {
      this.sendRequest();
    }
    if(!this.form?.valid){
      this.onValidError();
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}
