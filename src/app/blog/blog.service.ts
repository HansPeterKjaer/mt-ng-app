import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BlogPost } from 'app/models/blog-post';

@Injectable()
export class BlogService {
	private apiUrl = '/wpblog/wp-json/wp/v2'

	constructor(private http: Http) { }

	getPost(slug: string): Promise<BlogPost>{
		let url = `${this.apiUrl}/posts?embed&slug=${slug}`;
		return this.http.get(url)
			.toPromise()
			.then(response => { 
				let data = response.json();
				console.log(response);
				if (data){
					return this.mapJsonToPost(data[0]);	
				}                                   
				else {
					throw 'error -no workout found';
				}
			})
			.catch(this.handleError);
	}

	getPage(slug: string): Promise<BlogPost>{
		let url = `${this.apiUrl}/pages?embed&slug=${slug}`;
		return this.http.get(url)
			.toPromise()
			.then(response => { 
				let data = response.json();
				console.log(response);
				if (data){
					return this.mapJsonToPost(data[0]);	
				}                                   
				else {
					throw 'error -no workout found';
				}
			})
			.catch(this.handleError);
	}

	getPosts(): Promise<BlogPost[]>{
		let url = `${this.apiUrl}/posts?_embed`;
		return this.http.get(url)
			.toPromise()
			.then(response => { 
				let data = response.json();
				if (data){
					let posts: Array<BlogPost> = [];
					for (let post of data){
						posts.push(this.mapJsonToPost(post));
					}

					return posts;	
				}                                   
				else {
					throw 'error -no posts found';
				}
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		//console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private mapJsonToPost(json): BlogPost{
		let blogPost = new BlogPost;

		blogPost.id = json.id;
		blogPost.title = json.title.rendered;
		blogPost.content = json.content.rendered;
		blogPost.excerpt = json.excerpt.rendered;
		blogPost.slug = json.slug;
	//	if (json._embedded && json._embedded['wp:featuredmedia'] ) console.log(json._embedded['wp:featuredmedia'][0]);
		blogPost.featuredImage = (json._embedded && json._embedded['wp:featuredmedia'] && json._embedded['wp:featuredmedia'][0].media_type == 'image' ) ? json._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : null;
		blogPost.featuredImage = (json._embedded && json._embedded['wp:featuredmedia'] && json._embedded['wp:featuredmedia'][0].media_type == 'image' && json._embedded['wp:featuredmedia'][0].media_details.sizes.medium ) ? json._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : null; 

		return blogPost;
	} 
}