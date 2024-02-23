async function renderScoreboard() {
  const url = "https://api.krizovka.diecezko.cz/";
  const response = await fetch(url);
  const data = await response.json();

  let string = "";

  let score = data.keys.sort(
    (a, b) => parseInt(b.metadata.score) - parseInt(a.metadata.score)
  );

  for (let i = 0; i < score.length; i += 1) {
    score[i].id = i + 1;
  }

  score[0].class = "first";
  score[1].class = "top";
  score[2].class = "top";

  // console.log(score);

  score.map((e) => {
    string += `
    <tr class="${e.class !== undefined ? e.class : ""}" >
      <td class="id">${e.id}.</td>
      <td class="name">${e.name} ${e.id === 1 ? "👑" : ""}</td>
      <td class="score">${e.metadata.score}&nbsp;b</td>
    </tr>`;
  });

  const boardEl = document.querySelector("#glory-list");
  boardEl.innerHTML = string;
}

renderScoreboard();
