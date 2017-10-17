import { Component, OnInit, Input} from '@angular/core';

import { BlogService } from '../blog.service';

import { BlogPost } from 'app/models/blog-post';

@Component({
  	selector: 'blog-post-teaser',
  	template: `
   		<a routerLink="/blog/post/{{post.slug}}" class="no-linkstyle">
			<div class="blog-post blog-post--teaser clearfix">
				<h1 [innerHTML]="post.title" class="header"></h1>
				<img *ngIf="post.featuredImage" src="{{post.featuredImage}}" class="float-left teaser-image" />
				<div style="clear:both" *ngIf="post.excerpt" [innerHTML]="post.excerpt"></div>
			</div>
		</a>`
})
export class BlogPostTeaserComponent {  	
  	@Input() post: BlogPost;
}