import { mediaQuery } from '@/helpers/mediaQuery';
import { Title, TitleProps } from '@mantine/core';

export function SectionTitle(props: TitleProps) {
  return (
    <Title
      order={2}
      fw={400}
      size="clamp(22px, 3.5vw, 60px)"
      sx={(theme) => ({
        width: '100%',

        color: theme.colors.secondary[0],
        textAlign: 'center',

        [mediaQuery(theme.breakpoints.sm)]: {
          textAlign: 'left',
        },
      })}
      {...props}
    />
  );
}
