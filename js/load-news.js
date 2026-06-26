document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("news-list");
  const yearList = document.getElementById("news-year-list");

  if (!newsList) return;

  const jsonPath = newsList.dataset.json;
  const limit = newsList.dataset.limit;

  fetch(jsonPath)
    .then(response => response.json())
    .then(newsItems => {

      // トップページ用：最新5件だけ表示
      if (limit) {
        const items = newsItems.slice(0, Number(limit));

        newsList.innerHTML = "";

        items.forEach(item => {
          const li = document.createElement("li");

          li.innerHTML = `
            <span class="date">${item.date}</span>
            <span>${item.text}</span>
          `;

          newsList.appendChild(li);
        });

        return;
      }

      // お知らせ一覧ページ用：年度ごとに分類
      const groupedNews = {};

      newsItems.forEach(item => {
        const year = item.date.substring(0, 4);

        if (!groupedNews[year]) {
          groupedNews[year] = [];
        }

        groupedNews[year].push(item);
      });

      const years = Object.keys(groupedNews).sort((a, b) => b - a);

      // 左側：年度リンクを作成
      if (yearList) {
        yearList.innerHTML = "";

        years.forEach(year => {
          const li = document.createElement("li");

          li.innerHTML = `<a href="#year-${year}">${year}</a>`;

          yearList.appendChild(li);
        });
      }

      // 右側：年度ごとのお知らせを作成
      newsList.innerHTML = "";

      years.forEach(year => {
        const section = document.createElement("section");
        section.className = "news-year-section";
        section.id = `year-${year}`;

        const title = document.createElement("h3");
        title.className = "news-year";
        title.textContent = year;

        const ul = document.createElement("ul");
        ul.className = "news-list";

        groupedNews[year].forEach(item => {
          const li = document.createElement("li");

          li.innerHTML = `
            <span class="date">${item.date}</span>
            <span>${item.text}</span>
          `;

          ul.appendChild(li);
        });

        section.appendChild(title);
        section.appendChild(ul);
        newsList.appendChild(section);
      });
    })
    .catch(error => {
      console.error("News loading error:", error);
      newsList.innerHTML = "<p>お知らせを読み込めませんでした。</p>";
    });
});
