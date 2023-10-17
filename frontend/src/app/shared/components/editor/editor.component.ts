import {Component, EventEmitter, Output} from '@angular/core';
import {CodeModel} from "@ngstack/code-editor";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @Output() valueChange = new EventEmitter<string>();

  model: CodeModel = {
    language: 'cpp',
    uri: 'main.json',
    value: '',
  };

  options = {
    contextmenu: true,
    height: 500,
    minimap: {
      enabled: true,
    },
  };
}
