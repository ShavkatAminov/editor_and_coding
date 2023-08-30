import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {imports} from "@test/imports";
import {WidgetsComponent} from "../../pages/home/widgets/widgets.component";

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalComponent, WidgetsComponent],
            imports: imports,
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {component: WidgetsComponent, title: 'Title'},
                },
                {
                    provide: MatDialogRef,
                    useValue: {},
                },
            ]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
