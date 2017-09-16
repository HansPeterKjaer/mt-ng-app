import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/rx';

import {WindowRefService} from 'app/shared/window-ref.service';

@Directive({
    selector: '[stick]'
})

export class StickDirective {
    private topMargin = 0;
    private prevScroll = 0;
    private currentPos = 0;
    private leftPosition: number;
    private topPosition: number;
    private sidebarHeight: number;
    private pageHeight: number;

    constructor(private _element: ElementRef, private _window: WindowRefService) {

    }

    ngOnInit() {
        
    }

    ngAfterViewInit(){
        this.sidebarHeight = (this._element.nativeElement.offsetHeight)<< 0;
        this.pageHeight = (this._window.nativeWindow.innerHeight)<< 0;
        
        let rectObj = this._element.nativeElement.getBoundingClientRect();
        this.leftPosition = (rectObj.left)<< 0;
        this.topPosition = (rectObj.top)<< 0;
        this.sidebarHeight = (this._element.nativeElement.offsetHeight)<< 0;

        this._element.nativeElement.style.position = 'fixed';
        this._element.nativeElement.style.left = `${this.leftPosition}px`;
        //this._element.nativeElement.style.paddingTop = `${this.topPosition}px`;
        this._element.nativeElement.style.top = `${this.topPosition}px`;

    }

    @HostListener('window:resize', ['$event'])
    handleResizeEvent(e) {
        console.log("resize");
    }

    @HostListener('window:scroll', ['$event'])
    handleScrollEvent(e) {
        var scrollHeight = (this._window.nativeWindow.pageYOffset)<< 0;
           
        if (this.sidebarHeight+50-scrollHeight < this.pageHeight && scrollHeight >= this.prevScroll ) {
            this.prevScroll = scrollHeight;
            return;
        }

        if(scrollHeight < this.prevScroll){
            this.currentPos = this.currentPos-(this.prevScroll-scrollHeight);    
        }
        else{
            this.currentPos = scrollHeight;
        }

        this.prevScroll = scrollHeight; 
        this._element.nativeElement.style.top = `-${this.currentPos-50}px`;
       
    }
}
// https://github.com/mikkeldamm/angular2-playground/blob/master/app/stick.rx.directive.ts