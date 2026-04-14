import { Injectable } from '@angular/core';
import { ProfileModel } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  
  constructor() {}

  getProfile(): ProfileModel {

    var profile: ProfileModel = {
      name: 'Ronaldo Silva Nascimento',
      email: 'silvaronaldo7662@gmail.com',
      whatsApp: 'https://api.whatsapp.com/send?phone=5599982584390&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!',
      linkedIn: 'https://www.linkedin.com/in/ronaldo-silva-nascimento/'
    }
    return profile;
  }
}
