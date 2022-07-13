import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges,
 DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, OnDestroy 
 {

  @Input() number = 10 ;

  constructor() {
    console.log('chamou o construtor');
   }

  ngOnInit(): void {
    console.log('chamou o on Init');
  }
 
  ngAfterViewChecked(): void {
    console.log('chamou o ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('chamou o ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('chamou o ngAfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('chamou o ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('chamou o ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('chamou o ngOnDestroy');
  }
}
