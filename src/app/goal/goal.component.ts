import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
  {id:1, name:"This is the first thing", details:'Harvard business Review' },
  {id:2, name:"This is the second thing", details:'Money is not a thing' },
  {id:3, name:"This is the third thing", details:'Bless me father'},
  {id:4, name:"That came to mind", details:'Great is thy will' },
  {id:5, name:"This is the last thing to fill the list", details:'Defeat, Khalil Ghibran' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
