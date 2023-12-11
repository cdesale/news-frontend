import { useState } from "react";
import "./App.css";
import { Header } from "../components/header";
import { ArticleContainer } from "../components/article-container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
