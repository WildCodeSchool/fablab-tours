import { Component, OnInit, Sanitizer } from '@angular/core';
import { SearchResultService } from '../common/search-result.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any;

  constructor(public service: SearchResultService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.results = this.service.result;  }

  sanitized(content) {
    const html = this.sanitizer.bypassSecurityTrustHtml(content);
    return html;
  }

}
