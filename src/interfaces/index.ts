
export type Username = {
  first: string
  last: string
}

export type User = {
  _id: string
  picture: string
  name: Username
  phone: string 
}