import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusickitService {

  constructor(private http: HttpClient) { }

  getRecentlyPlayed() {
    return this.http.get('https://api.music.apple.com/v1/me/recent/played');
  }

  getRecentlyAdded() {
    return this.http.get('https://api.music.apple.com/v1/me/library/recently-added');
  }
}
