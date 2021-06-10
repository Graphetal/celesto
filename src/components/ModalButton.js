import React, { useState } from "react"
import { Link } from "gatsby"

import {
  Backdrop,
  Box,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    backgroundColor: `${theme.palette.text.primary}F7`,
  },
  gridColors: {
    paddingTop: ".5rem",
    "& *": {
      height: 3,
    },
    "& div:nth-child(1)": {
      backgroundColor: theme.palette.common.blue,
    },
    "& div:nth-child(2)": {
      backgroundColor: theme.palette.common.orange,
    },
    "& div:nth-child(3)": {
      backgroundColor: theme.palette.common.red,
    },
    "& div:nth-child(4)": {
      backgroundColor: theme.palette.common.green,
    },
  },
  modalTitle: {
    display: "inline-block",
  },
  link: {
    color: "white",
    "&:visited": {
      color: "white",
    },
  },
}))

const ModalButton = () => {
  const [openModal, setOpenModal] = useState(false)

  const classes = useStyles()

  return (
    <>
      <IconButton
        onClick={e => setOpenModal(true)}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Modal
        className={classes.modal}
        open={openModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          classes: {
            root: classes.backdrop,
          },
          timeout: 500,
        }}
        onClose={e => setOpenModal(false)}
      >
        <Container maxWidth="sm">
          <Box color="common.white" textAlign="center">
            <Container maxWidth="xs">
              <Link className={classes.link} to="/about">
                <Typography
                  className={classes.modalTitle}
                  gutterBottom
                  variant="h1"
                >
                  About
                  <Grid container className={classes.gridColors}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                  </Grid>
                </Typography>
              </Link>
              <Box clone pt={2}>
                <Link className={classes.link} to="/contact">
                  <Typography variant="h1">
                    <Box component="span" fontWeight={300}>
                      Contact
                    </Box>
                  </Typography>
                </Link>
              </Box>
              <Box py={5}>
                <Typography>
                  Celesto Technologies, Inc.
                  <br />
                  5334 E. Chapman Ave
                  <br />
                  Orange CA 92869
                  <br />
                  (888) 377-1265
                </Typography>
              </Box>
            </Container>
          </Box>
        </Container>
      </Modal>
    </>
  )
}

export default ModalButton
