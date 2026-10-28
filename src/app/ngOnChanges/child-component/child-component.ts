import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-child-component',
  styleUrl: './child-component.scss',
  templateUrl: './child-component.html',
})
export class ChildComponent implements DoCheck, OnChanges {
  @Input() usersChildComp: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log('Previous:', changes['users']?.previousValue);
    console.log('Current:', changes['users']?.currentValue);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called in child');
  }
}
