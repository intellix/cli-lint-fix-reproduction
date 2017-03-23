import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from './ionic/ionic.module';
import { HomeComponent } from './home/home.component';
import { MenuController } from './ionic/menu/menu-controller';
import { MenuPushRevealType } from './menu/menu-push-reveal-type';

MenuController.registerType('push-reveal', MenuPushRevealType);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgbModalModule.forRoot(),
    NgbDropdownModule.forRoot(),
    IonicModule.forRoot(AppComponent, {
      mode: 'ios',
      menuType: 'push-reveal',
    }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
