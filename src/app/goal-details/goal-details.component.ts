import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  @Input () goal!: Goal;
  // event emitter communicating with parent component. Output () means take care of this mom
  @Output() isComplete = new EventEmitter<boolean>();

  deleteGoal(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
