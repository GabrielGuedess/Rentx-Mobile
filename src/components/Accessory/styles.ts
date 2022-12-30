import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(109)}px;
    height: ${RFValue(92)}px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.backgroundPrimary};
    padding: ${RFValue(16)}px;
    margin-bottom: ${RFValue(8)}px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.text};
  `}
`;
