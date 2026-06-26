document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("event-list");

  if (!eventList) return;

  const jsonPath = eventList.dataset.json;

  fetch(jsonPath)
    .then(response => response.json())
    .then(events => {
      eventList.innerHTML = "";

      events.forEach(event => {
        const article = document.createElement("article");
        article.className = "event-card";

        const detailsHtml = event.details
          ? event.details.map(detail => `<span class="event-detail">${detail}</span>`).join("")
          : "";

        const linkHtml = event.url
          ? `<a href="${event.url}" class="event-link">詳しくはこちら →</a>`
          : "";

        article.innerHTML = `
          <div class="event-date">${event.date}</div>

          <div class="event-content">
            <h3>${event.title}</h3>
            <div class="event-details">
              ${detailsHtml}
            </div>
            ${linkHtml}
          </div>
        `;

        eventList.appendChild(article);
      });
    })
    .catch(error => {
      console.error("Events loading error:", error);
      eventList.innerHTML = "<p>イベント情報を読み込めませんでした。</p>";
    });
});
