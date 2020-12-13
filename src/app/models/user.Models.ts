export interface loginUser{
  email:string
  password:string,
}

export interface user extends loginUser{
  name:string
  phone:string
  address:string
  role:string[]
}
