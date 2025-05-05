import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {
  MatSidenavModule
} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatTabsModule, MatButtonModule, MatNavList, MatListItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
