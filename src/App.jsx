import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../components/header";
import { ArticleContainer } from "../components/article-container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndividualArticleDetails } from "../components/individual-article-container";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleContainer />} />
          <Route
            path="/articles/:article_id"
            element={<IndividualArticleDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
