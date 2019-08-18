import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { CursosComponent } from './cursos/cursos.component';
import { PlanoCarreiraComponent } from './plano-carreira/plano-carreira.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MentoresComponent } from './mentores/mentores.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'plano_carreira',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'plano_carreira',
    component: PlanoCarreiraComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'mentores',
    component: MentoresComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }