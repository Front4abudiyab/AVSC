import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutContentComponent } from './component/about/about-content/about-content.component';
import { ToolServiceComponent } from './component/tool-service/tool-service.component';
import { ServeContentComponent } from './component/tool-service/serve-content/serve-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AboutContentComponent,
    ToolServiceComponent,
    ServeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
