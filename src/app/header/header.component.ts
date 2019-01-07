
import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../common/search-result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarDisplayed: boolean;
  rechercheForm: FormGroup;
  constructor(private service: SearchResultService, private fb: FormBuilder) { }

  ngOnInit() {
    this.sidebarDisplayed = false;
    this.rechercheForm = this.fb.group({
      input: ['', Validators.required],
    });
  }

  showSidebar(isShow: boolean) {
    this.sidebarDisplayed = isShow;
  }

  // searchForm(form) {
  //   this.service.sendSearch(form);
  // }

  onSubmit() {
    this.service.getSearch(this.rechercheForm.value.input);
  }
}
