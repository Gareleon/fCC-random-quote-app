import { useEffect, useState } from "react";
import "../components/styles.css";

export default function RandomQuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const api_key = "2ApfmV1cZlOgErdniZaDDg==gXlUDv6aXwPlTUmX";
  const category = "happiness";
  const url = "https://api.api-ninjas.com/v1/quotes";

  async function fetchNewQuote() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?category=${category}`, {
        method: "GET",
        headers: {
          "X-Api-Key": api_key,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Failed to fetch the quote:", error);
      setQuote({ quote: "Failed to fetch quote.", author: "Error" });
    } finally {
      setLoading(false);
    }
  }

  // UseEffect to fetch quote only once
  useEffect(() => {
    fetchNewQuote(); // Fetch only when component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="container">
      <div id="quote-box" className="quote-box">
        <div>
          <h2 id="text">
            {loading
              ? "Loading a new quote..."
              : quote?.quote || "Some error occurred, try again."}
          </h2>
          <p id="author">{!loading && (quote?.author || "Unknown")}</p>
        </div>
        <div className="row">
          <div>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  {/* SVG Path */}
                </svg>
              </i>
            </a>
            <a id="instagram-quote">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  {/* SVG Path */}
                </svg>
              </i>
            </a>
          </div>
          <button type="button" id="new-quote" onClick={fetchNewQuote}>
            New Quote
          </button>
        </div>
      </div>
      <p>
        Made by: <a href="https://github.com/Gareleon">Gareleon</a>!
      </p>
    </div>
  );
}
