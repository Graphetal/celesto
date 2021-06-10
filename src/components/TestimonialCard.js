import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Card, Divider, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.common.lightGray,
    maxWidth: "400px",
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.common.gray,
    height: "1px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

const TestimonialCard = () => {
  const classes = useStyles()

  return (
    <Card classes={{ root: classes.card }}>
      <Typography component="div">
        <Typography color="textPrimary" gutterBottom variant="h4">
          Charles Nguyen
        </Typography>
        <Box component="p" color="text.secondary" my={3}>
          “This is my third time using Loan Factory for refinance. The service
          and response form the team is exceptional and quick. They do
          understand the needs of customer and work hard to make things happen.
          Pleasure working with them, specially my loan agent Dang went above
          and beyond to meet my needs.”
        </Box>
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography color="textPrimary" variant="body2">
        Long Beach, CA
      </Typography>
    </Card>
  )
}

export default TestimonialCard
