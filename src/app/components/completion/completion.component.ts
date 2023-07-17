import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mds-completion',
    templateUrl: './completion.component.html',
    styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

    public completions = [
        {
            img: '/assets/graphics/components/completion/completion1.svg',
            alt: 'Completion 1 Graphic',
            desc: ' At some point, the source observable may emit a completion event. ' +
                'This event indicates that the observable has finished emitting values and will not emit any more. ' +
                'It is represented by an arrow and the pipe symbol (|) at the end of the source observable line.'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
