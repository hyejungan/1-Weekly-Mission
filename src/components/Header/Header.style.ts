import styled from 'styled-components';
import { DeviceQuery } from '@/src/styles/media';

interface Propsisintersecting {
  $isintersecting: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  margin-bottom: 40px;
  background-color: #f0f6ff;

  ${DeviceQuery.mobile`
    margin-bottom: 20px;
  `}
`;

export const ContainerProfilePage = styled(Container)`
  padding-top: 20px;
  padding-bottom: 60px;
  justify-content: space-between;
  gap: 20px;

  ${DeviceQuery.mobile`
    padding-top: 10px;
    padding-bottom: 40px;
    margin-bottom: 20px;
  `}

  p {
    color: #000;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  ${DeviceQuery.mobile`
    gap: 10px;
  `}

  img {
    width: 60px;
    height: 60px;
    width: 100%;
  }
`;
export const ContainerFolderPage = styled(Container)<Propsisintersecting>`
  padding-top: 60px;
  padding-bottom: 90px;
  width: 100%;

  ${DeviceQuery.tablet`
    padding-left: 32.5px;
    padding-right: 32.5px;
  `}

  ${DeviceQuery.mobile`
    padding: 24px 32px 40px;
    
    ${({ $isintersecting }: any) =>
      $isintersecting === true &&
      `
      padding: 12px 32px 12px;
    `}
  `}

  ${({ $isintersecting }) =>
    $isintersecting === true &&
    `
    position : fixed;
    bottom : 0;
    z-index : 9999;
    margin : 0;
    padding-top : 24px;
    padding-bottom : 24px;
  `};
`;
export const LinkSearchBox = styled.div`
  padding: 16px 20px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  width: 800px;

  ${DeviceQuery.tablet`
    width: 704px;
  `}

  ${DeviceQuery.mobile`
    padding: 10px 8px;
    width: 100%;
  `}
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 10px 16px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border: none;
    color: #fff;
  }
`;

export const LinkInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  input {
    color: #9fa6b2;
    border: none;
    font-size: 16px;
  }

  ${DeviceQuery.mobile`
    gap: 8px;

    img {
      width: 16px;
      height: 16px;
    }
    input {
      font-size: 14px;
    }
  `}
`;