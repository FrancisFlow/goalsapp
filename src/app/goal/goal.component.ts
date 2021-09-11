import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
  new Goal (1, 'This is the first thing', 'Harvard business Review'),
  new Goal (2, 'This is the second thing','Money is not a thing' ),
  new Goal (3, 'This is the third thing', 'Bless me father'),
  new Goal (4, "That came to mind",'Great is thy will' ),
  new Goal (5, 'This is the last thing to fill the list', 'Defeat, Khalil Ghibran')
];

toggleDetails(index:any) {
  this.goals[index].showDescription = !this.goals[index].showDescription;
}

completeGoal(isComplete:boolean, index:number) {
  if (isComplete) {
    this.goals.splice(index, 1)
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
