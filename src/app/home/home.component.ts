import { Component, OnInit } from "@angular/core";
import { BUTTER_SERVICE } from "../shared/butterCMS.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  page: any;
  constructor() {}

  ngOnInit() {
    this.fetchPage();
  }

  fetchPage() {
    BUTTER_SERVICE.page
      .retrieve("*", "homepage")
      .then(res => {
        this.page = res.data.data;
        console.log(this.page);
      })
      .catch(res => {
        console.log(res);
      });
  }
}
