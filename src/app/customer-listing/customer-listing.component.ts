import { Component, OnInit } from "@angular/core";
import { BUTTER_SERVICE } from "../shared/butterCMS.service";
import { RouterModule, Routes } from "@angular/router";
@Component({
  selector: "app-customer-listing",
  templateUrl: "./customer-listing.component.html",
  styleUrls: ["./customer-listing.component.css"]
})
export class CustomerListingComponent implements OnInit {
  pages: any[];
  constructor() {}

  ngOnInit() {
    this.fetchPages();
  }

  fetchPages(): void {
    BUTTER_SERVICE.page.list("case_of_study").then(res => {
      this.pages = res.data.data;
      console.log("pages");
      console.log(this.pages);
    });
  }
}
