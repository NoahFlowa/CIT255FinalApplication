import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicKit';
}

export class MusickitService {

    constructor(private http: HttpClient) { }

    getRecentlyPlayed() {
      return this.http.get('https://api.music.apple.com/v1/me/recent/played');
    }

    getRecentlyAdded() {
      return this.http.get('https://api.music.apple.com/v1/me/library/recently-added');
    }

  }
