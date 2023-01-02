import styled, { css } from 'styled-components/native';

interface Props {
  active: boolean;
}

export const Container = styled.View<Props>`
  ${({ theme, active }) => css`
    width: 6px;
    height: 6px;
    background-color: ${active ? theme.colors.title : theme.colors.shape};
    margin-left: 8px;
    border-radius: 3px;
  `}
`;
