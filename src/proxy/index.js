const ArticleClass = require('./Article')

/**
 *
 * @description Example for Proxy Pattern (Structural Patterns)
 *
 */

async function main() {
    const Article = new ArticleClass();

    Article.getArticle('Game-of-Thrones-Review');
    Article.getArticle('Game-of-Thrones-Review');
}

main();