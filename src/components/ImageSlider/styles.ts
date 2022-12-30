import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImagesIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${RFValue(24)}px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  ${({ theme, active }) => css`
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin-left: 8px;
    background: ${active ? theme.colors.title : theme.colors.shape};
  `}
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(208)}px;
  height: ${RFValue(132)}px;
`;
