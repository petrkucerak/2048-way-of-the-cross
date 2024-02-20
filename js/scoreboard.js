async function renderScoreboard() {
  const url = "https://api.krizovka.diecezko.cz/";
  const response = await fetch(url);
  const data = await response.json();

  let string = "";

  const score = data.keys.sort(
    (a, b) => parseInt(b.metadata.score) - parseInt(a.metadata.score)
  );

  console.log(score);

  score.map((e) => {
    string += `<li>${e.name} - ${e.metadata.score} b</li>`;
  });

  const boardEl = document.querySelector("#glory-list");
  boardEl.innerHTML = string;
}

renderScoreboard();