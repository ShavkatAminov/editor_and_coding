import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProblemComponent } from './form-problem.component';

describe('FormProblemComponent', () => {
  let component: FormProblemComponent;
  let fixture: ComponentFixture<FormProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
