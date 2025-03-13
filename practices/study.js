const h1 = document.querySelector("div.Hello:first-child h1");

// console.dir(geth1)
// geth1.innerText = "got you!"
// console.log(geth1.className)
// console.log(geth1.id)

// function handleH1Click(){s
//     const currentColor = h1.style.color;
//     let newColor;
//     if (h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
//     h1.style.color = newColor;
// };

//toggle을 코드로 구현
// function handleTheClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass) = "";
//         } else {
//         h1.classList.add(clickedClass); 
//     }
// }

// h1.addEventListener("click", handleTheClick);
// "클릭" 되면 전달하고 싶은 function 전달

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

// function handleMouseEnter() {
//     h1.style.color = "red"
// };

// function handleMouseLeave() {
//     h1.style.color = "green"
// };

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// };

// function handleWindowCopy() {
//     alert("Copied!")
// }

// function handleWindowOnLine() {
//     alert("All good")
// }

// function handleWindowOffLine() {
//     alert("Bad connection")
// }

// h1.addEventListener("mouseenter", handleMouseEnter);

// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);

// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffLine)
// window.addEventListener("offline", handleWindowOnLine)