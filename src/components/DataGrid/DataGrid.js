import React, { useState, useCallback } from 'react'
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

import styles from './styles.module.css'

function EmployeesTable(props) {
  const {
    columns,
    rows,
    isLoading,
    onSelectRows,
  } = props

  const [selection, setSelection] = useState([])
  const handleSelectRow = useCallback((event, row) => {
    let newSelection

    if (event.target.checked) {
      newSelection = [...selection, row]
    } else {
      const index = selection.indexOf(row)
      newSelection = [
        ...selection.slice(0, index),
        ...selection.slice(index + 1, selection.length + 1),
      ]
    }

    setSelection(newSelection)

    if (typeof onSelectRows === 'function') {
      onSelectRows(newSelection)
    }
  }, [selection, onSelectRows])

  const handleSelectAllRows = useCallback((event) => {
    const newSelection = event.target.checked ? rows : []

    setSelection(newSelection)

    if (typeof onSelectRows === 'function') {
      onSelectRows(newSelection)
    }
  }, [rows, onSelectRows])

  return (
    <TableContainer className={styles.tableContainer}>
      {isLoading && <CircularProgress className={styles.progress} />}
      <Table className={styles.table} stickyHeader>
        <TableHead>
          <TableRow>
          <TableCell padding="checkbox" style={{ minWidth: 180, maxWidth: 180 }}>
            <FormControlLabel
              className={styles.checkboxAll}
              control={<Checkbox
                checked={rows.length > 0 && selection.length === rows.length}
                indeterminate={selection.length > 0 && selection.length < rows.length}
                onChange={handleSelectAllRows}
              />}
              label="Выделить всё"
            />
          </TableCell>
          {columns.map(({ label, width }, index) => (
            <TableCell
              align="left"
              key={index}
              width={width}
            >
              {label}
            </TableCell>
          ))}
          </TableRow>
        </TableHead>
          <TableBody>
            {!isLoading && rows.map((row) => {
              const isSelected = selection.includes(row)

              return (
                <TableRow
                  key={row.id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox" style={{ minWidth: 180, maxWidth: 180 }}>
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => handleSelectRow(event, row)}
                    />
                  </TableCell>
                  {columns.map(({ accessor, width }) => (
                    <TableCell
                      align="left"
                      key={accessor}
                      width={width}
                    >
                      {row[accessor]}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable
