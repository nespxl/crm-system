export interface IValidateItem {
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  surname: string,
  lastName?: any,
  contacts?: [{type: string, value: string}] | any,
}

export interface ObjectItem {
  type: string,
  value: string,
}
