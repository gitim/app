import React from 'react'

import EmployeesTable from 'components/EmployeesTable'

import styles from './styles.module.css'

function Main() {
  return (
    <main className={styles.main}>
      <EmployeesTable />
    </main>
  )
}

export default Main
