function getNews(){
    fetch('https://currentsapi.services/en', {
          method:"GET"
       })
    .then((data) => {
       console.log(data);
      return data.json();
     })
    .then((news) => loadNews(newsDetails));
  }
  
  function loadNews(news){
    const newsList=document.createElement("div");
    newsList.class=news-list;
    latestNews.forEach((newsDetails) => {
      const newsContainer=document.createElement("div");
      newsContainer.class=news-container;
      newsContainer.innerHTML=`
      <img class="news-image" src=${newsDetails.image}></img>
      <div>
      <h3 class="news-title">${newsDetails.title}</h3>
      <p class="news-description">${newsDetails.description}</h3>
      </div>
      `;
      newsList.append(newsContainer);
     });
      document.body.append(newsList);
  }
  
  getNews();