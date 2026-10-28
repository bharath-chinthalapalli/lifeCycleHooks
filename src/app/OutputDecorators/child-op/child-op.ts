import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-child-op',
  styleUrl: './child-op.scss',
  templateUrl: './child-op.html',
})
export class ChildOp {
  // @output() customEve = new EventEmitter();
  customEve = output<void>();
  message:any="Hai Iam Child Component in Parent component"

  passDataToParent(){
    this.customEve.emit(this.message)
  }
}
