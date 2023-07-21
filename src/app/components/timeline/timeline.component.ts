import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public timelines = [
    {
      img: '/assets/graphics/components/timeline/timeline1.svg',
      alt: 'Timeline 1 Graphic',
    },
    {
      img: '/assets/graphics/components/timeline/timeline2.svg',
      alt: 'Timeline 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
