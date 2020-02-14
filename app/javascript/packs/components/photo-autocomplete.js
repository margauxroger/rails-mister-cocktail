const initShowPhoto = () => {

  const input = document.getElementById("cocktail_search");
  const results = document.getElementById("results");
  let suggRes = [];
  const image = document.getElementById("cocktail_image_url");
  console.log(image)


  if(input) {

    input.addEventListener("mouseleave", (event) => {
      const userInput = document.getElementById("cocktail_search").value;
      console.log(userInput)
      let i = 0
      while (i < 3) {
      const url = `https://source.unsplash.com/${1600+i}x900/?`;
      const modifiedInput = userInput.replace(" ", ",")
      const photo = `<img src="${url + modifiedInput }" class="cocktail-preview">`;
      results.insertAdjacentHTML("afterbegin", photo);
      i++
      }
      results.insertAdjacentHTML("beforebegin", "<p>Choose one of the following picture:</p>");

      click()
    }, {once: true});

    const click = () => {
    const previews = document.querySelectorAll(".cocktail-preview");
    console.log(previews)
      previews.forEach((suggestion) => {
        suggestion.addEventListener("click", (event) => {
          console.log("i am here");
          image.value = suggestion.src
          event.preventDefault();
        });
      });
}

  // const suggestions = (userInput) => {

    // const url = 'https://source.unsplash.com/1600x900/?';
    // const modifiedInput = userInput.replace(" ", ",")
    // const photo = `<img src="${url + modifiedInput }"`;
    // results.insertAdjacentHTML("afterbegin", photo);

  //   input.addEventListener("keyup", (event) => {
  //   // console.log("ok")
  //     console.log("Hello M")
  //     const userInput = document.getElementById("search").value;
  //     suggestions(userInput);
  //   });
  // };
  };
};


export { initShowPhoto };
