import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.scss']
})
export class ArticleReadComponent implements OnInit {

  title = 'Lotem ipsum';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum et velit sit amet pharetra. Aenean consectetur quam nisl, sed.';

  constructor() { }

  ngOnInit() {
  }

  start() {
  }

  pause(indexWord: number) {
  }

  finish() {
  }
}
