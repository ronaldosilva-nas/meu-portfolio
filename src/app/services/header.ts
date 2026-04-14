import { Injectable } from '@angular/core';
import { HeaderModel } from '../models/header';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  
  constructor() {}

  getItems(): Array<HeaderModel> {
    
    const menu: Array<HeaderModel> = [
      {
        name: 'Inicio',
        url: '#banner'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'Habilidades',
        url: '#skils'
      },
      {
        name: 'Projetos',
        url: '#projects',
      },
      {
        name: 'Contato',
        url: '#contact'
      }
    ];
    return menu;
  }
}
