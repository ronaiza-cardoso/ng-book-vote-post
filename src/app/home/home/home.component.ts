import { Component, OnInit } from '@angular/core';

import { Article } from '../article/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any = [];
  constructor() { }

  ngOnInit() {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    if (title.value !== '' && link.value !== '') {
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
    }
    else {
      console.log('Dont post empty link');
      return false;
    }
    
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
