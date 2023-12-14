import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../components/header";
import { ArticleContainer } from "../components/article-container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndividualArticleDetails } from "../components/individual-article-container";
import { Error } from "../components/error-handling";
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
          <Route path="/*" element={<Error message="Route not found" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
