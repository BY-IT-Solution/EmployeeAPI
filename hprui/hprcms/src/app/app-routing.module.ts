import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutionComponent } from './institution/institution.component';
import { QlookupComponent } from './qlookup/qlookup.component';
import{QuestionComponent} from './question/question.component'

const routes: Routes = [
  { path: 'institution', component: InstitutionComponent },
  { path: 'question', component:QuestionComponent},
  { path: 'qlookup', component:QlookupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
