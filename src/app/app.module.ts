import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { Left1Component } from './left1/left1.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FeathureComponent } from './feathure/feathure.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { YtvideoComponent } from './ytvideo/ytvideo.component';
import { MainheadingComponent } from './mainheading/mainheading.component';
import { Page4Component } from './page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    Left1Component,
    Page1Component,
    Page2Component,
    FeathureComponent,
    FaqComponent,
    FooterComponent,
    YtvideoComponent,
    MainheadingComponent,
    Page4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
