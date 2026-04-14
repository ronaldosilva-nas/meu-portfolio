import { Component } from '@angular/core';
import { HeaderService } from '../services/header';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private headerService: HeaderService) {}
  
}
