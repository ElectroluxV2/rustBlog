import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";
import hljs from 'highlight.js';



@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public highlightAll(): void {
    if (isPlatformBrowser(this.platformId)) {
      hljs.highlightAll();
    }
  }
}
