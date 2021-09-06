import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { FocusDirective } from './directives/focus.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { JumboComponent } from './components/jumbo/jumbo.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ResultComponent,
    FocusDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    JumboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
