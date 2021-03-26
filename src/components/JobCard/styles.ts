import styled from 'styled-components';

interface StyledCardProps {
  highlighted: boolean;
}

export const CardContainer = styled.div<StyledCardProps>`
  background: #fff;
  box-shadow: 0 5px 16px #d7d7d7;
  border-radius: 4px;
  display: flex;
  padding: 24px 32px;
  margin-bottom: 24px;
  align-items: center;

  border-left: ${({ highlighted }) => highlighted ? '4px solid #64baba' : ''};

  .logo {
    border-radius: 100%;
    width: 60px;
    height: 60px;
  }

  .card-header {
    display: flex;
    align-items: center;

    .company {
      margin: 0 24px 0 0;
      color: #666;
      font-size: 14px;
    }
  }

  .position {
    font-size: 16px;
    margin: 16px 0;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: #64baba;
      }
    }
  }

  .card-infos {
    flex: 1;
    margin-left: 24px;
  }

  .badges {
    span {
      background: #333;
      padding: 4px 8px;
      border-radius: 30px;
      margin-right: 8px;
      text-transform: uppercase;
      font-size: 10px;
      color: #fff;

      &.new {
        background: #64baba;
      }
    }
  }

  .job-tags {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:hover {
      background-color: #64baba;
      color: #fff;
      cursor: pointer;
    }
  }

  .extra-infos span {
    font-size: 12px;
    color: #999;
    margin-right: 32px;
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
