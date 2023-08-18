import { Injectable, OnDestroy } from "@angular/core";
import {AbstractControl, FormArray, FormGroup, ValidationErrors} from "@angular/forms";
import { Subscription } from "rxjs";
//import {ErrorList} from "./errorList";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpClientService} from "../http/http.client.service";
import {ErrorCodes} from "../http/errorCodes";
import {requestTypes} from "../http/http.requests";

export abstract class BasicForm implements OnDestroy {

  form!: FormGroup;
  private subscription$: Subscription = new Subscription();
  protected errorMessages: any = {};
  private afterSaveBtnClick = false;

  constructor(public http: HttpClientService) { }


  private validateForm(): void {
    this.form.markAllAsTouched();
  }

  beforeSave(): void {
    if(this.request)
      this.request.body = this.form.value;
  }

  onValidError(): void{ }

  saveCallback(result: Object): void { }

  errorCallback(error: Object): void {
    if(error instanceof HttpErrorResponse) {
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
    }
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
    this.errorMessages = {};
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
    this.afterSaveBtnClick = true;
    this.beforeSave();
    this.validateForm();
    if (this.form?.valid || this.form == null) {
      this.sendRequest();
    }
    if(!this.form?.valid){
      this.onValidError();
    }
  }



  showError(formControlName: string): boolean {
    let formControl = this.form.get(formControlName);
    return formControl!.status == 'INVALID' && formControl!.touched && this.afterSaveBtnClick;
  }

  /*errorMessage(formControlName: string) {
    let formControl: AbstractControl = this.form.get(formControlName);
    let result = "";
    if(this.showError(formControlName)) {
      const controlErrors: ValidationErrors = formControl.errors;
      if(controlErrors) {
        Object.keys(controlErrors).forEach(key => {
          if(key === 'error') {
            result += this.errorMessages[formControlName];
          }
          else {
            result += this.translate.translate('ERROR_LIST.' + ErrorList[key], controlErrors[key]);
          }
        })
      }
    }
    return result;
  }*/

  getFormValidationErrors(controls: any, prefix: string = '') {
    let result: any[] = [];
    Object.keys(controls).forEach(key => {
      let control = controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        result = [...result, ...this.getFormValidationErrors(control.controls, prefix + key)];
      }
      else {
        const controlErrors: any = this.form.get((prefix ? prefix + '.' : '') + key)?.errors;
        if (controlErrors) {
          Object.keys(controlErrors).forEach(keyError => {
            result.push({
              'control': key + ' - ' + prefix,
              'error': keyError,
              'value': controlErrors[keyError],
              'input_value': this
            });
          });
        }
      }
    });
    return result;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}
