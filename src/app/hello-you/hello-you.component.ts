import { Component, OnInit } from "@angular/core";
import { BUTTER_SERVICE } from "../shared/butterCMS.service";

@Component({
  selector: "app-hello-you",
  template: `
    <h1>Hello-You</h1>
    <p>Headline: {{ headline?.headline }}</p>
    <p>Sample Post: {{ posts ? posts.data[0]?.url : "no posts" }}</p>
  `,
  styles: []
})
export class HelloYouComponent implements OnInit {
  posts: any;
  headline: any;
  page: any;

  constructor() {}

  ngOnInit() {
    this.fetchPosts();
    this.fetchHeadline();
  }

  private fetchPosts() {
    BUTTER_SERVICE.post
      .list({
        page: 1,
        page_size: 10
      })
      .then(res => {
        console.log("Content from ButterCMS");
        console.log(res);
        this.posts = res.data;
      });
  }

  private fetchHeadline() {
    BUTTER_SERVICE.page
      .retrieve("*", "homepage")
      .then(res => {
        this.headline = res.data.data.fields;
        console.log(this.headline.headline);
      })
      .catch(res => {
        console.log(res);
      });
  }

  //contentype retrival
  // butterService.content.retrieve(['homepage_headline'])
  // .then((res) => {
  //     console.log('Headline from ButterCMS');
  //     console.log(res);
  //     this.headlines = res.data;
  // });
}
