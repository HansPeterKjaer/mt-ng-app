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

@Component({
  	selector: 'blog-post-teaser',
  	template: `
   		<a routerLink="/blog/post/{{post.slug}}" class="no-linkstyle">
			<div class="blog-post blog-post--teaser clearfix">
				<img *ngIf="post.featuredImage" src="{{post.featuredImage}}" class="pull-left teaser-image" />
				<h1 [innerHTML]="post.title" class="header"></h1>
				<div *ngIf="post.excerpt" [innerHTML]="post.excerpt"></div>
			</div>
		</a>`
})
export class BlogPostTeaserComponent {  	
  	@Input() post: BlogPost;
}