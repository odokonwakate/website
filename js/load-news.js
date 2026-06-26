document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("news-list");

  if (!newsList) return;

  const limit = newsList.dataset.limit;
  const jsonPath = newsList.dataset.json;

  fetch(jsonPath)
    .then(response => response.json())
    .then(newsItems => {
      const items = limit ? newsItems.slice(0, Number(limit)) : newsItems;

      newsList.innerHTML = "";

      items.forEach(item => {
        const li = document.createElement("li");

        li.innerHTML = `
          <span class="date">${item.date}</span>
          <span>${item.text}</span>
        `;

        newsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("News loading error:", error);
      newsList.innerHTML = "<li>お知らせを読み込めませんでした。</li>";
    });
});
