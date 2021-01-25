import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  transition: all 0.2s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
  }
`;
