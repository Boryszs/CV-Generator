import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvGeneratorComponent } from './cv-generator/cv-generator.component';

const routes: Routes = [
  {
    path:'',
    component:CvGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
