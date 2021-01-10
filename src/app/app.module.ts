import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./pages/login/login.component"
import {RegisterComponent} from "./pages/register/register.component"
import {UserinfoComponent} from "./pages/userinfo/userinfo.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire"
import { AngularFirestoreModule} from "@angular/fire/firestore"
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { environment } from 'src/environments/environment';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
