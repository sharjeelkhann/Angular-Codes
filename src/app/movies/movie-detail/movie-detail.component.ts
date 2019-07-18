import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any[];
  errorMessage: any;
  pageTitle = "Welcome to Movie Home ";
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.movie = data.movie;

    })
    //let id = this.route.snapshot.paramMap.get('id');
    //  console.log("ID", id);
    // this.movieService.getMoviesById(id).subscribe(
    //   movie => {
    //     this.movie = movie;
    //     console.log(this.movie);
    //   },
    //   error => this.errorMessage = <any>error
    // );
  }
  onBack(): void {
    this.router.navigate(['/home']);
  }
}
