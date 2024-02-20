async function sendScore() {
  const nickname = document.querySelector("#nickname").value;
  const secret = document.querySelector("#secret").value;
  // const game = JSON.parse(localStorage.getItem("gameState"));
  const score = parseInt(
    document.querySelector(".score-container").textContent
  );

  console.log(nickname, secret, score);
  const data = {
    nickname: nickname,
    score: score,
    secret: secret,
  };
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.krizovka.diecezko.cz/",
    requestOptions
  );
  const message = await response.text();
  // console.log(message);
  const messageEl = document.querySelector("#status");
  messageEl.innerHTML = message;
}

function displayGloryBox() {
  const gloryBox = document.querySelector("#share-score");
  gloryBox.innerHTML = `<div class="content">
  <h2>Zapsat se do síně slávy</h2>
  <p>
    Pokud se rozhodneš vytesat své jméno do síně slávy, máš šanci na
    diecézku vyhrát speciální dárek.
  </p>
  <p>
    <strong>Přezdívka</strong> - spolu s ní bude do Síně slávy vytesáno
    maximální skóre.
  </p>
  <p>
    <strong>Tajné slovo</strong> - pokud tvoříš svoji přezdívku poprvé,
    dobře si ho zapamatuj. Pro aktualizaci budeš muset vepsat stejné
    slovo.
  </p>
  <input
    id="nickname"
    class="input"
    name="nickname"
    placeholder="Tvoje přezdívka"
    type="text"
  />
  <input
    id="secret"
    name="secret"
    class="input"
    placeholder="Tajné slovo"
    type="text"
  />
  <p id="status"></p>
  <div class="buttons">
    <button class="submit" onclick="sendScore()">Odeslat</button
    ><button onclick="closeGloryBox()" class="submit">Zavřít</button>
  </div>
</div>`;
  gloryBox.classList.remove("hidden");
}

function closeGloryBox() {
  const gloryBox = document.querySelector("#share-score");
  gloryBox.innerHTML = "";
  gloryBox.classList.add("hidden");
}
