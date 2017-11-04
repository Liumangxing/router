import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock1',
  templateUrl: './stock1.component.html',
  styleUrls: ['./stock1.component.css']
})
export class Stock1Component implements OnInit {
  // private stockId1: number;
  private stock: Stock;
  private isPro: boolean;
  private focus: boolean = false;
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.routeInfo.params.subscribe((params: Params) => {
    //   this.stockId1 = params['id'];
    // });
    this.routeInfo.data.subscribe((data: { stock: Stock }) => {
      this.stock = data.stock;
    });
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];
  }
  isFocus() {
    return this.focus;
  }

}
export class Stock {
  constructor(
    public id: number,
    public name: string
  ) { }
}