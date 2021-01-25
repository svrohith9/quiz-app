import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
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
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #56ffa4)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff6566, #c16868)"
        : "linear-gradient(90deg, #6eafff, #6eafff)"};
    border: 3px, solid #fff;
    color: #fff;
  }
`;
