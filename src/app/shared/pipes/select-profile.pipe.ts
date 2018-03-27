import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { find, mergeMap } from 'rxjs/operators';
import { Profile } from './../../models/profile';

@Pipe({
  name: 'selectProfile'
})
export class SelectProfilePipe implements PipeTransform {
  transform(profiles$: Observable<Profile[]>, uid: string): any {
    return profiles$.pipe(
      mergeMap( profiles => profiles),
      find( profile => profile.uid === uid)
    )   
  }
}
