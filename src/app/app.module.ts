import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { LoginComponent } from './pages/login/login.component';
//import { RegisterComponent } from './pages/register/register.component';
//import { JelentesComponent } from './pages/jelentes/jelentes.component';
//import { ValasztoeredmenyComponent } from './pages/jelentes/valasztoeredmeny/valasztoeredmeny.component';
//import { AramErtekPipe } from './shared/pipes/aram-ertek.pipe';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { environment } from '../enviroments/environment';


@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    MenuComponent,
    //LoginComponent,
    //RegisterComponent,
    //JelentesComponent,
    //ValasztoeredmenyComponent,
    //AramErtekPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [
    //provideClientHydration(),
    //provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
