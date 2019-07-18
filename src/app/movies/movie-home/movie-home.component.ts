import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {
  movies: any[];
  errorMessage: any;
  pageTitle = "Welcome to Movie Home ";
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.movies = data.movies.Search;
    })
  }

}
