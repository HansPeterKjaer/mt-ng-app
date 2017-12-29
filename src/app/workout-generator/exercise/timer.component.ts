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

  public start(){
    this.started = true;
    this.initialState = false;
    this.unsubscribe();  

    this.subscription = this.timer.subscribe((t) => { 
        this.seconds++; 
        this.animationDelay = 0 - this.seconds; 
      });
  }

  public pause(){
    this.started = false;
    this.unsubscribe();
  }

  public stop(){
    this.started = false;
    this.seconds = 0;
    this.unsubscribe();
    this.animationDelay = 0;
  }

  private unsubscribe() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  public reset(){
    this.stop();
    this.initialState = true;
  }
}