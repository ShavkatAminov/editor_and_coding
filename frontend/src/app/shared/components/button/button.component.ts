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
  @Output() onClick = new EventEmitter<any>;
}
