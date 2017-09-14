import {Component, EventEmitter, OnChanges, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit, OnChanges {
  //5.命名变量,接收stock.rating
  @Input()
  rating : number = 0;

  //41 . 增加属性, 控制星星只读
  @Input()
  readonly : boolean = true;

  @Output()
  ratingChange : EventEmitter<number> = new EventEmitter();

  constructor() { }
  //5.1命名星星数组
  stars: boolean[];
  ngOnInit() {

  }
  ngOnChanges (changes: SimpleChanges):void {

    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  // 40.星星点击的方法
  clickStar(index: number){
   if(!this.readonly) {
     this.rating = index + 1;
     this.ratingChange.emit(this.rating);
   }
  }
}
