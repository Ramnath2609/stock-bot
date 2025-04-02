import { OptionButton } from "./styles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  button:last-child {
    border-bottom: 1px solid black;
  }
`;

export function Options(props) {
  const { options, onClick } = props

  return (
    <Wrapper>
      {options.map((option, index) => (
        <OptionButton key={index} onClick={() => onClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Wrapper>
  )
}