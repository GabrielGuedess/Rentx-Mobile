import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    background: ${theme.colors.backgroundSecondary};
  `}
`;

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.backgroundSecondary};
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
    padding: 0 ${RFValue(23)}px;
  `}
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)``;
