import React, { useEffect, Fragment, useState } from 'react'
import { Chip, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchAllEmployees,
  selectAllEmployees,
  seletIsEmployeesLoading,
} from 'entities/employees'
import DataGrid from 'components/DataGrid'

import styles from './styles.module.css'

function EmployeesTable() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllEmployees())
  }, [])

  const employees = useSelector(selectAllEmployees) || []
  const isLoading = useSelector(seletIsEmployeesLoading)

  const [selectedEmployees, handleSelectRows] =  useState([])

  return (
    <div className={styles.container}>
      <DataGrid
        columns={[
          {
            accessor: 'firstName',
          },
          {
            accessor: 'lastName',
          },
          {
            accessor: 'age',
            width: 80,
          },
        ]}
        rows={employees}
        isLoading={isLoading}
        onSelectRows={handleSelectRows}
      />
      <Paper elevation={5} square>
        <div className={styles.footer}>
          {'Пользователи:\u00A0\u00A0'}
          {selectedEmployees.map((employee, index) => (
            <Fragment key={employee.id}>
              {index > 0 && ',\u00A0'}
              <Chip label={employee.firstName} size="small" />
            </Fragment>
          ))}
        </div>
      </Paper>
    </div>
  )
}

export default EmployeesTable
