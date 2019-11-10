import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'handson-angular-css';

  @HostBinding('class') get themeClass() {
    return 'theme-funky';
  }
}
