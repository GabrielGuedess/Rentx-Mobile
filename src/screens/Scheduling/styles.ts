import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { DefaultTheme, css } from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

const DateValueModifiers = {
  selected: (theme: DefaultTheme) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
  `,
};

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.backgroundSecondary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.header};
    justify-content: center;
    padding: ${RFValue(25)}px;
    padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondarySemiBold};
    font-size: ${RFValue(34)}px;
    color: ${theme.colors.shape};
    margin: ${RFValue(24)}px 0;
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(32)}px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text};
    text-transform: uppercase;
  `}
`;

export const DateValue = styled.Text<DateValueProps>`
  ${({ theme, selected }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
    text-transform: uppercase;

    ${!selected && DateValueModifiers.selected(theme)}
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalIndicator: false,
})``;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`;
