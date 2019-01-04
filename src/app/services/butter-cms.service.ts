import { Injectable } from "@angular/core";
import * as Butter from "buttercms";

@Injectable({
  providedIn: "root"
})
export class ButterCMSService {
  butterService = Butter("2f59c1ea2f1e098c4d9f17556cb446dd51c43d4d");
  constructor() {}
}
