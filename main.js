document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    let boiteACouleur = document.getElementById('color-box'),
    btnChangeCouleur = document.getElementById('change-color-btn');

    btnChangeCouleur.addEventListener('click', function(){
        let colors = [];

        for (let i = 0; i < 10; i++) {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);

      boiteACouleur.style.background = randomColor; 
    }
     
    })
    
})