import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../common/search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  resultOfSearch: any[];

  constructor(public service: SearchResultService ) { }

  ngOnInit() {
    this.service.getMachinesRechercher().subscribe(res => {
      this.resultOfSearch = res;
      console.log(this.resultOfSearch);
    });

  }

}
