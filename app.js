var button = document.querySelector('button');
button.textContent = "Night"
var myColor = 'white';
// document.body.button.style.backgroundColor="black"

button.addEventListener('click', () => {
    if (myColor === "white"){
        document.body.style.backgroundColor="black";
        myColor = "black"
        button.style.backgroundColor="white";
        button.style.color="black"
        button.textContent = "Day"
        
    }else{
        document.body.style.backgroundColor="white";
        myColor = "white"
        button.style.backgroundColor="black";
        button.style.color="white"
        button.textContent = "Night"
    }
})

// function themeChanger(){
    // if(document.body.style.backgroundColor === "white"){
    //     document.body.style.backgroundColor="black";
    // }
    // button = document.body.style.backgroundColor="black";
    // if(document.body.style.backgroundColor === "black"){
    //     document.body.style.backgroundColor = "white";
    // }
// }