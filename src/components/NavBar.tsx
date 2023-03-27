import {
  Burger,
  createStyles,
  MediaQuery,
  Menu,
  Navbar,
  NavLink,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { motion } from 'framer-motion';

const useMantineStyles = createStyles((theme) => ({
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,

    paddingTop: '10%',

    height: 'calc(100vh - 40px)',
    width: '100vw',
    border: 'none',

    background: theme.colors.tertiary[0],

    borderRadius: '30px 30px 0 0',

    a: {
      transition: '0.25s ease',

      '&:active': {
        background: 'none',
        transform: 'scale(0.9)',
      },
    },

    span: {
      color: theme.colors.primary[0],
      background: 'none',
      textAlign: 'center',
      fontSize: '1.25rem',
      fontWeight: 600,

      textTransform: 'uppercase',
    },
  },
}));

export function NavBar() {
  const { classes } = useMantineStyles();

  const [scroll, scrollTo] = useWindowScroll();
  const [isOpen, { toggle, close }] = useDisclosure(false);

  const theme = useMantineTheme();

  const isScrolled = scroll.y > 60;

  return (
    <Navbar
      fixed
      top="0"
      h="fit-content"
      zIndex={2}
      bg={
        isScrolled
          ? theme.fn.rgba(theme.colors.secondary[0], 0.99)
          : 'transparent'
      }
      px="lg"
      py="sm"
      sx={{ justifyContent: 'center', transition: '0.5s ease' }}
    >
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger opened={isOpen} onClick={toggle} size="md" ml="auto" />
      </MediaQuery>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            className={classes.dropdown}
            transition={{ bounce: 0, ease: 'circIn' }}
          >
            <NavLink
              scroll={false}
              component={Link}
              href="#about"
              onClick={close}
              label="About me"
              rightSection={<></>}
            />
            <NavLink
              scroll={false}
              component={Link}
              href="#experience"
              onClick={close}
              label="Experience"
              rightSection={<></>}
            />
            <NavLink
              scroll={false}
              component={Link}
              href="#contact"
              onClick={close}
              label="Contact"
              rightSection={<></>}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
