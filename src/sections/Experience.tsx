import { motion } from 'framer-motion';

import { SectionTitle } from '@/components/SectionTitle';
import { fonts } from '@/styles/fonts';
import {
  Anchor,
  Box,
  createStyles,
  Flex,
  List,
  Stack,
  Tabs,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';
import { Star } from 'tabler-icons-react';
import { mediaQuery } from '@/helpers/mediaQuery';
import { FadeIn } from '@/components/FadeIn';

const useStyles = createStyles((theme) => ({
  tabs: {
    height: 450,

    [mediaQuery(theme.breakpoints.sm)]: {
      height: 380,
    },

    '.mantine-Tabs-tabList': {
      width: '100%',
    },

    '.mantine-Tabs-tab': {
      transition: '0.5s ease',
    },

    '.mantine-Tabs-tabLabel': {
      fontSize: 'clamp(18px, 1.2vw, 26px)',
    },
  },

  description: {
    marginLeft: '1em',

    fontSize: 'clamp(14px, 1.1vw, 20px)',

    li: { textAlign: 'justify', color: theme.colors.tertiary[0] },

    'li::before': {
      content: "''",
      borderColor: `transparent ${theme.colors.secondary[0]}`,
      borderStyle: 'solid',
      borderWidth: '0.35em 0 0.35em 0.45em',
      display: 'block',
      height: 0,
      width: 0,
      left: '-1em',
      top: '1em',
      position: 'relative',
    },
  },
}));

export function Experience() {
  const { classes, theme } = useStyles();

  const isLg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  const starCount = isLg ? [0, 0, 0, 0] : [0, 0, 0];

  return (
    <Stack
      id="experience"
      h="fit-content"
      justify="center"
      align="center"
      spacing="lg"
    >
      <SectionTitle>My experience</SectionTitle>

      <FadeIn delay={0.5} style={{ width: '80%' }}>
        <Tabs
          defaultChecked
          defaultValue="cmc"
          className={classes.tabs}
        >
          <Tabs.List grow>
            <Tabs.Tab value="cmc">CMC</Tabs.Tab>
            <Tabs.Tab value="leadsoft">Leadsoft</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="cmc">
            <Box my="lg">
              <Title
                order={4}
                fw={400}
                ff={fonts.nunito}
                color={theme.colors.tertiary[0]}
                size="clamp(14px, 1.1vw, 24px)"
              >
                Full Stack React/Node Engineer -{' '}
                <Anchor
                  ff="inherit"
                  color={theme.colors.secondary[0]}
                  href="https://www.curitiba.pr.leg.br"
                  target="_blank"
                >
                  @CMC
                </Anchor>
              </Title>
              <Title
                color={theme.colors.support[0]}
                order={4}
                fw={400}
                ff={fonts.nunito}
                size="clamp(14px, 1vw, 20px)"
              >
                April 2021 - August 2022
              </Title>
            </Box>
            <List listStyleType="none" className={classes.description}>
              <List.Item>
                Developed internal systems using full stack Node + React +
                PostgreSQL + Express.
              </List.Item>
              <List.Item>
                Integrated applications with AWS S3, and applied data backup
                routines using Cron.
              </List.Item>
              <List.Item>
                Designed interfaces with Figma and applied style systems with
                Styled Components.
              </List.Item>
            </List>
          </Tabs.Panel>

          <Tabs.Panel value="leadsoft">
            <Box my="lg">
              <Title
                order={4}
                fw={400}
                ff={fonts.nunito}
                size="clamp(14px, 1.1vw, 24px)"
              >
                Full Stack React/Node/.NET Engineer -{' '}
                <Anchor
                  ff="inherit"
                  color={theme.colors.secondary[0]}
                  href="https://www.leadsoft.inf.br/"
                  target="_blank"
                >
                  @Leadsoft
                </Anchor>
              </Title>
              <Title
                color={theme.colors.support[0]}
                order={4}
                fw={400}
                ff={fonts.nunito}
                size="clamp(14px, 1vw, 20px)"
              >
                August 2022 - Now
              </Title>
            </Box>
            <List listStyleType="none" className={classes.description}>
              <List.Item>
                Developed high complex analitical dashboards using .NET and
                React.
              </List.Item>
              <List.Item>
                Implemented large forms validations with Zod adn React Hook
                Form.
              </List.Item>
              <List.Item>
                Created web applications with Nextjs and Vite.
              </List.Item>
              <List.Item>
                Created sofisticated state/store management systems with React
                and Zustand.
              </List.Item>
            </List>
          </Tabs.Panel>
        </Tabs>
      </FadeIn>

      <Flex gap="lg">
        {starCount.map((_, i) => (
          <motion.div
            key={'star' + i}
            transition={{ delay: 0.6 + 0.1 * i, duration: 1, stiffness: 1000, velocity: -100 }}
            initial={{ x: '-20vw', rotate: 0, opacity: 0 }}
            whileInView={{ x: 0, rotate: 360, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Star
              size={60}
              fill={theme.colors.support[0]}
              stroke={theme.colors.support[0]}
            />
          </motion.div>
        ))}
      </Flex>
    </Stack>
  );
}
