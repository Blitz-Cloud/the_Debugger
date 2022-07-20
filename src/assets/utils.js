const $txtArea = document.querySelector("textarea");
const $history = document.getElementById("history");
const $messageBox = document.querySelector("#messageBox");
const $banner = document.getElementById("banner");
const $ps1 = document.getElementById("ps1");
let angerLevel = 0;

const focus = function (element) {
  element.focus();
  // console.log("I am focused");
};

const addLine = function (element, location, remove = false, timeout = 12000) {
  const p = document.createElement("p");
  p.innerHTML = `${element}`;
  location.appendChild(p);
  if (remove) {
    setTimeout(() => {
      location.removeChild(p);
    }, timeout);
  }
};

const loopLines = function (array, location, cmd) {
  addLine(
    `<span>client@the_debugger:$</span><span class='text-[#1d4ed8]'>${cmd}</span>`,
    $history
  );
  array.forEach((element) => {
    addLine(element, location);
  });
};

const displayBox = async function (msg, timeout = 12000) {
  $messageBox.style.display = "block";
  addLine(msg, $messageBox, true, timeout);
  setTimeout(() => {
    $messageBox.style.display = "none";
  }, timeout);
};

const getDadJoke = async function () {
  const data = await axios.get("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const joke = data.data.joke;
  displayBox(joke, 12000);
};

const dontTuchMe = function () {
  if (poison) {
    angerLevel += 1;
    displayBox("Dont touch me i can be very dangerous", 1000);
    if (angerLevel == 10) {
      setInterval(() => {
        window.open("https://google.com", "_blank");
      }, 500);
      setTimeout(() => {
        window.location.replace("https://github.com/Blitz-Cloud");
      }, 5000);
    }
  }
};
