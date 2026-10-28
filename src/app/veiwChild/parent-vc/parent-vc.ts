import { AfterViewInit, Component, viewChild } from '@angular/core';
import { ChildVc } from '../child-vc/child-vc';

@Component({
  imports: [ChildVc],
  selector: 'app-parent-vc',
  styleUrl: './parent-vc.scss',
  templateUrl: './parent-vc.html',
})
export class ParentVc implements AfterViewInit {
  // @viewChild('childComponet')ChildVc: any

  childComponet = viewChild(ChildVc)

  test(){
    console.log(this.childComponet()?.passToParent())
  }

  ngAfterViewInit() {
    console.log(this.childComponet()?.passToParent());
  }
}
