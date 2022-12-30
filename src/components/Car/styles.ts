import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(126)}px;
    background: ${theme.colors.backgroundSecondary};
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
  `}
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    color: ${theme.colors.textDetail};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.main};
  `}
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
