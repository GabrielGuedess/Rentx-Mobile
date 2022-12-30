import React from 'react';
import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { pt_BR } from './localeConfig';

LocaleConfig.locales['pt-br'] = pt_BR;

LocaleConfig.defaultLocale = 'pt-br';

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

export interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDatesProps: MarkedDatesProps;
  onDayPress: (date: DateData) => void;
}

export function Calendar({ markedDatesProps, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.backgroundSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.textDetail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primaryRegular,
        textDayHeaderFontFamily: theme.fonts.primaryMedium,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondarySemiBold,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: { marginHorizontal: -15 },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDatesProps}
      onDayPress={onDayPress}
    />
  );
}
