import { Box, Flex, Image, Mark, Stack, Text, Title } from "@mantine/core";

export function About() {
  return (
    <Stack h="100%" mih="100%" justify="center" align="center">
      <Flex w="60%">
        <Title order={2} fw={400} size="clamp(20px, 3.5vw, 60px)">Who am I?</Title>
      </Flex>
      <Flex px="md" justify="center">
        <Text lts="-0.05em" w="35%" align="justify" mr={40} >
          I am a computer science graduated who works full time as a developer.
          My insterest in web development started in college, playing around
          with basic HTML, <Mark >CSS</Mark> and some Javascript. Later, I got my first job
          as an intern, where I got in touch with the first trending libraries
          and frameworks and also the full stack environment. <br/><br/> I'm proud to say
          that I worked in both public and private areas, and am continuously
          developing my skills and keeping up with the market.
        </Text>
        <Image src="profile.png" alt="Chrystopher Bravos" fit="contain" miw={200} maw="20%" pb="md" pr="md"
          sx={{ 
            boxShadow: '10px 10px 0px #0077C0'

           }}
        
        />
      </Flex>
    </Stack>
  )
}