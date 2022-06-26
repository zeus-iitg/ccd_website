import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  width: number;
  cols: number;

  constructor() {
    this.cols = 2;
  }

  ngOnInit(): void {
    this.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.cols = (this.width > 1000) ? 2 : 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.cols = (this.width > 1000) ? 2 : 1;
  }

}
