import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'side-bar';

  status: boolean = true;

  onClickSideBar() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

}
