/** Read the games file into a variable that is an array of games */
async function readGames() {
  const req = await fetch("./games.json", { method: "GET" });
  const games = await req.json();
  return games;
}
/** Write the result to a new element */
function write(result) {
  const root = document.getElementById("games");
  root.innerText = result;
}

// Sophia Put Code Here
function renderGamesFirstLetter(games, firstLetter) {
  console.log(games);
  const output = document.getElementById("games");
  // create a table of games
  const tableOfGames = document.createElement("table");
  // loop over each game
  for (const game of games) {
    if (game.name[0] == firstLetter) {
      // create a row
      const row = document.createElement("tr");
      // create a name cell
      const nameCell = document.createElement("td");
      // set the inner text of the cell
      nameCell.innerText = game.name;
      // add the cell to the row
      row.appendChild(nameCell);
      // create a type cell
      const typeCell = document.createElement("td");
      typeCell.innerText = game.type;
      row.appendChild(typeCell);
      // create a platform cell
      const platformCell = document.createElement("td");
      platformCell.innerText = game.platform;
      row.appendChild(platformCell);
      // add the row to the table
      tableOfGames.appendChild(row);
    }
  }
  output.appendChild(tableOfGames);
}

function renderGames(games) {
  renderGamesFirstLetter(games, "A");
  renderGamesFirstLetter(games, "B");
  renderGamesFirstLetter(games, "C");
}

readGames().then(renderGames);
// const output = document.getElementById("games");

// let x = 0;
// x = x + 10;
// x = x + 6;
// let y = x + 10;
// let outputString = "";
// while (y > 0) {
//   outputString = outputString + y + ", "; // outputString="26, "
//   y = y - 1; // y = 22
// }
// let obj = [
//   {
//     name: "Sophia",
//     age: 22,
//   },
//   {
//     name: "Joe",
//     age: 400,
//   },
// ];
// // let arrayX = [1, 2, 3, 4, 5];
// // arrayX.push(6);
// // outputString = "";
// // for (let e of arrayX) {
// //   outputString = outputString + e * 2 + ", ";
// // }
// obj[0].name = "Not Sophia";
// obj[1].name = "Not Joe";
// write(JSON.stringify(obj));
