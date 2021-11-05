const quotes = [
  {
    id: "0",
    content:
      "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A. P. J. Abdul Kalam",
  },

  {
    id: "1",
    content:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford",
  },

  {
    id: "2",
    content: "The world makes way for the man who knows where he is going.",
    author: "Ralph Waldo Emerson",
  },

  {
    id: "3",
    content:
      "A man should look for what is, and not for what he thinks should be.",
    author: "Albert Einstein",
  },

  {
    id: "4",
    content: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert F. Kennedy",
  },

  {
    id: "5",
    content:
      "Beware of missing chances; otherwise it may be altogether too late someday.",
    author: "Franz Liszt",
  },

  {
    id: "6",
    content:
      "If you do what you've always done, you'll get what you’ve always gotten.",
    author: "Tony Robbins",
  },
];

const quoteContent = document.querySelector(".quote-container .quote-content");
const quoteAuthor = document.querySelector(".quote-container .quote-author");
const newQuoteButton = document.querySelector(
  ".quote-container .new-quote-btn"
);

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
};

const nextQuote = () => {
  // fetch("https://api.quotable.io/random?maxLength=100")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     updateQuote(data);
  //   });

  let quoteId = Math.floor(Math.random() * quotes.length);

  updateQuote(quotes[quoteId]);
};

nextQuote();

newQuoteButton.addEventListener("click", nextQuote);
