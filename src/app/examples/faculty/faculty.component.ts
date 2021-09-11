import {Component, HostListener, OnInit} from '@angular/core';
import {Howl} from 'howler';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  static thug = false;

  public keypressed: string;

  public sound = new Howl({ src: ['assets/bcb17350.mp3'], html5 : true, onend: function() {
      FacultyComponent.thug = false;
    }});

  get thug() {
    return FacultyComponent.thug;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key >= 'a' && event.key <= 'z' && !FacultyComponent.thug) {
      this.keypressed = this.keypressed.substr(1) + event.key;
      if (this.keypressed === 'sundaram') {
        FacultyComponent.thug = true;
        this.play_music();
      }
    }
  }

  play_music() {
    this.sound.play();
  }

  constructor() { }

  ngOnInit(): void {
    this.keypressed = 'aaaaaaaa';
  }

}
