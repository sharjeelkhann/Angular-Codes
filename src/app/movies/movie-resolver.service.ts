import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesResolverService implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.movieService.getMovies().pipe(
            map(res => {
                console.log("res", res);
                return res;
            }))
    }
    constructor(private movieService: MovieService) { }
}

@Injectable()
export class MoviesIDResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.params['id'];
        return this.movieService.getMoviesById(id).pipe(
            map(res => {
                console.log("res search by id ", res);
                return res;
            }))
    }
    constructor(private movieService: MovieService) {
        //  this.id = this.route.snapshot.paramMap.get('id');
        //  console.log("id:",this.id)
     }
}

