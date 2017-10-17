import { Component, OnInit, HostListener, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import 'rxjs/add/operator/switchMap';

import { StateService } from './state.service';

@Component({
	selector: 'app-workout-generator',
	templateUrl: './workout-generator.component.html',
	styleUrls: ['./workout-generator.component.less']
})
export class WorkoutGeneratorComponent implements OnInit {
	prevIndex: number = 0;
	currentIndex: number = 0;
	menuItems = null;
	exercise = null;
	workout = null;
	swiperIndex: number = 0;
	@ViewChild(SwiperDirective) swiperWrapper: SwiperDirective;

	constructor( private stateService: StateService, private route: ActivatedRoute, private router: Router) { 
		stateService.exercise$.subscribe(ex => { 
			if(this.exercise === null) this.swiperWrapper.update(false);
			setTimeout(()=>{this.swiperIndex = 2;}, 1); 
			this.exercise = ex;
		});
		stateService.workout$.subscribe(wo => { 
			if(this.workout === null) this.swiperWrapper.update(false); 
			setTimeout(()=>{this.swiperIndex = 1;}, 1);
			this.workout = wo;
		});

		this.menuItems = [
			{name: 'Generator', selected: true, class: 'current next' },
			{name: 'Workout', selected: false, class: '' },
			{name: 'Exercise', selected: false, class: '' }
		];
	}

	mtPanelMenuItemClick(event, index: number) {
		console.log(index  + ' ' +this.prevIndex);
		if (index == this.prevIndex) return;
		this.swiperIndex = index;
  	}

	ngOnInit() {
	}

	ngAfterViewInit() {
    	
  	}

  	onIndexChange(index: number) {
  		setTimeout(()=>{
  			this.menuItems[this.prevIndex].selected = false;
			this.menuItems[this.prevIndex].class = '';
			this.menuItems[index].selected = true;
			this.menuItems[index].class = `current ${(this.prevIndex > index) ? 'next' : 'prev'}` ;
			this.prevIndex = index; 
  		},1);
  	}
}
