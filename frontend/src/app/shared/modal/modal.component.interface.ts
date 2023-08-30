import {Subject} from "rxjs";


export interface ModalComponentInterface {
    sendClose: Subject<any>;

    setData(data: any): void;
}
