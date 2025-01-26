// your JavaScript file

// Pre-created content
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// New content (exercise)

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

const newDiv = document.createElement("div");
newDiv.style.cssText = "background-color: pink; border: 0.5rem solid black";

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";

const newP = document.createElement("p");
newP.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newP);

container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(newDiv);

// 2nd method for events
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

//3rd method for events
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World")
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function(e) {
//     // console.log(e.target);
//     e.target.style.background = "blue";
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
      // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});


