async function renderScoreboard() {
  const url = "https://api.krizovka.diecezko.cz/";
  const response = await fetch(url);
  const data = await response.json();

  // const data = {
  //   list_complete: true,
  //   keys: [
  //     {
  //       name: "Aďuška",
  //       metadata: {
  //         score: 226824,
  //       },
  //     },
  //     {
  //       name: "Brambora",
  //       metadata: {
  //         score: 36428,
  //       },
  //     },
  //     {
  //       name: "Džitka",
  //       metadata: {
  //         score: 31320,
  //       },
  //     },
  //     {
  //       name: "Julča",
  //       metadata: {
  //         score: 36508,
  //       },
  //     },
  //     {
  //       name: "Kajkaj",
  //       metadata: {
  //         score: 27952,
  //       },
  //     },
  //     {
  //       name: "Mesi",
  //       metadata: {
  //         score: 391668,
  //       },
  //     },
  //     {
  //       name: "Pan prof.",
  //       metadata: {
  //         score: 37324,
  //       },
  //     },
  //     {
  //       name: "Pedro",
  //       metadata: {
  //         score: 32040,
  //       },
  //     },
  //     {
  //       name: "Verča",
  //       metadata: {
  //         score: 58504,
  //       },
  //     },
  //     {
  //       name: "Vévodkyně ",
  //       metadata: {
  //         score: 162688,
  //       },
  //     },
  //   ],
  //   cacheStatus: null,
  // };

  let string = "";

  let score = data.keys.sort(
    (a, b) => parseInt(b.metadata.score) - parseInt(a.metadata.score)
  );

  score[0].class = "first";
  score[1].class = "top";
  score[2].class = "top";

  console.log(score);

  score.map((e) => {
    string += `<li class="${e.class !== undefined ? e.class : ""}" >${
      e.name
    } - ${e.metadata.score}&nbsp;b</li>`;
  });

  const boardEl = document.querySelector("#glory-list");
  boardEl.innerHTML = string;
}

renderScoreboard();
