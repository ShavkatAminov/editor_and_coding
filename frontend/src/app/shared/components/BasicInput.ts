import {ControlValueAccessor, FormControl} from "@angular/forms";
import {Component, Input, OnInit} from "@angular/core";

@Component({
  template: '',
})
export default class BasicInput implements ControlValueAccessor, OnInit {

  ngOnInit(): void {
    this.control.valueChanges.subscribe(res => {
      this.onChange(res);
    })
  }

  @Input() label = '';
  control: FormControl = new FormControl();

  protected onChange: Function = (value: any) => {};
  protected onTouch: Function = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled) {
      this.control.disable();
    }
    else {
      this.control.enable();
    }
  }
}
