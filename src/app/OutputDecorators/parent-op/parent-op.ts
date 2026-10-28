import { Component } from '@angular/core';
import { ChildOp } from '../child-op/child-op';

@Component({
  imports: [ChildOp],
  selector: 'app-parent-op',
  styleUrl: './parent-op.scss',
  templateUrl: './parent-op.html',
})
export class ParentOp {
cData: any;
}
