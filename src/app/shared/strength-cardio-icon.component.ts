import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'diff-icon',
  template: `
  	<svg
	   xmlns:svg="http://www.w3.org/2000/svg"
	   xmlns="http://www.w3.org/2000/svg"
	   width="200"
	   height="100"
	   [ngClass]="this.size"
	   class="strength-cardio-icon"
	   viewBox="0 0 200 100">
	  <path
	     id="path4151"
	     d="M 170,74 C 170,30 130,30 130,74" 
	     class="bump" 
	     [ngStyle]="{'animation-delay': this.animationDelay }"
	     />
	  <path
	     id="path5244"
	     d="m 115.2168,73.65625 -2.66602,25.398438 86.7207,-0.714844 -2.24804,-79.048828 -36.29688,-16.7871098 -16.58594,29.0703128 33.62305,0.542969 c 1.13811,13.612089 -4.34375,41.539062 -4.34375,41.539062" 
	     />
	  <path
	     id="path5261"
	     d="m 132.04867,2.59663 -50.331851,91.55021 7.805061,4.2909 50.33169,-91.55008 -7.8049,-4.29103 z"
	      />
	  <path
	     id="path4245-3-7"
	     d="M 3.324449,15.80115 C 12.859162,-6.4878769 40.517983,2.13145 51.792477,14.33251 63.066971,2.13145 90.725766,-6.4878263 100.26046,15.80115 112.84253,45.213893 73.368333,64.31494 51.792477,98.86764 30.216622,64.31494 -9.2576066,45.213863 3.324449,15.80115 Z" 
	     class="heart"
	     [ngStyle]="{'animation-delay': this.animationDelay }"
	     fill="#f00"/>
	</svg>
  `
})
export class StrengthCardioIconComponent implements OnChanges {
	@Input() size: String = 'strength-cardio-icon--sm';
	@Input() diff: number = 3;

	private animationDelay: string = `${ 0-((this.diff-1) * 0.1) }s`;

	ngOnChanges(...args: any[]){
		this.diff = args[0].diff.currentValue;
		console.log(`${ 0-((this.diff-1) * 0.1) }s`);
		this.animationDelay = `${ 0-((this.diff-1) * 0.1) }s`;;
	}
}
