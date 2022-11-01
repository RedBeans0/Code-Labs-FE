import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  // newServerName = '';
  //newServerContent = '';
 @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
  //  this.serverCreated.emit({
  //   serverName: nameInput:value,
  //    serverContent: this.newServerContent
  // });
  }

  onAddBlueprint() {
this.blueprintCreated.emit({
  serverName: nameInput:value,
serverContent: this.newServerContent
})
  }

}
