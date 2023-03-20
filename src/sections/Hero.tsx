import { fonts } from '@/styles/fonts';
import {
  Anchor,
  BackgroundImage,
  createStyles,
  Flex,
  Stack,
  Title,
} from '@mantine/core';
import { BrandGithub, BrandInstagram, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  socialLinks: {
    marginTop: '10%',

    svg: {
      width: 30,
      height: 30,

      stroke: theme.colors.secondary[0],
    },

    [`@media (min-width: ${theme.breakpoints.md})`]: {
      svg: {
        width: 40,
        height: 40,
      },
    },
  },
}));

export function Hero() {
  const { classes, theme } = useStyles();

  return (
    <BackgroundImage src="dev_pic.png" h="100%" mih="100%">
      <Stack h="100%" justify="center" align="center" spacing="xs">
        <Title
          ff={fonts.nunito}
          order={3}
          fw={400}
          color={theme.colors.tertiary[0]}
          size="clamp(18px, 3vw, 48px)"
          mb="lg"
        >
          Welcome, my name is
        </Title>
        <Title
          ff={fonts.nunito}
          fw={400}
          color={theme.colors.tertiary[0]}
          size="clamp(28px, 5vw, 96px)"
        >
          {'<>'}Chrystopher Bravos{'</>'}
        </Title>
        <Title
          ff={fonts.nunito}
          order={2}
          fw={400}
          color={theme.colors.tertiary[0]}
          size="clamp(20px, 3.5vw, 60px)"
        >
          I'm full stack software engineer
        </Title>
        <Flex justify="center" gap="md" className={classes.socialLinks}>
          <Anchor href="https://github.com/cbravos5" target="_blank">
            <BrandGithub />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/chrystopher-bravos-3252041bb"
            target="_blank"
          >
            <BrandLinkedin />
          </Anchor>
          <Anchor href="https://github.com/cbravos5" target="_blank">
            <BrandInstagram />
          </Anchor>
        </Flex>
      </Stack>
    </BackgroundImage>
  );
}
