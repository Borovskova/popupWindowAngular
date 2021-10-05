import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  title = 'popup-window-angular';
  broadcastChannel = new BroadcastChannel('broadcast-channel');
  windowRef:any = null;
  public players = [
    {name: 'Anna', age: 21, work: 'actor'},
    {name: 'Andrey', age: 22, work: 'sportsmen'},
    {name: 'Victor', age: 29, work: 'actor'},
    {name: 'Tom', age: 31, work: 'actor'},
    {name: 'Anton', age: 26, work: 'actor'},
    {name: 'Alex', age: 29, work: 'actor'},
]

  openPopup() {
    let params = `width=700,height=500, textContent=''`;
    this.windowRef = window.open('/popup-window', 'popup', params);
    this.broadcastChannel.onmessage = (message) => {
      console.log(message.data.message);
    }
   
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
