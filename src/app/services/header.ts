import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  
  constructor() {}

  getItems(): Array<Menu> {
    
    const menu: Array<Menu> = [
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
