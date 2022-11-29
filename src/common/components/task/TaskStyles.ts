import styled from 'styled-components';
interface Props {
  disabled: boolean;
}
export const TaskStyles = styled.label<Props>`
  position: relative;
  display: block;
  font-size: 18px;
  margin-bottom: 12px;
  padding-left: 30px;
  user-select: none;
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  &:hover {
    input ~ .checkmark {
      background-color: #ccc;
    }
  }
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
    &:checked ~ .checkmark {
      background-color: #003087;
      border: none;
    }
    &:checked ~ .checkmark:after {
      display: block;
    }
    &:disabled ~ .checkmark {
      background-color: #ccc;
    }
  }
  .checkmark {
    top: 0;
    left: 0;
    position: absolute;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:after {
      position: absolute;
      display: none;
      content: '';
      top: 2px;
      left: 6px;
      width: 6px;
      height: 10px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;
