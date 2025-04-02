import * as React from 'react';
import { ChatContainer, ChatHeader, ChatMain, FormContainer } from './styles';
import { Button } from './styles';
import { Messages } from './Messages';

export function Chat({ data }) {
  const [messages, setMessages] = React.useState([{
    text: "Hello ! Welcome to LSEG, we are here to help you",
    sender: "bot"
  }, 
  {
    text: "Please select an exchange",
    sender: "bot",
    choice: "exchange"
  }]);
  const [selectedExchange, setSelectedExchange] = React.useState('');
  const [step, setStep] = React.useState("exchange");

  const findPrice = React.useCallback((name) => {
    const stockData = data.find((item) => item.stockExchange === selectedExchange);
    if (stockData) {
      const stockInfo = stockData.topStocks.find((item) => item.stockName === name);
      if (stockInfo) {
        return stockInfo.price;
      }
    }
    return null;
  }, [data, selectedExchange]);


  const onOptionSelect = React.useCallback((option) => {
    if (step === "exchange") {
      setSelectedExchange(option);
      setMessages((prev) => [...prev, { text: option, sender: "user" }]);
      setStep("stock");
      setMessages((prev) => [...prev, { text: `Please select a stock from ${option}`, sender: "bot", choice: "stock" }]);
    } else if (step === "stock") {
      setMessages((prev) => [...prev, { text: option, sender: "user" }]);
      setStep("done");
      setMessages((prev) => [...prev, { text: `The stock price of ${option} is ${findPrice(option)}. Please select an option`, sender: "bot", choice: "done" }]);
    } else if (step === "done") {
      if (option === "Go Back") {
        setMessages((prev) => [...prev, { text: option, sender: "user" }]);
        setStep("stock");
        setMessages((prev) => [...prev, { text: "Please select an stock", sender: "bot", choice: "stock" }]);
      }
      if (option === "Go back to main menu") {
        setMessages((prev) => [...prev, { text: option, sender: "user" }]);
        setMessages((prev) => [...prev, { text: "Please select an exchange", sender: "bot", choice: "exchange" }]);
        setStep("exchange");
      }
    }
  }, [findPrice, step]);

  return (
    <ChatContainer>
      <ChatHeader>
        <h1><i className="fas fa-solid fa-comments"></i> LSEG Chat Bot</h1>
      </ChatHeader>
      <ChatMain>
        <Messages data={data} messages={messages} exchange={selectedExchange} onSelect={onOptionSelect} />
      </ChatMain>
      <FormContainer>
          <input
            id="msg"
            type="text"
            placeholder="Please pick an option"
            disabled
          />
          <Button disabled type="submit"><i className="fas fa-paper-plane"></i> Send</Button>
      </FormContainer>
    </ChatContainer>
  )
}