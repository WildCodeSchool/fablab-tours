import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ContactService } from '../common/contact.service';



@Component({
  selector: 'app-comment-ca-marche',
  templateUrl: './comment-ca-marche.component.html',
  styleUrls: ['./comment-ca-marche.component.css']
})
export class CommentCaMarcheComponent implements OnInit, OnDestroy {
  closeResult: string;
  evenements: any;
  newsForm: FormGroup;
  interval: any;

  constructor(private service: HttpClient, private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {

    this.newsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });


    // Calls calendar API
    this.service.get<any>('http://localhost:3000/api/calendar/events')
      .pipe(
        map(res => {
          return res.map(event => {
            return {
              title: event.summary,
              date: event.start.date ? event.start.date : event.start.dateTime,
              start: event.start.date ? 'indéfini' : event.start.dateTime.slice(11, 16),
              end: event.end.date ? 'indéfini' : event.end.dateTime.slice(11, 16),
            };
          });
        })
      )
      .subscribe(res => {
        this.evenements = res;
      });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  // fonction envoi email newsletter
  contactForm(form) {
    // this.submitted = true;
    this.contactService.sendNewsletter(form).subscribe(() => {
      swal('Adhésion newsletter', 'Vous recevrez un mail de confirmation', 'success');
    });
  }
}
