// Original Author: Paul D.
// get highscores
//maps.js line 370
export var addHighScore = async (name, score, game = 3) => {
  var response = await fetch("http://localhost:3000/highscores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, score, game }),
  });
  var data = await response.json();
  console.log(data);
  return data;
};
