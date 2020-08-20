import {
  createEntityAllSelector,
  createEntityLoadingSelector,
} from 'store'

import { NAME } from './constants'

export const selectAllEmployees = createEntityAllSelector(NAME)

export const seletIsEmployeesLoading = createEntityLoadingSelector(NAME)
