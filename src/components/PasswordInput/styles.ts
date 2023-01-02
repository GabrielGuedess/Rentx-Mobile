import { RFValue } from 'react-native-responsive-fontsize';

import styled, { DefaultTheme, css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

const modifiersContainer = {
  isFocused: (theme: DefaultTheme) => css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `,
};

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  ${({ theme, isFocused }) => css`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    background: ${theme.colors.backgroundSecondary};

    ${isFocused && modifiersContainer.isFocused(theme)}
  `}
`;

export const InputText = styled.TextInput<Props>`
  ${({ theme, isFocused }) => css`
    flex: 1;
    background: ${theme.colors.backgroundSecondary};
    font-family: ${theme.fonts.primaryRegular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
    padding: 0 ${RFValue(23)}px;

    ${isFocused && modifiersContainer.isFocused(theme)}
  `}
`;
