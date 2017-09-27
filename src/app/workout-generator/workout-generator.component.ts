import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import Swiper from 'swiper';


//import { Workout } from './Workout';
//import { Exercise } from './Exercise';
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

	swiperUpdate(){
		this.swiper && this.swiper.update(true);
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
		/*if(window.innerWidth < 1200){
			this.swiper = new Swiper ('.swiper-container-h', {
				direction: 'horizontal',
				loop: false,
			    scrollbar: '.swiper-scrollbar-h',
			    scrollbarHide: false,
			    scrollbarDraggable: true,
			    scrollbarSnapOnRelease: true,
			    slidesPerView: 'auto',
			    nextButton: '.swiper-nav-button--next',
			    prevButton: '.swiper-nav-button--prev',
			    buttonDisabledClass: 'swiper-nav-button--disabled',
			    grabCursor: true
	  		});*/  
	}
}
