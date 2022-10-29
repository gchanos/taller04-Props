import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { StickersComponent } from './components/stickers/stickers.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GifsComponent,
    StickersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path: "Home", component: HomeComponent},
      {path: "Gifs", component: GifsComponent},
      {path: "Stickers", component: StickersComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
