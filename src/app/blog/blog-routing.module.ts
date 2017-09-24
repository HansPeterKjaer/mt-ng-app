import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogComponent }     from './blog.component';

const routes: Routes = [
	{
		path: 'blog',
		component: BlogComponent,
		children: [
			{
				path: '',
				component: BlogIndexComponent
			},
			{
				path: 'post/:slug',
				component: BlogPostComponent
			},
			{
				path: 'page/:slug',
				component: BlogPostComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class BlogRoutingModule { }
