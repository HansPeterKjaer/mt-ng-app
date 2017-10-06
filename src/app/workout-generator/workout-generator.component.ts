import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DragScrollModule } from 'angular2-drag-scroll';

import { StateService } from './state.service';

@Component({
	selector: 'app-workout-generator',
	templateUrl: './workout-generator.component.html',
	styleUrls: ['./workout-generator.component.less']
})
export class WorkoutGeneratorComponent implements OnInit {
	swiper = null;
	prevIndex: number = 0;
	currentIndex: number = 0;
	menuItems = null;
	exercise = null;
	workout = null;

	constructor( private stateService: StateService, private route: ActivatedRoute, private router: Router) { 
		stateService.exercise$.subscribe(ex => this.exercise = ex);
		stateService.workout$.subscribe(wo => this.workout = wo);
		this.menuItems = [
			{name: 'Generator', selected: true, class: 'current next' },
			{name: 'Workout', selected: false, class: '' },
			{name: 'Exercise', selected: false, class: '' }
		];
	}

	mtPanelMenuItemClick(event, index) {
		if (index == this.prevIndex) return;

		this.menuItems[this.prevIndex].selected = false;
		this.menuItems[this.prevIndex].class = '';
		this.menuItems[index].selected = true;
		this.menuItems[index].class = `current ${(this.prevIndex > index) ? 'next' : 'prev'}` ;
		this.prevIndex = index; 
		console.log(this.menuItems[index]);

  	}

	ngOnInit() {
	}
}
