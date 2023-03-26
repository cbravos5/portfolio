import {
  Burger,
  MediaQuery,
  Navbar,
  NavLink,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";

export function NavBar() {
  const [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();
  const [isOpen, { toggle }] = useDisclosure(false);

  const isScrolled = scroll.y > 60;

  return (
    <Navbar
      fixed
      top="0"
      h="fit-content"
      zIndex={2}
      bg={isScrolled ? theme.colors.secondary[0] : "transparent"}
      px="lg"
      py="sm"
      sx={{ justifyContent: "center", transition: '0.5s ease' }}
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger opened={isOpen} onClick={toggle} size="md" ml="auto" />
      </MediaQuery>
    </Navbar>
  );
}
