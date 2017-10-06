import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/rx';

import {WindowRefService} from 'app/shared/window-ref.service';

@Directive({
    selector: '[scrollsnap]'
})

export class ScrollSnapDirective {

    constructor(private _element: ElementRef, private _window: WindowRefService) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(){
    }

    @HostListener('window:resize', ['$event'])
    handleResizeEvent(e) {
        console.log("resize");
    }

    @HostListener('scroll', ['$event'])
    handleScrollEvent(e:Event) {
        console.log(e)       
    }
}