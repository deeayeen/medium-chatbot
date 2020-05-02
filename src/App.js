import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerFontColor: "#fff",
  headerBgColor: "#090705",
  botBubbleColor: "#090705",
  userBubbleColor: "#090705",
  userFontColor: "#fff",
  botFontColor: "#fff",
};

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "left" }}>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Medium Chatbot"
            steps={[
              {
                id: "1",
                message: "Hey! Thanks for checking out my Medium article",
                trigger: "2",
              },
              {
                id: "2",
                message: "Did you enjoy the read?",
                trigger: "3",
              },
              {
                id: "3",
                options: [
                  {
                    value: 1,
                    label: "Yes! Do you have any more React UX articles?",
                  },
                  { value: 2, label: "No, I have some feedback to leave you" },
                ],
              },
            ]}
            botAvatar="https://miro.medium.com/fit/c/128/128/2*SF7HEfkPH70P7E6VTYVmeg.png"
            floating
          />
        </ThemeProvider>
      </div>
      <header className="App-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>React App</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
