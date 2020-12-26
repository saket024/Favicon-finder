import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2-favicon';
  searchUrl: any;
  // url = 'https://api.statvoo.com/favicon/?url=d2itechnology.com'
  extractUrl = '';
  displayUrl: any;
  finalUrl = '';
  // displayUrl2: any;
  constructor() {

  }

  search(item) {
    this.searchUrl = item;
    console.log(this.searchUrl);
    this.extractUrl = this.searchUrl.match(/www.(.*)/);
    console.log(this.extractUrl[1]);
    this.finalUrl = this.extractUrl[1];
    this.displayUrl = `https://api.statvoo.com/favicon/?url=${this.extractUrl[1]}`
    console.log(this.displayUrl)
    // this.displayUrl2 = `http://f1.allesedv.com/16/${this.extractUrl[1]}`
    // console.log(this.displayUrl2)
    // this.finalUrl = this.displayUrl.match(/(.*),/)
    // console.log(this.finalUrl[1])
  }
}
