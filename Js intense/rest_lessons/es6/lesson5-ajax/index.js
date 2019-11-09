import * as ArticlesModel from './articles';
import 'babel-polyfill';

async function testArticlesModel() {
  let articles = await ArticlesModel.all();
  console.log(articles);
  console.log(`articles count = ${articles.length}`);
  let ind = Math.floor(Math.random() * articles.length);
  console.log('select index ' + ind + ', id = ' + articles[ind].id);

  // получаем статью по id
  let article = await ArticlesModel.one(articles[ind].id);
  console.log(article);
  //добавляем статью передавая title и content
  // let testTime = new Date();
  // let addArtcile = await ArticlesModel.add({
  //   title: `Created - ${testTime.getHours()}:${testTime.getMinutes()}:${testTime.getSeconds()}`,
  //   content: `lorem lorem lorem lorem : ${articles[ind].id}`
  // });

  // console.log(addArtcile);

  // let articlesNew = await ArticlesModel.all();
  // console.log(articlesNew);
  /*

    let removeRes = await ArticlesModel.remove(article.id);
    console.log('что с удалением? - ' + removeRes);

    let articlesNewList = await ArticlesModel.all();
    console.log(`articles count = ${articlesNewList.length}`);*/
}

testArticlesModel()
  .then(() => {})
  .catch(e => {
    console.log(e.message);
  });
