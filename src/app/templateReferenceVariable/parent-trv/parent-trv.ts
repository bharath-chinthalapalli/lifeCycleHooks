import { Component } from '@angular/core';
import { ChildTrv } from '../child-trv/child-trv';

@Component({
  imports: [ChildTrv],
  selector: 'app-parent-trv',
  styleUrl: './parent-trv.scss',
  templateUrl: './parent-trv.html',
})
export class ParentTrv {}
