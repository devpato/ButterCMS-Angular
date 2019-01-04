import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { BUTTER_SERVICE } from '../shared/butterCMS.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(protected route: ActivatedRoute) { }

  protected slug$: Observable<string>;
  public page: any;

  ngOnInit() {
    this.slug$ = this.route.paramMap
      .pipe(
        map(params => (params.get('slug')))
      );

    this.slug$.pipe(
      take(1))
      .subscribe(slug => {
        BUTTER_SERVICE.page.retrieve('case_of_study', slug)
          .then((res) => {
            this.page = res.data.data;
          }).catch((res) => {
            console.log(res);
          });
      });
  }

}
