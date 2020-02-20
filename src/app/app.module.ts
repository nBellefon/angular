import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test/test.component';
import { AuthService } from './@shared/auth.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from './@shared/connexion.service';

import { RouterModule, Routes} from'@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const allRoutes : Routes = [
  {path : 'auth', component : ConnexionComponent },
  {path : 'film', component : TestComponent},
  {path : '', component : ConnexionComponent}
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(allRoutes) ],
  declarations: [ AppComponent, HelloComponent, TestComponent, ConnexionComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, ConnexionService]
})
export class AppModule { }
