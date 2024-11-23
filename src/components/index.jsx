import { useEffect, useState } from "react";

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
    <div className=" bg-yellow-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-[50%] text-white">
      <div
        id="quote-box"
        className="p-4 bg-blue-400 h-auto w-full max-w-[700px] m-0 flex-col justify-center align-middle gap-5 shadow-lg"
      >
        <h2 id="text" className=" text-2xl">
          {loading
            ? "Loading a new quote..."
            : quote?.quote || "Some error occurred, try again."}
        </h2>
        <p id="author" className="text-end mt-3 italic text-base">
          {!loading && (quote?.author || "Unknown")}
        </p>
        <div className="flex justify-between align-middle text-white mt-3">
          <div>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <i className="fab fa-twitter text-3xl p-2"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-3xl p-2"></i>
            </a>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 rounded"
            type="button"
            id="new-quote"
            onClick={fetchNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <p className=" text-gray-800">
        Made by: <a href="https://github.com/Gareleon">Gareleon</a>!
      </p>
    </div>
  );
}
