import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.header};
    padding-top: ${RFValue(96)}px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondarySemiBold};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};
    margin-top: ${RFValue(40)}px;
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    text-align: center;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.textDetail};
    margin-top: ${RFValue(16)}px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${RFValue(80)}px;
`;
