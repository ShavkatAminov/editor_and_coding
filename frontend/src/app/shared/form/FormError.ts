import {AbstractControl, FormArray, FormGroup, ValidationErrors} from "@angular/forms";
import {ErrorList} from "./errorList";


export class FormError {
  protected errorMessages: any = {};

  protected validateForm(): void {
    this.form.markAllAsTouched();
  }

  form!: FormGroup;


  errorMessage(formControlName: string, form = this.form) {
    let formControl: any = form.get(formControlName);
    let result = "";
    if(formControl && formControl!.status == 'INVALID' && formControl!.touched) {
      const controlErrors: ValidationErrors = formControl.errors;
      if(controlErrors) {
        Object.keys(controlErrors).forEach(key => {
          if(key === 'error') {
            result += this.errorMessages[formControlName];
          }
          else {
            result +=  this.getError(key, controlErrors[key]);
          }
        })
      }
    }
    return result;
  }

  private getError(key: string, errors: any) {
    let error = ErrorList[key];
    Object.keys(errors).forEach((key: string) => {
      error = error.replace('{{' + key + '}}', errors[key]);
    });
    return error;
  }

  getFormValidationErrors(controls: any, prefix: string = '') {
    let result: any[] = [];
    Object.keys(controls).forEach(key => {
      let control = controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        result = [...result, ...this.getFormValidationErrors(control.controls, prefix + key)];
      } else {
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
}
