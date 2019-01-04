import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlogPostDetailsComponent } from "./blog-post-details/blog-post-details.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerListingComponent } from "./customer-listing/customer-listing.component";
import { FaqComponent } from "./faq/faq.component";
import { FeedComponent } from "./feed/feed.component";
import { HomeComponent } from "./home/home.component";
import { TopavComponent } from "./topav/topav.component";
import { HelloYouComponent } from "./hello-you/hello-you.component";
import { BlogPostListingComponent } from "./blog-post-listing/blog-post-listing.component";

/*
ANGULAR MATERIAL MODULES
*/
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BlogPostDetailsComponent,
    CustomerDetailsComponent,
    CustomerListingComponent,
    FaqComponent,
    FeedComponent,
    HomeComponent,
    TopavComponent,
    HelloYouComponent,
    BlogPostListingComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
