import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { HeaderService } from '../services/header';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  constructor(private profileService: ProfileService) {}

}
