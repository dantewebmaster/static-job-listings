import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const ChipContainer = styled.div`
  background: #f1f1f1;
  margin-right: 8px;
  color: #666;
  font-size: 12px;
  border-radius: 2px;
  width: auto;
  display: inline-block;
  overflow: hidden;
  height: 32px;

  span {
    padding: 12px;
    line-height: 34px;
  }

  button.remove {
    height: 32px;
    width: 32px;
    cursor: pointer;
    border: 0;
    background-color: ${colors.primary};
    color: #fff;
    transition: background-color 0.2s ease;
    outline: none;

    img {
      width: 10px;
    }

    &:hover {
      background-color: #333;
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
