import styled from 'styled-components';
import { colors, sizes } from '../../styles/variables';

interface StyledCardProps {
  highlighted: boolean;
}

export const CardContainer = styled.div<StyledCardProps>`
  background: #fff;
  box-shadow: 0 5px 16px ${colors.grayShadow};
  border-radius: 4px;
  display: flex;
  padding: ${sizes.spacing.medium}px ${sizes.spacing.medium * 2}px;
  margin-bottom: ${sizes.spacing.large}px;
  align-items: center;

  border-left: 4px solid ${({ highlighted }) =>
    highlighted ? `${colors.primary}` : 'transparent'};

  .logo {
    border-radius: 100%;
    width: 60px;
    height: 60px;
  }

  .card-header {
    display: flex;
    align-items: center;

    .company {
      margin-right: ${sizes.spacing.large}px;
      color: #666;
      font-size: 14px;
    }
  }

  .position {
    font-size: 14px;
    margin: 0 0 ${sizes.spacing.small}px;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: ${colors.primary};
      }
    }
  }

  .card-infos {
    flex: 1;
    margin-left: ${sizes.spacing.large}px;
  }

  .badges {
    span {
      background: #333;
      padding: 4px 8px;
      border-radius: 30px;
      margin-right: ${sizes.spacing.small}px;
      text-transform: uppercase;
      font-size: 10px;
      color: #fff;

      &.new {
        background: ${colors.primary};
      }
    }
  }

  .job-tags {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:hover {
      background-color: ${colors.primary};
      color: #fff;
      cursor: pointer;
    }
  }

  .extra-infos span {
    font-size: ${sizes.fonts.small}px;
    color: #999;
    margin-right: ${sizes.spacing.medium * 2}px;
    position: relative;

    /* dot divider */
    &:after {
      content: '';
      background: #999;
      display: inline-block;
      position: absolute;
      right: -16px;
      top: 5px;
      width: 3px;
      height: 3px;
      border-radius: 100%;
    }
    &:last-child::after {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 48px;
    padding: 16px;

    .card-infos {
      margin: 16px 0 16px 0;
      width: 100%;
      border-bottom: 1px solid #ddd;
      padding-bottom: 16px;
    }

    .logo {
      margin-top: -48px;
    }

    .extra-infos span {
      margin-right: 14px;

      &:after {
        right: -8px;
      }
    }
  }
`;
