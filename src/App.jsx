import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const arrayQotes = [
    {
      quote:
        "When you realize nothing is lacking, the whole world belongs to you.",
      author: "Lao Tzu",
      imgUrl:
        "https://i0.wp.com/www.invajy.com/wp-content/uploads/2022/09/Zen-Quotes-4.jpg?w=768&ssl=1",
    },
    {
      quote:
        "If you are exploring truth of life, explore the present moment. Living in the present moment is the only truth of life.",
      author: "Invajy",
      imgUrl:
        "https://i0.wp.com/www.invajy.com/wp-content/uploads/2022/09/Zen-Quotes-2.jpg?w=750&ssl=1",
    },
    {
      quote: "When you sit, everything sits with you.",
      author: "Shunryu Suzuki",
      imgUrl:
        "https://i0.wp.com/www.invajy.com/wp-content/uploads/2022/09/Zen-Quotes.jpg?w=1200&ssl=1",
    },
    {
      quote:
        "Learning the art of unlearning and replacing old learning with a new learning is the true learning.",
      author: "Invajy",
      imgUrl:
        "https://i0.wp.com/www.invajy.com/wp-content/uploads/2022/09/Zen-Quotes-3.jpg?resize=768%2C481&ssl=1",
    },
    {
      quote:
        "Muddy water is best cleared by leaving it alone.",
      author: "Alan Watts",
      imgUrl:
        "https://i0.wp.com/www.invajy.com/wp-content/uploads/2022/09/Zen-Quotes-1.jpg?w=588&ssl=1",
    }
  ];
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [qute, setQuote] = useState({});
  useEffect(() => {
    setQuote(arrayQotes[randomNumber(0, arrayQotes.length-1)]);
  }, []);
  const fetchQuote = () => {
    setQuote(arrayQotes[randomNumber(0, arrayQotes.length-1)]);
  };
  return (
    <main className="App">
      <div id="quote-box">
        {" "}
        <figure>
          <img className="img-styles" src={qute.imgUrl}></img>
        </figure>
        <p id="text">{qute.quote}</p>
        <span id="author">{qute.author}</span>
        <button id="new-quote" onClick={fetchQuote} type="button">generate new quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
      </div>
    </main>
  );
}

export default App;
