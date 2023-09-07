import {Component, forwardRef} from '@angular/core';
import BasicInput from "../BasicInput";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent extends BasicInput {

}
