import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { FaqComponent } from './faq/faq.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { TopavComponent } from './topav/topav.component';
import { HelloYouComponent } from './hello-you/hello-you.component';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
