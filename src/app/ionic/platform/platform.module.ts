import { PlatformConfigToken, providePlatformConfigs } from './platform-registry';
import { NgModule, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { DomController } from './dom-controller';
import { Keyboard } from './keyboard';
import { Platform, setupPlatform } from './platform';

@NgModule({
  imports: [

  ],
  exports: [

  ],
  providers: [
    {
      provide: PlatformConfigToken,
      useFactory: providePlatformConfigs,
    },
    {
      provide: Platform,
      useFactory: setupPlatform,
      deps: [
        DOCUMENT,
        PlatformConfigToken,
        NgZone,
      ],
    },
    Keyboard,
    DomController,
  ],
  declarations: [

  ],
})
export class PlatformModule { }
