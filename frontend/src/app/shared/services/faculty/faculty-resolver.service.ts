import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FacultyService } from './faculty.service';

@Injectable()
export class FacultyResolverService {

  constructor(
    private facultyServie: FacultyService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.facultyServie.getFaculties();
  }

}
