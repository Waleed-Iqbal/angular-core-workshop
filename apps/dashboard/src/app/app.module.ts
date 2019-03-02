import { MaterialModule } from '@workshop/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@workshop/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProjectsModule,
    CustomersModule,
    UiLoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
