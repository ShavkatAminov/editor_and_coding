import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';

import {imports} from "../../../../test/imports";
describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: imports,
      declarations: [ WidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
