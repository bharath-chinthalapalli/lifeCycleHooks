import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child-component/child-component';

@Component({
  imports: [FormsModule, ChildComponent],
  selector: 'app-parent-component',
  styleUrl: './parent-component.scss',
  templateUrl: './parent-component.html',
})
export class ParentComponent{
  users: string = '';

  userList: string[] = [
    'kunar',
    'ravi',
    'anil',
    'sunil'
  ];


  // addUser(){
  //   this.userList.push(this.users);
  //   this.users=""
  // }

  addUser(): void {
    if (this.users.trim()) {
      this.userList = [...this.userList, this.users.trim()];
      this.users = '';
    }
  }

  // ngDoCheck():void{
  //   console.log('ngDoCheck called in parent')
  // }
}
