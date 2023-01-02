import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const arrayQotes = [
    { quote: "lmjsdozhediuzohd", author: "Khamais" },
    { quote: "lmjsdozhediuzohd", author: "Khamais" },
  ];
  const [qute, setQuote] = useState({});
  useEffect(() => {
    setQuote(arrayQotes[0]);
  }, []);
  const fetchQuote = () => {
    setQuote(arrayQotes[1]);
  };
  return (
    <main className="App">
      <div id="quote-box">
        {" "}
        <p id="text">{qute.quote}</p>
        <span id="author">{qute.author}</span>
        <button id="new-quote" onClick={fetchQuote}></button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
      </div>
    </main>
  );
}

export default App;
