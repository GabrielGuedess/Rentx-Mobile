import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled(BorderlessButton)`
  align-self: flex-start;
  padding: ${RFValue(5)}px;
`;
