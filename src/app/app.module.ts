import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { WorkoutGeneratorComponent } from './workout-generator/workout-generator.component';
//import { BlogComponent } from './blog/blog.component';
import { WorkoutGeneratorModule } from './workout-generator/workout-generator.module';
import { BlogModule } from './blog/blog.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    WorkoutGeneratorModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
