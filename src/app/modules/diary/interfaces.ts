export interface User {
  email: string,
  password: string
}

export interface Note {
  id?: string,
  title: string,
  date: Date,
  text: string
}
