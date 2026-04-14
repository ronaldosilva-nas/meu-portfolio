import { Component } from '@angular/core';
import { HeaderService } from '../services/header';
import { HeaderModel } from '../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private headerService: HeaderService) {}

  menuStatus = 'closed';

  menuItems?: Array<HeaderModel>;
  
  ngOnInit() {
    const menu = this.headerService.getItems();

    this.menuItems = menu;
  }

  menuClick() {
    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');
  }
}
