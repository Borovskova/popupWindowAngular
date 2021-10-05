import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})


export class PopupWindowComponent implements OnInit {
  public broadcastChannel = new BroadcastChannel('broadcast-channel');
  public players = [
    {name: 'Anna', age: 21, work: 'actor'},
    {name: 'Andrey', age: 22, work: 'sportsmen'},
    {name: 'Victor', age: 29, work: 'actor'},
    {name: 'Tom', age: 31, work: 'actor'},
    {name: 'Anton', age: 26, work: 'actor'},
    {name: 'Alex', age: 29, work: 'actor'},
]


  constructor() { }

  ngOnInit() {
  }
  onClose() {
    window.close()
    this.broadcastChannel.postMessage({ message: 'window closed' })
  }
}
