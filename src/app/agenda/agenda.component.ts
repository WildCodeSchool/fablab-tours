import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  evenements: any;
  showModal: boolean;
  name: string;
  dateStart: string;
  heureDepart: string;
  heureFin: string;
  lieu: string;
  description: string;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private service: HttpClient) { }

  ngOnInit() {
    this.service.get<any>('http://localhost:3000/api/calendar/events')
    .pipe(
      map(res => {
        return res.map(event => {
          return {
            jour: event.start.date ? event.start.date : event.start.dateTime,
            mois: event.start.date ? event.start.date : event.start.dateTime,
            hDepart: event.start.date ? 'indéfini' : event.start.dateTime.slice(11, 16),
            hFin: event.end.date ? 'indéfini' : event.end.dateTime.slice(11, 16),
            title: event.summary,
            start: event.start.date ? event.start.date : event.start.dateTime,
            end: event.end.date ? event.end.date : event.end.dateTime,
            location: event.location ? event.location : 'indéfini',
            description: event.description ? event.description : 'indéfini'
          };
        });
      })
    )
    .subscribe(res => {
      this.evenements = res;
    });

    this.calendarOptions = {
      eventLimit: false,
      locale: 'fr',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: [
        {
          color: 'red'
        },
      ],
      allDayText: 'Toute la journée',
      timeFormat: 'H:mm',
      buttonText: {
        today: 'Aujourd’hui', month: 'Mois', week: 'Semaine', day: 'Jour', list: 'Mon planning'
      },
    };
  }
  eventClick(model: any) {
    this.name = model.event.title;
    this.dateStart = model.event.start;
    this.heureDepart = model.event.hDepart;
    this.heureFin = model.event.hFin;
    this.lieu = model.event.location;
    this.description = model.event.description;
    this.showModal = true;
  }
  hide() {
  this.showModal = false;
  }
}
