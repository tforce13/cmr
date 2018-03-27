import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { find, mergeMap } from 'rxjs/operators';
import { User } from './../../models/user';

@Pipe({
  name: 'selectUser'
})
export class SelectUserPipe implements PipeTransform {
  transform(users$: Observable<User[]>, uid: string): any {
    return users$.pipe(
      mergeMap( users => users),
      find( user => user.uid === uid)
    )   
  }
}
