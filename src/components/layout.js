import React from "react"
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"

import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

import { Helmet } from "react-helmet"
import BackgroundVideo from "./../images/background-video.mp4"

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        boxShadow: "none",
        padding: "1rem 3rem",
      },

      sizeSmall: {
        fontSize: "1.125rem",
        padding: ".5rem 2.5rem",
      },
    },
  },
  palette: {
    common: {
      black: "#333",
      white: "#fff",
      gray: "#b1b1b1",
      darkGray: "#828282",
      lightGray: "#F9FBFD",
      blue: "#54A4D8",
      orange: "#FBA61B",
      red: "#EF264F",
      green: "#BAD861",
    },

    primary: {
      main: "#eb5757",
      contrastText: "#fff",
    },

    secondary: {
      main: "#fff",
      contrastText: "#eb5757",
    },

    text: {
      primary: "#2d3446",
      secondary: "#828282",
    },
  },
  typography: {
    fontFamily: "Rajdhani, sans-serif",
    button: {
      fontSize: "1.125rem",
      fontWeight: 600,
      textTransform: "none",
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
      "@media (min-width:960px)": {
        fontSize: "3.25rem",
        lineHeight: "71.24px",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
        lineHeight: "54.8px",
      },
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 700,
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: ".875rem",
      fontWeight: 500,
      lineHeight: "28px",
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.625rem",
      fontWeight: 300,
      "@media (min-width:600px)": {
        fontSize: ".875rem",
      },
    },
  },
})

const useStyles = makeStyles(theme => ({
  video: {
    position: "fixed",
    left: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -4,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SiteHeader />
      {children}
      <SiteFooter />
    </ThemeProvider>
  )
}

export default Layout
