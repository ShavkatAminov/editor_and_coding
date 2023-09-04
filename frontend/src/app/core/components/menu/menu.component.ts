import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./MenuItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];

  setActive(item: MenuItem) {
    this.items.forEach(item => {
      item.isActive = false;
    });
    item.isActive = true;
  }
  ngOnInit(): void {
    this.items.push(new MenuItem("Home", '/home', true));
    this.items.push(new MenuItem("Problems", '/problems', false));
    this.items.push(new MenuItem("Admin", '/admin', false));
  }
}
