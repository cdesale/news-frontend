import { useState } from "react";
import "./App.css";
import { Header } from "../components/header";
import { ArticleContainer } from "../components/article-container";

function App() {
  return (
    <>
      <Header />
      <ArticleContainer />
    </>
  );
}

export default App;
