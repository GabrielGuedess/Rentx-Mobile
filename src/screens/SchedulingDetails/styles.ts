import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.backgroundSecondary};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + RFValue(18)}px;
  margin-left: ${RFValue(24)}px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(32)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(38)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryRegular};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryRegular};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.title};
  `}
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryRegular};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryRegular};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.main};
  `}
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.backgroundSecondary};
    padding: ${RFValue(24)}px ${RFValue(24)}px
      ${getBottomSpace() + RFValue(24)}px;
  `}
`;

export const RentalPeriod = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(30)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.line};
    padding-bottom: ${RFValue(16)}px;
  `}
`;

export const CalendarIcon = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background: ${theme.colors.main};
    justify-content: center;
    align-items: center;
  `}
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
`;

export const RentalPriceLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const RentalPriceTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.success};
  `}
`;
