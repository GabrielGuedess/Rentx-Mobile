import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { ButtonProps } from '.';

export const Container = styled(RectButton)<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 100%;
    padding: ${RFValue(19)}px;
    align-items: center;
    justify-content: center;
    background: ${color ?? theme.colors.main};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;
