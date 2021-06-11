import React, { useState, useEffect, useCallback, useRef } from "react"
import useScrollSnap from "react-use-scroll-snap"

import { throttle, debounce } from "lodash"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import styles from "./../styles.css"

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GridColorBar from "./../components/GridColorBar"
import Section from "./../components/Section"

import BackgroundVideo from "./../images/background-video.mp4"

const useStyles = makeStyles(theme => ({
  video: {
    position: "fixed",
    left: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -4,
  },
  iconButton: {
    backgroundColor: "#E0E2E7",
    color: "white",
    position: "absolute",
    bottom: -80,
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))

const IndexPage = () => {
  const scrollRef = useRef(null)
  useScrollSnap({ ref: scrollRef, duration: 5, delay: 0 })

  const classes = useStyles()

  return (
    <Layout>
      <video className={classes.video} autoplay="true" muted={true} loop={true}>
        <source type="video/mp4" src={BackgroundVideo} />
      </video>
      <Box ref={scrollRef}>
        <HeroSection />
        <Section id="lender-home-page">
          <Grid container alignItems="center" justify="center" spacing={5}>
            <Grid item sm={6}>
              <Box color="text.primary">
                <StaticImage src="./../images/LenderHomePage-Logo.png" />
                <Box width={150} my={5}>
                  <GridColorBar />
                </Box>
                <Typography gutterBottom variant="h2">
                  A Platform That Engages
                  <br />
                  <Box component="span" fontWeight={300}>
                    Borrowers Better
                  </Box>
                </Typography>

                <Typography>
                  Make your brand stand out. Celesto has everything you need to
                  create an immersive brand experiences. World class web
                  development combined with years of experience in SEO and PPC
                  marketing; we have the tools to help you build your brand.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box display="flex" justifyContent="flex-end">
                <StaticImage src="./../images/LenderHomePage-Image.png" />
              </Box>
            </Grid>
          </Grid>
        </Section>

        <Section id="lender-411">
          <Grid container alignItems="center" justify="center" spacing={5}>
            <Grid item sm={6}>
              <Box color="text.primary">
                <StaticImage src="./../images/Lender411-Logo.png" />
                <Box width={150} my={5}>
                  <GridColorBar />
                </Box>
                <Typography gutterBottom variant="h2">
                  Fast, Personalized
                  <br />
                  <Box component="span" fontWeight={300}>
                    Answers from Local Pros
                  </Box>
                </Typography>

                <Typography>
                  Make your brand stand out. Celesto has everything you need to
                  create an immersive brand experiences. World class web
                  development combined with years of experience in SEO and PPC
                  marketing; we have the tools to help you build your brand.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box display="flex" justifyContent="flex-end">
                <StaticImage src="./../images/Lender411-Image.png" />
              </Box>
            </Grid>
          </Grid>
        </Section>

        <Section id="loanzify" pb={0}>
          <Grid container alignItems="center" justify="center" spacing={5}>
            <Grid item sm={6}>
              <Box color="text.primary">
                <StaticImage src="./../images/Loanzify-Logo.png" />
                <Box width={150} my={5}>
                  <GridColorBar />
                </Box>
                <Typography gutterBottom variant="h2">
                  Intuitive and User-Friendly
                  <br />
                  <Box component="span" fontWeight={300}>
                    Mortgage Software
                  </Box>
                </Typography>

                <Typography>
                  Make your brand stand out. Celesto has everything you need to
                  create an immersive brand experiences. World class web
                  development combined with years of experience in SEO and PPC
                  marketing; we have the tools to help you build your brand.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box display="flex" justifyContent="flex-end" position="relative">
                <StaticImage src="./../images/Loanzify-Image.png" />
              </Box>
            </Grid>
          </Grid>
        </Section>
      </Box>
    </Layout>
  )
}

export default IndexPage
