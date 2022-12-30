import theme from 'styles/theme';

import { addDays, eachDayOfInterval, format } from 'date-fns';

import { MarkedDatesProps, DayProps } from '.';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDatesProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = format(addDays(item, 1), 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.mainLight,

        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.mainLight
            : theme.colors.main,
      },
    };
  });

  return interval;
}
