import { SectionTitle } from '@/components/SectionTitle';
import { fonts } from '@/styles/fonts';
import {
  Anchor,
  Button,
  Flex,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { BrandWhatsapp, Mail } from 'tabler-icons-react';

export function GetInTouch() {
  const theme = useMantineTheme();

  const isLg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  const buttonSize = isLg ? 'lg' : 'md';

  return (
    <Stack
      id="contact"
      h="fit-content"
      mih="100%"
      justify="center"
      align="center"
      spacing="lg"
    >
      <SectionTitle>Feeling interested?</SectionTitle>

      <Stack spacing="lg" mt="lg">
        <Title
          ff={fonts.nunito}
          fw={500}
          color={theme.colors.tertiary[0]}
          size="clamp(22px, 3vw, 60px)"
          align="center"
        >
          Get In Touch
        </Title>
        <Text
          lts="-0.05em"
          size="clamp(14px, 1.2vw, 26px)"
          color={theme.colors.tertiary[0]}
          align="center"
        >
          I'm always interested in new opportunities and looking forward to
          upgrade my experience. Send a hello and I'll answer as fast as I can!
        </Text>
      </Stack>

      <Flex gap="lg" mt="lg">
        <Button
          variant="outline"
          color={theme.colors.secondary[0]}
          ff={fonts.nunito}
          size={buttonSize}
          sx={{ fontSize: 'clamp(18px, 1.2vw, 26px)' }}
          rightIcon={<Mail size={32} />}
          component={Link}
          href="mailto:cnbravos5@gmail.com"
          target="_blank"
        >
          Say Hello
        </Button>
        <Button
          variant="outline"
          color={theme.colors.secondary[0]}
          ff={fonts.nunito}
          size={buttonSize}
          sx={{ fontSize: 'clamp(18px, 1.2vw, 26px)' }}
          rightIcon={<BrandWhatsapp size={32} />}
          component={Link}
          href="https://wa.me/5541988854317"
          target="_blank"
        >
          Say Hi
        </Button>
      </Flex>
    </Stack>
  );
}
