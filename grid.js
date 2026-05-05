  const grid = document.getElementById("grid");

  /* YOUR IMAGES */
  const items = [
    "images/coffee.png",
    "images/footballboots1.png",
    "images/glizzyy1.png",
    "images/benj1.png",
    "images/bigbike.1png.png",
    "images/soccerball1.png",
    "images/airforces1.png",
    "images/shorts1.png",
    "images/airpods (2).png",
    "images/redbull1.png",
    "images/trainticket1.png",

  ];

  /* PICK ONE RANDOM "CORRECT" ITEM */
  const correctItem = items[Math.floor(Math.random() * items.length)];

  /* SHUFFLE FUNCTION */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /* FILL GRID WITH 12 ITEMS */
  let fullList = [];
  while (fullList.length < 12) {
    fullList = fullList.concat(items);
  }
  fullList = fullList.slice(0, 12);

  /* RANDOMISE */
  shuffle(fullList);

  /* BUILD GRID */
  fullList.forEach((src, index) => {
    const isLight = index % 2 === 0;

    /* IF IT'S THE CORRECT ITEM → MAKE IT CLICKABLE */
    if (src === correctItem) {
      const link = document.createElement("a");
      link.href = "nextpage.html"; /* CHANGE THIS */
      link.className = "card " + (isLight ? "light" : "dark");

      const img = document.createElement("img");
      img.src = src;

      link.appendChild(img);
      grid.appendChild(link);
    } else {
      const card = document.createElement("div");
      card.className = "card " + (isLight ? "light" : "dark");

      const img = document.createElement("img");
      img.src = src;

      card.appendChild(img);
      grid.appendChild(card);
    }
  });