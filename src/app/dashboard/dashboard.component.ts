import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['January : 1000$','February: 2000$','March: 3000$'];
  currentMonthIncome = '5000$';

  //Expense
  lastMonthsExpense = ['January : 1000$','February: 1800$','March: 3500$'];
  currentMonthExpense = '4300$';

  //Todo Trans
  todoTransactions = [
    { description: 'Pay electriciy bill '},
    { description: 'Submit monthly report '},
    { description: 'Buy groceries '},
    { description: 'Call insurance company '},
  ];

  totalCurrentMonthIncome = 5000;
  totalCurrentMonthExpense = 4300;
  constructor(public router:Router){}
  onIncome(){
    this.router.navigate(['/budget-planner/income'])
  }
  onExpense(){
    this.router.navigate(['/budget-planner/expense'])
  }
  onTodo(){
    this.router.navigate(['/budget-planner/todo'])
  }

  get totalCurrentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
  
}
