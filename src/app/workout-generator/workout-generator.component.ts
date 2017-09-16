import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


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

	constructor( private stateService: StateService, private route: ActivatedRoute, private router: Router) { 
		console.log("generator init");
	}

	swiperUpdate(){
		this.swiper && this.swiper.update(true);
	}

	ngOnInit() {
		if(window.innerWidth < 1200){
			var Swiper = require('swiper');
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
	  		});
		}   
	}

}
