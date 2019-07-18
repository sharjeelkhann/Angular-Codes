import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesResolverService, MoviesIDResolver } from './movie-resolver.service';
import { LoginAuthGuard } from '../login-auth.guard';

const routes: Routes =
  [{
    path: 'home', component: MovieHomeComponent,
    resolve: {
      movies: MoviesResolverService
    },
    canActivate: [LoginAuthGuard]

  },
  {
    path: 'detail/:id', component: MovieDetailComponent,
    resolve: {
      movie: MoviesIDResolver
    },
    canActivate: [LoginAuthGuard]

  }];
@NgModule({
  declarations: [MovieHomeComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesResolverService,
    MoviesIDResolver
  ]
})

export class MoviesModule { }
