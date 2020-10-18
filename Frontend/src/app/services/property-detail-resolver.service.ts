import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from '../model/iproperty';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})

export class PropertyDetailResolverService implements Resolve<Property> {

constructor(  private router: Router,
              private housingService: HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  // Property | Observable<Property> | Promise<Property> {
  //   throw new Error('Method not implemented.');
  // }

// resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    Observable<Property> | Property {

      const propId = route.params['id']
      return this.housingService.getProperty(+propId).pipe(
        catchError(error => {
          this.router.navigate(['/']);

          return of(null);
        })
      );
    }

}
