import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${RFValue(24)}px;
    background: ${theme.colors.backgroundPrimary};
  `}
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(116)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondarySemiBold};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.title};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.text};
    margin-top: ${RFValue(16)}px;
  `}
`;

export const Form = styled.View`
  width: 100%;
  margin: ${RFValue(64)}px 0;
`;

export const Footer = styled.View``;
