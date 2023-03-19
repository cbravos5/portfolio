import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Box, Stack } from "@mantine/core";



export default function Home() {

  return (
    <Box h="100%">
      <Hero />
      <About />
    </Box>
  )
}
