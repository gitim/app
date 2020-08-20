import { fetchData } from 'store'

import { NAME } from './constants'

export function fetchAllEmployees(query) {
  return fetchData({
    entity: NAME,
    query,
  })
}
