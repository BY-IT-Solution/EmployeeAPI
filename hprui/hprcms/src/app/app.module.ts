import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionComponent } from './institution/institution.component';
import { ShowInstComponent } from './institution/show-inst/show-inst.component';
import { AddEditInstComponent } from './institution/add-edit-inst/add-edit-inst.component';

import { QuestionComponent } from './question/question.component';
import { ShowQuestComponent } from './question/show-quest/show-quest.component';
import { AddEditQuestComponent } from './question/add-edit-quest/add-edit-quest.component';

import { QlookupComponent } from './qlookup/qlookup.component';
import { ShowQlupComponent } from './qlookup/show-qlup/show-qlup.component';
import { AddEditQlupComponent } from './qlookup/add-edit-qlup/add-edit-qlup.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    InstitutionComponent,
    ShowInstComponent,
    AddEditInstComponent,

    QuestionComponent,
    ShowQuestComponent,
    AddEditQuestComponent,

    QlookupComponent,
    ShowQlupComponent,
    AddEditQlupComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
