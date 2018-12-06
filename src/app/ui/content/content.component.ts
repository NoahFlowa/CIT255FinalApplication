import { Component, OnInit } from '@angular/core';
import { MusickitService } from 'src/app/services/musickit.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  recentlyPlayed: object;
  recentlyAdded: object;

  constructor(private data: MusickitService) { }

  ngOnInit() {
    this.data.getRecentlyPlayed().subscribe(data => {
      this.recentlyPlayed = data;
      console.log(this.recentlyPlayed);
    });

    this.data.getRecentlyAdded().subscribe(data => {
      this.recentlyAdded = data;
      console.log(this.recentlyAdded);
    });
  }

}
