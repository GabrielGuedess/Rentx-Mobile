import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from 'dtos/CarDTO';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundPrimary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;
    background: ${theme.colors.shapeDark};
    justify-content: flex-end;
  `}
`;
export const HeaderContent = styled.View`
    flex-direction: row
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(32)}px ${RFValue(24)}px;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.primaryRegular};
    color: ${theme.colors.text};
  `}
`;

export const CarList = styled(FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  ${({ theme }) => css`
    position: absolute;
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(30)}px;
    background: ${theme.colors.main};
    justify-content: center;
    align-items: center;
    bottom: ${RFValue(13)}px;
    right: ${RFValue(22)}px;
  `}
`;
