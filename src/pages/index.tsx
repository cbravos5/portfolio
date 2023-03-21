import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Box, createStyles, Stack } from "@mantine/core";

const useStyles = createStyles((theme => ({
  container: {
    '& > div': {
      padding: '15px 10px',

      [`@media (min-width: ${theme.breakpoints.xs})`]: {
        padding: '10%',
      },

      [`@media (min-width: ${theme.breakpoints.sm})`]: {
        padding: '10% 15%',
      },

      [`@media (min-width: ${theme.breakpoints.md})`]: {
        padding: '10% 20%',
      }
    },
  }
})))

export default function Home() {
  const { classes } = useStyles()

  return (
    <Box h="100%" className={classes.container}>
      <Hero />
      <About />
      <Experience />
    </Box>
  )
}
