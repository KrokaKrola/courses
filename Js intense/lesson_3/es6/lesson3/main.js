import * as ArticlesModel from "./articles";

ArticlesModel.all(
  articles => {
    console.log("articles count = " + articles.length);

    // // берём случайный индекс
    // let ind = Math.floor(Math.random() * articles.length);
    // console.log('select index ' + ind + ', id = ' + articles[ind].id)

    // // получаем статью по id
    // ArticlesModel.one(articles[ind].id, (article) => {
    //     console.log(article);

    //     // пробуем удалить её
    //     ArticlesModel.remove(article.id, (res) => {
    //         console.log('что с удалением? - ' + res);

    //         // а сколько статей в базе сейчас
    //         ArticlesModel.all((articles) => {
    //             console.log('articles count = ' + articles.length);
    //         }, (error) => {
    //             console.log(error + ' in articles list after delete');
    //         });
    //     }, (error) => {
    //         console.log(error + ' in articles delete');
    //     })

    // }, (error) => {
    //     console.log(error + ' in articles one');
    // });
  },
  error => {
    console.log(error + " in articles list");
  }
);

import * as ArticlesModelAsync from "./articles-async";

// ArticlesModelAsync.all().then((articles) => {
//     console.log("---------------------------------------")
//     console.log('articles count = ' + articles.length);
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id);
//     return ArticlesModelAsync.one(articles[ind].id);
// }).then((article) => {
//     console.log(article);
//     return ArticlesModelAsync.remove(article.id);
// }).then((res) => {
//     console.log(res);
//     return ArticlesModelAsync.all();
// }).then((articles) => {
//     console.log(articles);
// }).catch((err) => {
//     console.log(err.msg);
// });

async function init() {
  let articles = await ArticlesModelAsync.all();
  console.log(articles);
  let ind = Math.floor(Math.random() * articles.length);
  let article = await ArticlesModelAsync.one(articles[ind].id);
  console.log(article);
  await ArticlesModelAsync.remove(article.id);
  articles = await ArticlesModelAsync.all();
  return articles;
}

init()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err.message);
  });
