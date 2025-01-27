import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { ToolServiceComponent } from './component/tool-service/tool-service.component';
import { AboutContentComponent } from './component/about/about-content/about-content.component';
import { ServeContentComponent } from './component/tool-service/serve-content/serve-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ToolServiceComponent },
  { path: 'aboutContent', component: AboutContentComponent },
  { path: 'serveContent',component:ServeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
