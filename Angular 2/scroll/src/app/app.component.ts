import { Component } from '@angular/core';
import { WindowScrollService } from './window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public scroll = 0;

  constructor(private windowScrollService: WindowScrollService) {
    this.windowScrollService.scroll$.subscribe(pos => {
      this.scroll = pos;
    })
  }

}
