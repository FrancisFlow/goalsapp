import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
  new Goal (1, 'This is the first thing', 'Harvard business Review', new Date(2021, 4, 5)),
  new Goal (2, 'This is the second thing','Money is not a thing', new Date(2021, 3, 5)),
  new Goal (3, 'This is the third thing', 'Bless me father', new Date(2022, 4, 1)),
  new Goal (4, "That came to mind",'Great is thy will', new Date() ),
  new Goal (5, 'This is the last thing to fill the list', 'Defeat, Khalil Ghibran', new Date(2021, 2, 4))
];

addNewGoal(goal:Goal) {
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completionDate =new Date(goal.completionDate);
  this.goals.push(goal); 
}

toggleDetails(index:any) {
  this.goals[index].showDescription = !this.goals[index].showDescription;
}

deleteGoal(isComplete:boolean, index:number) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
     if(toDelete) { 
       this.goals.splice(index, 1);
     }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
