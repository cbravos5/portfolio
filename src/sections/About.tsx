import { Spot } from "@/components/Spot";
import {
  Box,
  createStyles,
  Flex,
  Image,
  Mark,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  titleContainer: {
    color: theme.colors.secondary[0],

    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      flexDirection: 'row',
      width: '100%',
    },
  },

  textContainer: {
    padding: 15,

    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,

    '.pic': {
      width: 'fit-content',
      padding: '0 8px 8px 0',
      borderWidth: "0 8px 8px 0",
      borderStyle: "solid",
      borderColor: theme.colors.secondary[0],
    },

    img: {
      maxWidth: 180 
    },

    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      alignItems: 'flex-start',

      '.mantine-Text-root': {
        flex: 3
      },

      '.pic': {
        flex: 1
      },

      img: {
        maxWidth: '100%' 
      },

      flexDirection: 'row',
    },
  },
}));

export function About() {
  const { classes, theme } = useStyles();

  return (
    <Stack h="fit-content" mih="100%" justify="center" align="center">
      <Flex className={classes.titleContainer}>
        <Title order={2} fw={400} size="clamp(22px, 3.5vw, 60px)">
          Who am I?
        </Title>
      </Flex>
      <Flex
        justify="center"
        className={classes.textContainer}
      >
        <Text lts="-0.05em" align="justify" size="clamp(12px, 1vw, 26px)" color={theme.colors.tertiary[0]}>
          I am a computer science graduated who works full time as a developer.
          My insterest in web development started in college, playing around
          with basic <Spot>HTML</Spot>, <Spot>CSS</Spot> and some{" "}
          <Spot>Javascript</Spot>. Later, I got my first job as an intern, where
          I got in touch with the first trending libraries and frameworks and
          also the full stack environment.
          <br />
          <br />
          I'm proud to say that I worked in both public and private areas, and
          am continuously developing my skills and keeping up with the market.
        </Text>
        <Box className="pic">
          <Image src="profile.png" alt="Chrystopher Bravos" />
        </Box>
      </Flex>
    </Stack>
  );
}
