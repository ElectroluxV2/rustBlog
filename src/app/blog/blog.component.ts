import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from "../highlight.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements AfterViewChecked {
  constructor(private highlightService: HighlightService) { }

  public ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
