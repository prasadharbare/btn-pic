const btnEl = document.querySelector("button");
const mainEl = document.querySelector("main");
const URL =
  "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function handleClick() {
    //generate new image tag
    const imgEl = document.createElement("img");
    //set src of that image tag url
    imgEl.src = URL;
    imgEl.setAttribute("alt", 'random image');
    // CONSOLE LOG IMAGE
    console.log(imgEl);
    mainEl.appendChild(imgEl);
}

btnEl.addEventListener("click", handleClick);