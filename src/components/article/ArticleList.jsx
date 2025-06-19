import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles, onDeleted }) => {
    return (
        <div className="flex flex-col gap-4">
            {articles.map(article => (
                <ArticleListItem key={article.id} article={article} onDeleted={onDeleted} />
            ))}
        </div>
    );
};

export default ArticleList;