import { Record } from '../types/record'

export function getRecords() {
  const records = localStorage.getItem('records')
  return records ? JSON.parse(records) : []
}

export function setRecords(records: Record[]) {
  localStorage.setItem('records', JSON.stringify(records))
}

export function removeRecords() {
  localStorage.removeItem('records')
}
