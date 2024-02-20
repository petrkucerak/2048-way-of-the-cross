const url = "https://2048-way-of-the-cross-proxy.petr7111.workers.dev/";

async function renderScoreboard() {
  const boardEl = document.querySelector("#glory-list");

  //   const response = await fetch(url);
  //   const data = await response.json();

  let string = "";

  const data = {
    list_complete: true,
    keys: [
      {
        name: "Francesco",
        metadata: {
          score: "24",
        },
      },
      {
        name: "Milan",
        metadata: {
          score: "12",
        },
      },
      {
        name: "Pedro",
        metadata: {
          score: "4",
        },
      },
    ],
    cacheStatus: null,
  };

  const score = data.keys.sort(
    (a, b) => parseInt(b.metadata.score) - parseInt(a.metadata.score)
  );

  console.log(score);

  score.map((e) => {
    string += `<li>${e.name} - ${e.metadata.score} b</li>`;
  });

  boardEl.innerHTML = string;
}

renderScoreboard();
