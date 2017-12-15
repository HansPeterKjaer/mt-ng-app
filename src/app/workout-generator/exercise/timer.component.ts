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

  ngOnInit() {
  	this.timer = Observable.interval(1000);
    console.log("df");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  start(){
    console.log("timer-start");
    if(this.subscription)
      this.subscription.unsubscribe();  
    this.subscription = this.timer.subscribe((t) => { 
        this.seconds++; 
        this.animationDelay = 0 - this.seconds; 
      });
  }

  pause(){
    this.subscription.unsubscribe();
  }

  stop(){
    this.seconds = 0;
    this.subscription.unsubscribe();
  }
}