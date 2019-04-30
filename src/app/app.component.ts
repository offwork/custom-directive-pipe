import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myCollection: any[] = [
    { birthDay: 'April 15, 1968', firstName: 'Haluk', lastName: 'Levent' },
    { birthDay: 'May 20, 1946', firstName: 'Müslüm', lastName: 'Gürses' },
    { birthDay: 'July 12, 1942', firstName: 'Kemal', lastName: 'Sunal' },
    { birthDay: 'Junuary 30, 1944', firstName: 'Hasan', lastName: 'Cemal' },
    { birthDay: 'March 31, 1453', firstName: 'Ajda', lastName: 'Pekkan' },
    { birthDay: 'September 10, 1990', firstName: 'Selma', lastName: 'Elma' }
  ];
  maxElements = 4;
  movieQuote = `
      The first rule of Fight Club is: You do not talk about Fight Club.
      The second rule of Fight Club is: You do not talk about Fight Club.
      Third rule of Fight Club: someone yells stop, goes limp, taps out, the fight is over.
      Fourth rule: only two guys to a fight. Fifth rule: one fight at a time, fellas.
      Sixth rule: no shirts, no shoes.
      Seventh rule: fights will go on as long as they have to.
      And the eighth and final rule: if this is your first night at Fight Club,
      you have to fight.
  `;
}
