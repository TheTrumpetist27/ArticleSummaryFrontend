import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles }) => {
    return (
        <div className="flex flex-col gap-4">
            {articles.map(article => (
                <ArticleListItem key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;