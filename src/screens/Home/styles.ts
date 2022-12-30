import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;
    background: ${theme.colors.shape_dark};
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
