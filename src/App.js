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
                    trigger: "4",
                  },
                  {
                    value: 2,
                    label: "No, I have some feedback to leave you",
                    trigger: "5",
                  },
                ],
              },
              {
                id: "4",
                message: "Here are four more ways to upgrade your React UX",
                trigger: "8",
              },
              {
                id: "5",
                user: true,
                trigger: "6",
              },
              {
                id: "6",
                message:
                  "Thanks for the feedback, please leave your email and I'll get back to you on that.",
                trigger: "7",
              },
              {
                id: "7",
                user: true,
                end: true,
              },
              {
                id: "8",
                component: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img
                      style={{ width: "60px" }}
                      src={
                        "https://miro.medium.com/max/1400/1*mKOaaI5WgUCsbQIu3VlooA.gif"
                      }
                      alt="gif"
                    />
                    <a
                      style={{ color: "black" }}
                      href="https://levelup.gitconnected.com/master-ux-with-react-in-2020-four-ways-to-upgrade-your-react-app-user-experience-a053b3ffbf59"
                    >
                      Master UX with React in 2020
                    </a>
                  </div>
                ),
                end: true,
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
