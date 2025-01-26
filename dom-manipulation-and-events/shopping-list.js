function createItem (inputName) {
    const element = document.createElement("li");
    const elementName = document.createElement("span");
    elementName.textContent = inputName;

    const elementButton = document.createElement("button");
    elementButton.textContent = "Delete";

    element.appendChild(elementName);
    element.appendChild(elementButton);

    elementButton.addEventListener("click", () => {
        element.remove()
    });

    return element
};


list = document.querySelector("ul");
addItemButton = document.querySelector("#addItem");
addItemInput = document.querySelector("#item");
deleteAllButton = document.querySelector("#deleteAll");

addItemButton.addEventListener("click", () => {
    const newItem = createItem(addItemInput.value);
    list.appendChild(newItem);
    addItemInput.value = "";
    addItemInput.focus();
});

deleteAllButton.addEventListener("click", () => {
    const listElements = document.querySelectorAll("li");
    listElements.forEach((element) => element.remove());
});