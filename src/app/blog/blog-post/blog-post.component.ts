import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

import { BlogService } from '../blog.service';
import { BlogPost } from 'app/models/blog-post';

@Component({
	selector: 'blog-post',
	templateUrl: 'blog-post.component.html'
})
export class BlogPostComponent implements OnInit {
	
	private post: BlogPost;
	
	constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {
		console.log(activatedRoute);
	}

	ngOnInit() {
		Observable.zip(
			this.activatedRoute.params, 
			this.activatedRoute.url, 
			(params, url) => ({params, url})
		).subscribe(obj => {
			let slug = obj.params['slug'];
			let isPage: Boolean = obj.url[0] && obj.url[0].path == 'page';

			if (isPage)
        		this.blogService.getPage(slug).then(post => this.post = post)
        	else	
        		this.blogService.getPost(slug).then(post => this.post = post)
		});
	}
}


