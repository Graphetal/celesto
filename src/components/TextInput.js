import React from "react"

import { Box, InputBase } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "3px",
    padding: ".75rem 1.25rem",
  },
}))

const TextInput = () => {
  const classes = useStyles()

  return (
    <InputBase
      classes={{ root: classes.root }}
      fullWidth
      placeholder="Loan amount"
    />
  )
}

export default TextInput
