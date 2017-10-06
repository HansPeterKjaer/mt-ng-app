import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutGeneratorRoutingModule } from './workout-generator-routing.module';
import { WorkoutGeneratorComponent } from './workout-generator.component';
import { FormsModule } from '@angular/forms';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseThumbnailComponent } from './exercise/exercise-thumbnail.component';
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';
import { StateService } from './state.service';
import { StrengthCardioIconComponent } from 'app/shared/strength-cardio-icon.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  imports: [
    CommonModule,
    WorkoutGeneratorRoutingModule,
    FormsModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  declarations: [
  	WorkoutGeneratorComponent, 
  	WorkoutComponent, 
  	ExerciseComponent, 
  	ExerciseThumbnailComponent, 
  	GeneratorFormComponent,
    StrengthCardioIconComponent
  ],
  providers: [
  	WorkoutGeneratorService, 
  	StateService
  ]
})
export class WorkoutGeneratorModule { }
