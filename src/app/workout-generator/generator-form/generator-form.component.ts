import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgForm} from '@angular/forms';


import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';
import { Workout } from 'app/models/workout';
import { StateService } from '../state.service';
import { Globals } from '../../globals';


@Component({
  selector: 'generator-form',
  templateUrl: 'generator-form.component.html'
})

export class GeneratorFormComponent implements OnInit {
  focusAreas = Globals.focusAreas;
  workout: Workout;
  selectedFocus: number = 5;
  defaultTime: string = 'all';
  diff: number = 3;
  warning: boolean = false;

  constructor(private router: Router, private stateService: StateService, private workoutGeneratorService: WorkoutGeneratorService, private route: ActivatedRoute) { 
    stateService.workout$.subscribe(wo => { this.workout = (wo) ? wo : null; this.selectedFocus = (wo) ? wo.focus : this.selectedFocus; });
  }

  onSubmit(form: NgForm) : void {
    let id = (form.value.id) ? form.value.id : null;
    let diff = form.value.diff;
    let focus = form.value.focus;
    let time = form.value.time;
    
    this.workoutGeneratorService.searchWorkout(diff,focus,time,id)
      .then(wo => {
        if (wo){
          this.stateService.addWorkout(wo); 
          this.warning = false;
          this.router.navigate(['/generator', wo.id]);
        }
        else{
          this.stateService.addWorkout(null);
          this.warning = true;
          console.log('No workout found!');
        }       
      })
      .catch(reason => {console.log(reason)});
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        var c = +params['c'] || 0;
        var f = +params['f'] || 0;
        var t = +params['t'] || 0;
        console.log('cardio: ' + c);
        console.log('fokus: ' + f);
      });
  }

}
