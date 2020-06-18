const _ = require('lodash');
const ExternalService = require('./data/articles');
/**
 * @description Article proxy class
 */
class Article {
    constructor() {
        this.listOfCachedArticles = [];
    }

    getArticle(slug) {
        const article = _.find(this.listOfCachedArticles, { slug })
        if (!article) {
            console.log('Not Cached, will get and store in cache')
            const articleFromExtService = _.find(ExternalService.listOfArticles, { slug })
            if (articleFromExtService) {
                this.listOfCachedArticles.push(articleFromExtService);
                return articleFromExtService;
            } else {
                console.log('Article dont exist')
            }
        } else {
            console.log('Getted by cache')
        }
        return article;
    }
}

module.exports = Article;