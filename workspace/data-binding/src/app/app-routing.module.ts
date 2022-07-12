import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from './pages/course/course-form/course-form.component';
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';


const routes: Routes = [
  { path: '', component: CourseListComponent},
  {path:'form', component: CourseFormComponent},
  {path:'form/:id', component: CourseFormComponent},
  { path: 'data-binding', component: DataBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
