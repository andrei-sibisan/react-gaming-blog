import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

import articles from "./Data/articles";
console.log(articles);
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar articles={articles} />
      <Routes>
        <Route
          path="articles/:articleTitle"
          element={<Article articles={articles} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
