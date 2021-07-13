import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	
	 private auth = false;
	 private userData = null;

  constructor(
      private http: HttpClient
  ) { }
  
    isAuthenticated(): Observable<boolean> {
    return of(this.auth);
  } 
  getUserData() {
    return this.userData;
  } 
  authenticate(
    authData: any
  ): Observable<any> {
    return this.http.post<any>(environment.endpoints.auth, authData)
      .pipe(
        tap(userData => {
          this.auth = true;
          this.userData = userData;
        }),
        catchError(err => {
          this.auth = false;
          this.userData = null;
          return throwError(err);
        })
      );
  }
  
}
