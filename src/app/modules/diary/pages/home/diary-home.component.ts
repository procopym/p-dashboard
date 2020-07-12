import {Component} from "@angular/core";
import {Note} from "../../interfaces";

@Component({
  selector: 'app-home',
  templateUrl:'diary-home.component.html',
  styleUrls: ['diary-home.component.scss']
})

export class DiaryHomeComponent {
  searchNote = ''
  notes: Note[] = [
    {date: new Date(), text: 'lorem10dfdsgfgfdgfdg', title: 'first note', id: '1'},
    {date: new Date(), text: 'lorem10dfdsgfgfdgfdg', title: 'first note', id: '2'},
    {date: new Date(), text: 'lorem10dfdsgfgfdgfdg', title: 'first note', id: '3'},
    {date: new Date(), text: 'lorem10dfdsgfgfdgfdg', title: 'second note', id: '4'}
  ]

  onEscape() {
    this.searchNote = ''
  }
}
