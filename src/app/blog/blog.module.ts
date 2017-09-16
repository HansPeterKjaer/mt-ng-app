import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostTeaserComponent } from './blog-index/blog-index.component';

import { ExerciseThumbnailComponent } from './exercise/exercise-thumbnail.component';
import { WorkoutSpotComponent } from './workout/workout-spot.component';
import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';
import { AsideMenuComponent} from './aside-menu/aside-menu.component'
import { BlogService } from './blog.service';
import { WindowRefService } from 'app/shared/window-ref.service';
import { StickDirective } from './aside-menu/stick.directive';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    AsideMenuComponent,
  	BlogComponent,
    BlogIndexComponent,
    BlogPostComponent,
    BlogPostTeaserComponent,
    ExerciseThumbnailComponent,
    WorkoutSpotComponent,
    StickDirective
  ],
  providers: [
  	BlogService,
    WorkoutGeneratorService,
    WindowRefService
  ]
})
export class BlogModule { }
