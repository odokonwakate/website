document.addEventListener("DOMContentLoaded", () => {
  const memberList = document.getElementById("member-list");

  if (!memberList) return;

  const jsonPath = memberList.dataset.json;

  fetch(jsonPath)
    .then(response => response.json())
    .then(members => {
      memberList.innerHTML = "";

      members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";

        card.innerHTML = `
          <img src="${member.image}" alt="${member.name}" class="member-photo">

          <div class="member-info">
            <h3>${member.name}</h3>
            <p class="member-affiliation">${member.affiliation}</p>
            <p class="member-role">${member.role}</p>
            <p class="member-fields">${member.fields}</p>
          </div>
        `;

        memberList.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Members loading error:", error);
      memberList.innerHTML = "<p>メンバー情報を読み込めませんでした。</p>";
    });
});
