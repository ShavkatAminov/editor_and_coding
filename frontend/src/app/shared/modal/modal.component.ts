import {Component, OnInit, ViewChild, Inject, ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HostDirective} from "./host.directive";
import {Observable} from "rxjs";
import {ModalComponentInterface} from "./modal.component.interface";
import {InjectorInstance} from "../shared.module";
import {FormModalComponentInterface} from "../form/form.modal.component.interface";

@Component({
    selector: 'het-modal',
    styleUrls: ['./modal.component.scss'],
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
    constructor(protected dialogRef: MatDialogRef<ModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: { component: any, title: string, formData: any},
                protected dc: ChangeDetectorRef) {
        this.component = data.component
        this.title = data.title
    }

    save(){
        (this.componentModal.instance as FormModalComponentInterface).save();
    }

    ngOnInit(): void {
        this.loadingData();
        this.dc.detectChanges();
    }

    @ViewChild(HostDirective, {static: true}) appHost!: HostDirective
    public component: any
    public componentModal: any
    public title: string

    public loadingData() {
        const _viewContainerRef = this.appHost.viewContainerRef;
        _viewContainerRef.clear();
        this.componentModal = _viewContainerRef.createComponent<any>(this.component);
        (this.componentModal.instance as ModalComponentInterface)?.setData?.(this.data.formData);
        this.componentModal.instance?.sendClose?.subscribe((x: any) => {
            this.dialogRef.close(x)
        })
    }

}

export enum SizeModal {
    'xsm' = 0,
    'sm' = 1,
    'md' = 2,
    'lg' = 3,
    'xlg' = 4,
    'xxl' = 5,
    'fs' = 6,
}


export class ModalClass {
    static showModal(component: any, title: string, formData: any = null, size: SizeModal = SizeModal.md): Observable<any> {
        let dialog: MatDialog = InjectorInstance.get(MatDialog)
        // @ts-ignore
        let dialogRef = dialog.open(ModalComponent, {
            data: {component: component, title: title, formData: formData},
            width: ModalClass.setSize(size),
            maxWidth: ModalClass.setSize(size),
        });
        return dialogRef.afterClosed();
    }

    public static setSize(size: number) {
        let modalSize: string = "100%"
        if (size === 0) {
            modalSize = "30vw"
        }
        if (size === 1) {
            modalSize = "50vw"
        }
        if (size === 2) {
            modalSize = "60vw"
        }
        if (size === 3) {
            modalSize = "70vw"
        }
        if (size === 4) {
            modalSize = "80vw"
        }
        if (size === 5) {
            modalSize = "90vw"
        }
        if (size === 6) {
            modalSize = "100vw"
        }
        return modalSize
    }
}

