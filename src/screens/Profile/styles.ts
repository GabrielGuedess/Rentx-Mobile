import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { DefaultTheme, css } from 'styled-components/native';

interface OptionProps {
  isActive: boolean;
}

const modifiersOptions = {
  active: (theme: DefaultTheme) => css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `,
};

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundPrimary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(227)}px;
    background: ${theme.colors.header};
    padding: 0 ${RFValue(24)}px;
    align-items: center;
  `}
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(32)}px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(25)}px;
    font-family: ${theme.fonts.secondarySemiBold};
    color: ${theme.colors.backgroundSecondary};
  `}
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;
    border-radius: ${RFValue(90)}px;
    margin-top: ${RFValue(48)}px;
    background: ${theme.colors.shape};
  `}
`;

export const Photo = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;
`;

export const PhotoButton = styled(RectButton)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.main};
  `}
`;

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(122)}px;
`;

export const Options = styled.View`
  ${({ theme }) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.line};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: ${RFValue(24)}px;
  `}
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  ${({ theme, isActive }) => css`
    padding-bottom: ${RFValue(14)}px;

    ${isActive && modifiersOptions.active(theme)}
  `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  ${({ theme, isActive }) => css`
    font-size: ${RFValue(20)}px;
    font-family: ${isActive
      ? theme.fonts.secondarySemiBold
      : theme.fonts.secondaryMedium};
    color: ${isActive ? theme.colors.header : theme.colors.textDetail};
  `}
`;

export const Sections = styled.View``;
