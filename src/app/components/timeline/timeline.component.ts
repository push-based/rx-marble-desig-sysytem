import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public observables = [
    {
      img: '/assets/graphics/components/observable/timeline1.svg',
      alt: 'Timeline 1 Graphic',
    },
    {
      img: '/assets/graphics/components/observable/timeline2.svg',
      alt: 'Timeline 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
