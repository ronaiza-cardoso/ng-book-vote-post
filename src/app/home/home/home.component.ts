import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}
