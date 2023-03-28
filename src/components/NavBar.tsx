import {
  Box,
  Burger,
  createStyles,
  MediaQuery,
  Menu,
  Navbar,
  NavLink,
  Portal,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const useMantineStyles = createStyles((theme) => ({
  navbar: {
    top: 0,

    height: 'fit-content',
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,

    zIndex: 2,
    background: 'transparent',
    justifyContent: 'center',
    transition: '0.5s ease',
  },

  dropdown: {
    position: 'fixed',
    top: 0,
    right: -1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    overflow: 'hidden',

    height: 'calc(100vh - 40px)',
    width: '100vw',
    border: 'none',

    background: theme.colors.tertiary[0],

    borderRadius: '30px 30px 0 0',

    zIndex: 3,

    a: {
      width: 'fit-content',

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
      fontSize: '1.5rem',
      fontWeight: 600,

      whiteSpace: 'nowrap',

      textTransform: 'uppercase',
    },
  },
}));

const links = [
  { label: 'About me', ref: '#about' },
  { label: 'Experience', ref: '#experience' },
  { label: 'Contact', ref: '#contact' },
];

export function NavBar() {
  const { classes } = useMantineStyles();

  const [isOpen, { toggle, close }] = useDisclosure(false);

  const theme = useMantineTheme();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document && isOpen)
      document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  return (
    <Navbar fixed className={classes.navbar}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={isOpen}
          onClick={toggle}
          size="lg"
          ml="auto"
          color={theme.colors.secondary[0]}
          sx={{ zIndex: 4 }}
        />
      </MediaQuery>
      <AnimatePresence >
        {isOpen && (
          <motion.div
            initial={{ width: 0, height: 0, borderRadius: '0 0 0 100%' }}
            animate={{
              width: '100vw',
              height: '100vh',
              borderRadius: 0,
            }}
            exit={{ width: 0, height: 0, borderRadius: '0 0 0 100%' }}
            className={classes.dropdown}
            transition={{
              bounce: 0,
              ease: 'easeIn',
              duration: 0.5,
            }}
          >
              {links.map(({ label, ref }, i) => (
                <motion.div
                  key={ref + i}
                  initial={{ opacity: 0, x: '150vw' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '150vw' }}
                  transition={{ bounce: false, duration: 0.5, delay: 0.45 + 0.15 * i }}
                >
                  <NavLink
                    scroll={false}
                    component={Link}
                    href={ref}
                    onClick={close}
                    label={label}
                    rightSection={<></>}
                  />
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
