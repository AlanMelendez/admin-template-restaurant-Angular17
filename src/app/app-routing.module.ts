import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [

 {path:'', redirectTo:'/login', pathMatch:'full' },
 {
    path:'dashboard',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)

 },
 {
  path:'pruebas',
  component:DashboardComponent
 },
 {path:'**', component:NopageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
