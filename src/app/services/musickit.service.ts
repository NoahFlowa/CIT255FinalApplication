import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { NgZone } from '@angular/core/src/zone/ng_zone';
import { EventManager } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { CONTENT_ATTR } from '@angular/platform-browser/src/dom/dom_renderer';

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

// export class MusickitServiceAuth {
//   constructor () {
//     document.addEventListener('musickitloaded', function(){
//       MusicKit.configure({
//          tslint:disable-next-line:max-line-length
//         developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlIRzZMOTI3MjYifQ.eyJpc3MiOiI4UlRSQzZINE05IiwiaWF0IjoxNTQ0MTI3MzE4LCJleHAiOjE1NDQ3MzIxMTh9.ou0vakQwp-RsonfsA_77Je6ky8MMoTZ91xnsq_liskJ332zJfh7ll-Ojo0CseJamlxb3rfA66ifPUPXQtER_fw',
//         app: {
//           name: 'wMusic',
//           build: '1'
//         }
//       });
//     });
//   }
// }

// export class MusickitServiceAuth2 {
//   addEventListener(eventName: 'musickitloaded', handler: Function);

//   function musicKitConfig(developerToken: string, name: string, build: string) {

//   }
// }

// class MusicKitAuth3 {
//   constructor(private eventManager: EventManager) {
//     // tslint:disable-next-line:max-line-length
//     this.eventManager.addEventListener(Meta.prototype.getTag(CONTENT_ATTR), 'apple-music-developer-token', function() {

//     });
//   }
// }


export class MusicKitAuth4 {
  constructor(private meta: Meta) {
    this.meta.addTags([
      // tslint:disable-next-line:max-line-length
      {name: 'apple-music-developer-token', content: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlIRzZMOTI3MjYifQ.eyJpc3MiOiI4UlRSQzZINE05IiwiaWF0IjoxNTQ0MTI3MzE4LCJleHAiOjE1NDQ3MzIxMTh9.ou0vakQwp-RsonfsA_77Je6ky8MMoTZ91xnsq_liskJ332zJfh7ll-Ojo0CseJamlxb3rfA66ifPUPXQtER_fw'},
      {name: 'apple-music-app-name', content: 'wMusic'},
      {name: 'apple-music-app-build', content: '1'}
    ]);
  }
}
