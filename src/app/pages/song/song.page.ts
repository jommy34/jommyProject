import { Component, OnInit, ViewChild } from '@angular/core';
import { Howl, Holwer } from 'howler';
import { IonRange } from '@ionic/angular';

import { Platform } from '@ionic/angular';

export interface Track  {
  name: string;
  path: string;
}

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})

export class SongPage implements OnInit {
  playlist: Track[] = [
    // {
    //   name: 'scream',
    //   path: './assets/mp3/scream.mp3'
    // },
    {
      name: 'deadman',
      path: './assets/mp3/deadman.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', {static: false}) range: IonRange;

  constructor(public platform: Platform) { }

  start(track: Track) {
    if (this.player) {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          this.player.play();
        }
        else {
          this.player.pause();
        }
      }
    else {
      this.player = new Howl({
        src: [track.path],
        html5: true,
        onplay: () => {
          this.isPlaying = true;
          this.activeTrack = track;
          this.updateProgress();
       },
       onend: () => {
        this.isPlaying = !this.isPlaying;
       }
     });
     this.player.play();
    }
  }
  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue/100));
  }

  updateProgress() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    },1000)
  }

  ngOnInit() {
  }

}
