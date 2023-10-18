import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color = 'blue';
  @Input() type = 'submit';
  @Input() label = 'Submit';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<any>;
}
