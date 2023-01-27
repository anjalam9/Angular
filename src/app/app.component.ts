import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hourDegrees: number | undefined;
  minuteDegrees: number | undefined;
  secondDegrees: number | undefined;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    this.hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
    this.minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    this.secondDegrees = (seconds / 60) * 360;
  }
}
