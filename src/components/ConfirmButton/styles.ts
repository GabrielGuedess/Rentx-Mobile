import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;
    background: ${theme.colors.shapeDark};
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;
