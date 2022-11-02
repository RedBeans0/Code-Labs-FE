
import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  endcapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content:string};
@Input() name:string;
@ViewChild('heading') header: ElementRef;

  constructor() {

   }

   ngOnChanges(changes: SimpleChange) {

   }

  ngOnInit() {
  }

  ngDoCheck() {

}

ngAfterViewInit() {

}

ngAfterViewChecked() {

}

ngOnDestroy() {

}
}
