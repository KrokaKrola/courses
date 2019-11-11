import * as ArticlesModel from './articles';

async function testArticlesModel() {
  let articles = await ArticlesModel.all();
  console.log(`articles count = ${articles.length}`);

  let ind = Math.floor(Math.random() * articles.length);
  console.log('select index ' + ind + ', id = ' + articles[ind].id);

  // получаем статью по id
  let article = await ArticlesModel.one(articles[ind].id);
  console.log(article);

  let removeRes = await ArticlesModel.remove(article.id);
  console.log('что с удалением? - ' + removeRes);

  let articlesNewList = await ArticlesModel.all();
  console.log(`articles count = ${articlesNewList.length}`);
}

testArticlesModel()
  .then(() => {})
  .catch(e => {
    console.log(e.message);
  });

// async function init() {
//   let articles = await ArticlesModelAsync.all();
//   console.log(articles);
//   let ind = Math.floor(Math.random() * articles.length);
//   let article = await ArticlesModelAsync.one(articles[ind].id);
//   console.log(article);
//   await ArticlesModelAsync.remove(article.id);
//   articles = await ArticlesModelAsync.all();
//   return articles;
// }

// init()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
