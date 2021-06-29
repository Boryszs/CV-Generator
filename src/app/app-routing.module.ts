import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvGeneratorComponent } from './cv-generator/cv-generator.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:CvGeneratorComponent,
  },
  {
    path:'404',
    component:NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
