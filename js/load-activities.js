document.addEventListener("DOMContentLoaded", () => {
  const activityList = document.getElementById("activity-list");
  const yearList = document.getElementById("activity-year-list");

  if (!activityList) return;

  const jsonPath = activityList.dataset.json;

  fetch(jsonPath)
    .then(response => response.json())
    .then(activities => {
      const groupedActivities = {};

      activities.forEach(item => {
        const year = item.year || item.date.substring(0, 4);

        if (!groupedActivities[year]) {
          groupedActivities[year] = [];
        }

        groupedActivities[year].push(item);
      });

      const years = Object.keys(groupedActivities).sort((a, b) => b - a);

      if (yearList) {
        yearList.innerHTML = "";

        years.forEach(year => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="#year-${year}">${year}</a>`;
          yearList.appendChild(li);
        });
      }

      activityList.innerHTML = "";

      years.forEach(year => {
        const section = document.createElement("section");
        section.className = "activity-year-section";
        section.id = `year-${year}`;

        const yearTitle = document.createElement("h3");
        yearTitle.className = "activity-year";
        yearTitle.textContent = year;

        section.appendChild(yearTitle);

        groupedActivities[year].forEach(item => {
          const article = document.createElement("article");
          article.className = "activity-card";

          const imageHtml = item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : "";

          const linkHtml = item.url
            ? `<a class="activity-link" href="${item.url}">詳しくはこちら →</a>`
            : "";

          article.innerHTML = `
            ${imageHtml}

            <div class="activity-content">
              <div class="activity-date">${item.date}</div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
              ${linkHtml}
            </div>
          `;

          section.appendChild(article);
        });

        activityList.appendChild(section);
      });
    })
    .catch(error => {
      console.error("Activities loading error:", error);
      activityList.innerHTML = "<p>活動報告を読み込めませんでした。</p>";
    });
});
