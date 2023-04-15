import { useParams } from "react-router-dom";

function Article({ articles }) {
  const { articleTitle } = useParams();
  return (
    <div className="article">
      <span>This is the Article titled {articleTitle}.</span>
      <div className="article-body">
        {articles.find((article) => article.title === articleTitle).content}
      </div>
    </div>
  );
}

export default Article;
