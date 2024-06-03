import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component: HomePageComponent
  },
  // {
  //   path:'trending',
  //   component: TrendingPageComponent
  // },
  {
    path:'movies/:id',
    component: MoviePageComponent
  },
  // {
  //   // path:'**',
    // todo: crear componente de not found
  // }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
