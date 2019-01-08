
import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../common/search-result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarDisplayed: boolean;
  rechercheForm: FormGroup;
  constructor(private service: SearchResultService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.sidebarDisplayed = false;
    this.rechercheForm = this.fb.group({
      input: ['', Validators.required],
    });
  }

  showSidebar(isShow: boolean) {
    this.sidebarDisplayed = isShow;
  }

  onSubmit() {
    this.service.getSearch(this.rechercheForm.value.input);
    this.router.navigate(['/recherche']);

  }
}
