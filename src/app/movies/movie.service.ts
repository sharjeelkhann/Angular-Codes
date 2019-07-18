import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  productUrl = "http://www.omdbapi.com";
  UrlKey = "apikey=808b0c34";

  getMovies(): Observable<any> {
    return this.http.get<any>(this.productUrl + "/?s=love&" + this.UrlKey).pipe(
      tap(data => 'All: ' + JSON.stringify(data)),
      catchError(this.handleError)
    );
  }
  getMoviesById(id: string): Observable<any> {
    let url = `${this.productUrl}?i=${id}&${this.UrlKey}`
    console.log("ID URL: ", url);

    return this.http.get<any>(url).pipe(

      tap(data => console.log('All: ' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );

  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  };
}
