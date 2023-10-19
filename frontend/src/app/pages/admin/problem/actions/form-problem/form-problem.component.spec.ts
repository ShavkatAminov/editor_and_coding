import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProblemComponent } from './form-problem.component';
import {imports} from "../../../../../../test/imports";

describe('FormProblemComponent', () => {
  let component: FormProblemComponent;
  let fixture: ComponentFixture<FormProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ FormProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
