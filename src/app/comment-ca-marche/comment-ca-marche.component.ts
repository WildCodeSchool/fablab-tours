import { Component, OnInit, OnDestroy } from '@angular/core';
import { elementClassProp } from '@angular/core/src/render3/instructions';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-comment-ca-marche',
  templateUrl: './comment-ca-marche.component.html',
  styleUrls: ['./comment-ca-marche.component.css']
})
export class CommentCaMarcheComponent implements OnInit, OnDestroy {
  closeResult: string;
  evenements: any;

  interval: any;



  constructor(private modalService: NgbModal, private service: HttpClient) { }

  ngOnInit() {

    // Calls calendar API

    this.service.get<any>('http://localhost:3000/api/calendar/events')
      .pipe(
        map(res => {
          return res.map(event => {
            return {
              title: event.summary,
              date: event.start.date ? event.start.date : event.start.dateTime.slice(0, 10),
              start: event.start.date ? 'indéfini' : event.start.dateTime.slice(11, 16),
              end: event.end.date ? 'indéfini' : event.end.dateTime.slice(11, 16),
            };
          });
        })
      )
      .subscribe(res => {
        this.evenements = res;
        console.log(this.evenements);
      });


    // To check opening Hours

    let now = new Date();
    let weekday = new Array(7);
    weekday[0] = "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";

    let checkTime = function () {
      let today: any = weekday[now.getDay()];
      let timeDiv: any = document.getElementById('timeDiv');
      let statusDiv: any = document.getElementById('statusDiv');
      let dayOfWeek: any = now.getDay();
      let hour: number = now.getHours();
      let minutes: any = now.getMinutes();

      if (minutes < 10) {
        minutes = "0" + minutes;
      };

      if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 5) && hour >= 14 && hour <= 18) {
        timeDiv.innerHTML = `Nous sommes ${today} il est ${hour}h${minutes},`;
        statusDiv.innerHTML = `est nous sommes ouvert!`;
        timeDiv.className = 'open';
        statusDiv.className = 'open';
      }

      else if ((dayOfWeek == 4) && hour >= 16 && hour <= 22) {
        timeDiv.innerHTML = `Nous sommes ${today} il est ${hour}h${minutes},`;
        statusDiv.innerHTML = `est nous sommes ouvert!`;
        timeDiv.className = 'open';
        statusDiv.className = 'open'
      }
      else {
        timeDiv.innerHTML = `Nous sommes ${today} il est ${hour}h${minutes},`;
        statusDiv.innerHTML = `Nous sommes fermé!`;;
        timeDiv.className = 'closed';
        statusDiv.className = 'closed'
      }

    };



    let currentDay = weekday[now.getDay()];
    let currentDayID = "#" + currentDay; //gets todays weekday and turns it into id


    // $(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup {to be added once JSQUERY installed}

    this.interval = setInterval(checkTime, 1000);
    checkTime();

  }

  // Open Modal //

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Close modal by pressing esc or clicking on backdrop //
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}


