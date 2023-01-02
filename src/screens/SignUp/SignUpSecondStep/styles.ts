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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(31)}px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondarySemiBold};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.title};
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(16)}px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.text};
  `}
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const FormTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondarySemiBold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.title};
    margin-bottom: ${RFValue(24)}px;
  `}
`;
