import styled from 'styled-components'

export const ChatContainer = styled.div`
    display: grid;
    height: 100vh;
    background: #e6e9ff;
    grid-template-rows: 80px calc(100% - 160px) 80px;
    grid-template-columns: 100%;
`

export const ChatHeader = styled.header`
    background: #667aff;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ChatMain = styled.main`
    display: grid;
    grid-template-columns: 100%;
    background-color: white;
`

export const ChatMessages = styled.div`
    padding: 30px;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
`

export const Message = styled.div`
    padding: 0 10px;
    margin-bottom: 15px;
    background-color: ${(props) => (props.$isUser ? '#dfe6e9' : '#9AECDB')};
    border-radius: 5px;
    overflow-wrap: break-word;
`

export const Meta = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #7386ff;
    opacity: 0.7;
    margin-bottom: 7px;
    span {
        color: #777;
    }
`

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 16px 30px;
    background-color: #667aff;
    input[type='text'] {
        font-size: 16px;
        padding: 5px;
        height: 40px;
        flex: 1;
        border-radius: 6px;
        border: none;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 10px 15px;
    background: #e6e9ff;
    color: #667aff;
    border: 0;
    font-size: 17px;
    border-radius: 12px;
`

export const OptionButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 15px;
  cursor: pointer;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: none;
`;

export const MessageHolder = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.$isUser ? '100%' : '20px auto')};
  grid-gap: 10px;
  margin-left: ${(props) => (props.$isUser ? 'auto' : '0')};
  width: max-content;
`;