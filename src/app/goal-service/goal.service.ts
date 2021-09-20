import { Injectable } from '@angular/core';
import { goals } from '../goals-list';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
   getGoals(){
     return goals;
   }

  constructor() { }
}
