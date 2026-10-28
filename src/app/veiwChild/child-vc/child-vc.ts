import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-vc',
  styleUrl: './child-vc.scss',
  templateUrl: './child-vc.html',
})
export class ChildVc {

  data="demo videchild";

  passToParent(){
    return this.data;
  }
}
