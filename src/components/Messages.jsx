import * as React from 'react'
import { ChatMessages, Message, MessageHolder } from './styles'
import { Options } from './Option'

/* Messages component where the messages are displayed.
    * It handles the logic of displaying messages and options.
    * It handles the logic of scrolling to the bottom of the chat.
    * It handles the logic of displaying the stock price.
*/

export function Messages(props) {
  const { messages, exchange, onSelect, data } = props
  const messagesRef = React.useRef(null);

  React.useEffect(() => {
    messagesRef && messagesRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, messagesRef])

  const getOptions = React.useCallback((choice) => {
    if (choice === "exchange") {
      return data.map((item) => item.stockExchange);
    }
    if (choice === "done") {
      return ["Go Back", "Go back to main menu"]
    }
    return data.find((i) => i.stockExchange === exchange).topStocks.map((item) => item.stockName);
  }, [data, exchange]);

  return (
    <ChatMessages>
      {
        messages.map((message, i) => {
          return (
            <MessageHolder $isUser={message.sender === "user"} key={i}>
              {message.sender === "bot" ? <i className="fas fa-robot" /> : <></>}
              <Message $isUser={message.sender === "user"}>
                <div>
                  <p className="text">{message.text}</p>
                  {message.choice && <Options options={getOptions(message.choice)} onClick={onSelect} />}
                </div>
              </Message>
            </MessageHolder>
          )
        })
      }
      <div ref={messagesRef} />
    </ChatMessages >
  )
}