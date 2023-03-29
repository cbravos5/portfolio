import {
  BoxProps,
  Burger,
  createPolymorphicComponent,
  createStyles,
  MediaQuery,
  Navbar,
  NavLink,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { mediaQuery } from '@/helpers/mediaQuery';
import styled from '@emotion/styled';

const useMantineStyles = createStyles((theme) => ({
  navbar: {
    top: 0,

    height: 'fit-content',
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,

    zIndex: 2,

    justifyContent: 'center',
    transition: '0.5s ease',

    flexDirection: 'row',

    background: 'transparent',

    [mediaQuery(theme.breakpoints.sm)]: {
      width: 'fit-content',
      borderRadius: '0 0 10px 10px',
      left: '50%',
      transform: 'translate(-50%)',

      background: theme.colors.tertiary[0],

      top: -60,

      '&:hover': {
        top: 0,
      },
    },
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

      '&:hover': { background: 'none', transform: 'scale(1.1)' },

      '&:active': {
        background: 'none',
        transform: 'scale(0.9)',
      },
    },

    span: {
      color: theme.colors.primary[0],
      background: 'none',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 600,

      whiteSpace: 'nowrap',

      textTransform: 'uppercase',
    },
  },
}));

const _Navs = styled.div(({ theme }) => ({
  display: 'none',

  gap: '2rem',

  a: {
    position: 'relative',
    width: 'fit-content',
    transition: 'all 0.25s ease',

    '&:active': {
      background: 'none',
      transform: 'scale(0.9)',
    },

    '&:after': {
      transition: 'all 0.5s ease',
      content: "''",
      position: 'absolute',
      bottom: 5,
      left: 12,
      width: 0,
      height: 5,
      background: theme.colors.secondary[0],
    },

    '&:hover': {
      background: 'none',
      '&::after': { width: '100%' },
    },
  },

  span: {
    color: theme.colors.secondary[0],
    background: 'none',
    fontSize: '1.5rem',
    fontWeight: 400,

    whiteSpace: 'nowrap',

    textTransform: 'uppercase',
  },

  [mediaQuery(theme.breakpoints.sm)]: {
    display: 'flex',

    color: theme.colors.secondary[0],
    fontSize: '1.375rem',
    fontWeight: 400,
  },
}));

const Navs = createPolymorphicComponent<'div', BoxProps>(_Navs);

const links = [
  { label: 'About me', ref: '#about' },
  { label: 'Experience', ref: '#experience' },
  { label: 'Contact', ref: '#contact' },
];

export function NavBar() {
  const { classes, theme } = useMantineStyles();
  const [isOpen, { toggle, close }] = useDisclosure(false);

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

      <Navs>
        {links.map(({ label, ref }, i) => (
          <NavLink
            key={ref + i}
            scroll={false}
            component={Link}
            href={ref}
            onClick={close}
            label={label}
            rightSection={<></>}
          />
        ))}
      </Navs>

      <AnimatePresence>
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  bounce: false,
                  duration: 0.5,
                  delay: 0.45 + 0.15 * i,
                  y: { velocity: -100, stiffness: 1000 }
                }}
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
