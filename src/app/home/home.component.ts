import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<ScullyRoute[]> = this.scully.available$.pipe(map(routes => routes.filter(route => route.route.startsWith('/blog/') && route.sourceFile?.endsWith('.md'))));

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    // debug current pages
    this.posts.subscribe((posts) => {
      console.log(posts);
    });
  }
}
