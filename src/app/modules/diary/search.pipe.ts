import {Pipe, PipeTransform} from "@angular/core";
import {Note} from "./interfaces";

@Pipe({
  name: 'searchNotes'
})

export class SearchPipe implements PipeTransform {
  transform(notes: Note[], search=''): Note[] {
    if(!search.trim()) {
      return notes
    }

    return notes.filter(note => {
      return note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}
