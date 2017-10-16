import { Component, OnInit, Input} from '@angular/core';

import { BlogService } from '../blog.service';

import { BlogPost } from 'app/models/blog-post';
//import {ExerciseThumbnailComponent} from 'app/workout-generator/exercise/exercise-thumbnail.component';


@Component({
	selector: 'blog-index',
	templateUrl: './blog-index.component.html'
})
export class BlogIndexComponent implements OnInit {

	posts: BlogPost[];

	constructor(private blogService: BlogService) {
		console.log('blog index');
	}

	ngOnInit() {
		this.blogService.getPosts().then(posts => this.posts = posts);
	}
}
