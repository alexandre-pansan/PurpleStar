import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { PlanoCarreiraComponent } from './plano-carreira/plano-carreira.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardsComponent } from './cursos/cards/cards.component';
import { MentoresComponent } from './mentores/mentores.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoadmapComponent,
    LoginComponent,
    CursosComponent,
    PlanoCarreiraComponent,
    FeedbackComponent,
    CardsComponent,
    MentoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
