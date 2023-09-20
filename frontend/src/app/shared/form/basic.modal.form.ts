import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {BasicForm} from "./basic.form";
import {FormModalComponentInterface} from "./form.modal.component.interface";

@Injectable()
export abstract class BasicModalForm extends BasicForm implements FormModalComponentInterface {

    save(): void {
       this.saveProcess()
    }
    override request: any;

    sendClose: Subject<any> = new Subject<any>();
    setData(data: any, beforeSetting:  ((res: any) => any) | null = null) {
        if(data) {
            this.request.id = data;
            this.http.request(this.request, 'get').subscribe(res => {
              if(beforeSetting) {
                beforeSetting(res);
              }
              this.form.patchValue(res);
            })
        }
    }

    override saveCallback(result: Object): void {
        this.sendClose.next(true);
    }

}
