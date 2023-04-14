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
      <Article />
      <Footer />
    </div>
  );
}

export default App;
