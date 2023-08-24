import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./MenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items.push(new MenuItem("Home", '/home', true));
    this.items.push(new MenuItem("Problems", '/problems', false));
  }
}
