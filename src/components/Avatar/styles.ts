import styled from 'styled-components/native';

export const Container = styled.View<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
`;

export const Image = styled.Image<{ size: number }>`
  flex: 1;
  border-radius: ${({ size }) => size / 2}px;
`;
