import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mds-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    public errors = [
        {
            img: '/assets/graphics/components/error/error1.svg',
            alt: 'Error 1 Graphic',
            desc: 'The source observable may encounter an error. ' +
                'This error event indicates that an error has occurred in the observable stream and no more values will be emitted. ' +
                'It is represented by a circle with a cross (X) at the end of the source observable line.'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
