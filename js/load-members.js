document.addEventListener("DOMContentLoaded", () => {
  const memberList = document.getElementById("member-list");
  const alumniList = document.getElementById("alumni-list");

  if (!memberList) return;

  const jsonPath = memberList.dataset.json;

  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const members = data.current || [];
      const alumni = data.alumni || [];

      memberList.innerHTML = "";

      members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";

        const profileButton = member.profile_url
          ? `<a class="profile-link" href="${member.profile_url}" target="_blank" rel="noopener">プロフィール →</a>`
          : "";
        
        card.innerHTML = `
          <img src="../assets/images/members/${member.image}" alt="${member.name}" class="member-photo">
        
          <div class="member-info">
            <h3>${member.name}</h3>
            <p class="member-affiliation">${member.affiliation}</p>
            <p class="member-role">${member.role}</p>
            <p class="member-fields">${member.fields}</p>
            ${profileButton}
          </div>
        `;

        memberList.appendChild(card);
      });

      if (alumniList) {
        alumniList.innerHTML = "";

        alumni.forEach(name => {
          const li = document.createElement("li");
          li.textContent = name;
          alumniList.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error("Members loading error:", error);
      memberList.innerHTML = "<p>メンバー情報を読み込めませんでした。</p>";
      if (alumniList) {
        alumniList.innerHTML = "<li>歴代メンバー情報を読み込めませんでした。</li>";
      }
    });
});
