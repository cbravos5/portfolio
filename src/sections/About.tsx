import { Spot } from '@/components/Spot';
import { mediaQuery } from '@/helpers/mediaQuery';
import { fonts } from '@/styles/fonts';
import {
  Box,
  createStyles,
  Flex,
  Image,
  List,
  Mark,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  titleContainer: {
    color: theme.colors.secondary[0],

    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      flexDirection: 'row',
      alignItems: 'flex-start',

      width: '100%',
    },
  },

  textContainer: {
    padding: 15,

    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,

    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      alignItems: 'flex-start',

      '.mantine-Text-root': { flex: 3 },

      flexDirection: 'row',
    },
  },

  picture: {
    width: 'fit-content',
    padding: '0 8px 8px 0',
    borderWidth: '0 8px 8px 0',
    borderStyle: 'solid',
    borderColor: theme.colors.secondary[0],

    img: { maxWidth: 180 },

    [mediaQuery(theme.breakpoints.sm)]: {
      flex: 1,

      img: { maxWidth: '100%' },
    },
  },

  skills: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: '0.5rem',
    columnGap: '2rem',

    fontFamily: fonts.nunito,
    fontSize: 'clamp(16px, 1.2vw, 26px)',

    li: { position: 'relative'},

    'li::before': {
      content: "''",

      position: 'absolute',
      verticalAlign: 'middle',

      top: '50%',
      left: -20,
      transform: 'translateY(-50%)',
      
      width: 10,
      height: 10,
      borderRadius: 10,

      background: theme.colors.secondary[0]
    },

    [mediaQuery(theme.breakpoints.xs)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    
    [mediaQuery(theme.breakpoints.sm)]: {
      columnGap: '3rem',
      rowGap: '1rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  }
}));

export function About() {
  const { classes, theme } = useStyles();

  return (
    <Stack h="fit-content" mih="100%" justify="center" align="center" spacing="lg">
      <Flex className={classes.titleContainer}>
        <Title order={2} fw={400} size="clamp(22px, 3.5vw, 60px)">
          Who am I?
        </Title>
      </Flex>
      <Flex justify="center" className={classes.textContainer}>
        <Text
          lts="-0.05em"
          align="justify"
          size="clamp(12px, 1.2vw, 26px)"
          color={theme.colors.tertiary[0]}
        >
          I am a computer science graduated who works full time as a developer.
          My insterest in web development started in college, playing around
          with basic <Spot>HTML</Spot>, <Spot>CSS</Spot> and some{' '}
          <Spot>Javascript</Spot>. Later, I got my first job as an intern, where
          I got in touch with the first trending libraries and frameworks and
          also the full stack environment.
          <br />
          <br />
          I'm proud to say that I worked in both public and private areas, and
          am continuously developing my skills and keeping up with the market.
        </Text>
        <Box className={classes.picture}>
          <Image src="profile.png" alt="Chrystopher Bravos" />
        </Box>
      </Flex>
      <Flex w="100%" justify="center" align="center" direction="column" gap="lg" >
        <Text lts="-0.05em"
          align="center"
          size="clamp(18px, 1.2vw, 26px)"
          >Some Technologies I'm currently working with:</Text>
        <List className={classes.skills} listStyleType="none">
          <List.Item>Typescript</List.Item>
          <List.Item>Nodejs</List.Item>
          <List.Item>Nextjs</List.Item>
          <List.Item>React</List.Item>
          <List.Item>.NET</List.Item>
          <List.Item>Neo4j</List.Item>
        </List>
      </Flex>

    </Stack>
  );
}
