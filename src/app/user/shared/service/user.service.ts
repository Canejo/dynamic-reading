import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUrlAuthGoogle(): string {
    return environment.apiUrl + '/AccountGoogle/signInWithGoogle';
  }
}
