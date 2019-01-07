import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../common/search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any;

  constructor(public service: SearchResultService ) { }

  ngOnInit() {
    this.results = this.service.result;
  }

}
