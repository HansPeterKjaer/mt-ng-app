import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'timer',
  templateUrl: 'timer.component.html'
})

export class TimerComponent implements OnInit, OnDestroy {
  timer: any;
  subscription: any;
  seconds: number = 0;
  animationDelay: number = 0;
  started: boolean = false;
  initialState: boolean = true;

  ngOnInit() {
  	this.timer = Observable.interval(1000);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  start(){
    this.started = true;
    this.initialState = false;
    if(this.subscription)
      this.subscription.unsubscribe();  

    this.subscription = this.timer.subscribe((t) => { 
        this.seconds++; 
        this.animationDelay = 0 - this.seconds; 
      });
  }

  pause(){
    this.started = false;
    this.subscription.unsubscribe();
  }

  stop(){
    this.started = false;
    this.seconds = 0;
    this.subscription.unsubscribe();
    this.animationDelay = 0;
  }

  reset(){
    this.stop();
    this.initialState = true;
  }
}