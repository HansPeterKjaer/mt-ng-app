import { Component } from '@angular/core';

import {StickDirective} from './stick.directive';

@Component({
	selector: 'aside-menu',
	templateUrl: 'aside-menu.component.html',
})
export class AsideMenuComponent {
	toggleSubMenu(event){
		event.target.parentNode.classList.toggle('menu-item--toggled');
	}
}