import { Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';
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
	slidesPerView: number = 1;

	@ViewChild(SwiperDirective) swiperWrapper: SwiperDirective;

	constructor( private stateService: StateService, private route: ActivatedRoute, private router: Router) { 
		
		stateService.exercise$.subscribe(ex => { 
			if (ex === null) this.swiperWrapper.update(false);
			if (this.slidesPerView === 1)
				this.swiperWrapper.setIndex(2);
			else if (this.slidesPerView === 2)
				this.swiperWrapper.setIndex(1); 
			//console.log(this.slidesPerView);
			this.exercise = ex;
		});

		stateService.workout$.subscribe(wo => { 
			if (wo === null) this.swiperWrapper.update(false); 
			if (this.slidesPerView === 1)
				this.swiperWrapper.setIndex(1);
			this.workout = wo;
		});

		this.menuItems = [
			{name: 'Generator', selected: true, class: 'current next' },
			{name: 'Program', selected: false, class: '' },
			{name: 'Øvelse', selected: false, class: '' }
		];
	}

	mtPanelMenuItemClick(event, index: number) {
		//console.log(index  + ' ' +this.prevIndex);
		if (index == this.prevIndex) return;
		this.swiperIndex = index;
		this.swiperWrapper.setIndex(index);
  	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		let swiperWrapperWidth = this.swiperWrapper.swiper.container[0].offsetWidth;
		let swiperSlideWidth = this.swiperWrapper.swiper.slides[0].offsetWidth;
		this.slidesPerView = Math.round(swiperWrapperWidth / swiperSlideWidth);
    	//console.log(`Slides per view ${this.slidesPerView}`);
  	}

  	onIndexChange(index: number) {
  		//console.log(`onindexchange ${index}`);
  		this.menuItems[this.prevIndex].selected = false;
		this.menuItems[this.prevIndex].class = '';
		this.menuItems[index].selected = true;
		this.menuItems[index].class = `current ${(this.prevIndex > index) ? 'next' : 'prev'}` ;
		this.prevIndex = index; 
  	}
}
