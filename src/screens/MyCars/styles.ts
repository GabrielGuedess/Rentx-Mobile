import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { CarProps } from '.';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    background: ${theme.colors.backgroundPrimary};
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
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.shape};
    margin-top: ${RFValue(24)}px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryRegular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
    margin-top: ${RFValue(24)}px;
  `}
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 ${RFValue(16)}px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(24)}px 0;
`;

export const AppointmentsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
  `}
`;

export const AppointmentsQuantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const CarList = styled(FlatList<CarProps>).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CarWrapper = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const CarFooter = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: ${RFValue(12)}px;
    margin-top: -${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.backgroundSecondary};
  `}
`;

export const CarFooterTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.textDetail};
  `}
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
  `}
`;
