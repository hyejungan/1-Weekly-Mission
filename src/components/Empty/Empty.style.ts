import styled from 'styled-components';
import { DeviceQuery } from '@/src/styles/media';

export const Empty = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  ${DeviceQuery.tablet`
    width: 769px;
  `}

  ${DeviceQuery.mobile`
    width: 325px;
  `}
`;