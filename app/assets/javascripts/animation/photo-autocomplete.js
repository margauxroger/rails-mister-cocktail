const input = document.getElementById("search");
const results = document.getElementById("results");

const suggestions = (userInput) => {
  4.times do {
    const url = 'https://source.unsplash.com/1600x900/?';
    const modifiedInput = userInput.gsub(/\s/,",");
    const photo = `<img src="${url + modifiedInput }"`;
    results.insertAdjacentHTML("afterbegin", photo);
  }

//   fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${userInput}`)
//     .then(response => response.json())
//     .then((data) => {
//       // console.log(data.words);
//       // console.log(data.words.slice(0, 5));
//       results.innerHTML = "";
//       data.words.slice(0, 5).forEach((word) => {
//         const htm = `<li class="suggestion">${word}</li>`;
//         // console.log(htm);
//         results.insertAdjacentHTML("afterbegin", htm);
//       });
//       suggRes = Array.from(document.querySelectorAll(".suggestion"));
//       suggRes.forEach((suggestion) => {
//         suggestion.addEventListener("click", (event) => {
//           input.value = suggestion.innerText;
//         });
//       });
//     });
// };


input.addEventListener("keyup", (event) => {
  console.log("Hello M")
  const userInput = document.getElementById("search").value;
  suggestions(userInput);
});
