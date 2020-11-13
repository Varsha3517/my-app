import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DetailsComponent } from './components/details/details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MovielistingComponent } from './components/movielisting/movielisting.component';

const routes: Routes = [
  {path:'movies', component: MovielistComponent},
  {path: 'movies/:movieid', component: MoviedetailsComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'list', component: MovielistingComponent},
  {path: 'list/:imdbID', component: DetailsComponent},
  {path: '', component: MainPageComponent}
   // {path: 'movie/:moviename', component: MoviedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }