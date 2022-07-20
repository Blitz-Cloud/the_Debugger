// Utilities:
// runCmd,focus,typeIt
const $cmd = document.getElementById("cmd");
$cmd.innerText = $txtArea.value;
let poison = false;

document.getElementById("terminal").addEventListener("click", () => {
  focus($txtArea);
});

window.onload = (event) => {
  focus($txtArea);
  displayBox(
    "Hello there you seam to be new here,no? On the right you can find a terminal thats your main gate of communication here.",
    6000
  );
};

const typeIt = function (from, event) {
  const cmd = from.value.replace("\n", "");
  $cmd.innerText = cmd;
  runCmd(event, cmd);
};

const runCmd = function (event, cmd) {
  // KeyUp
  // KeyDown
  // Enter
  // Tab
  if (event.code == "Enter") {
    $cmd.innerText = "";
    $txtArea.value = "";
    switch (cmd) {
      case "help":
        loopLines(help, $history, cmd);
        break;
      case "clear":
        $history.innerHTML = "";
        $banner.innerHTML = "";
        break;
      case "greet":
        const name = prompt("Whats your name ?");
        const greet = `Hello I am the Debugging Duck your most loyal coding friend \n ${name},
                        I will help you in the hardest moments of your codding journey.😀Coding`;
        displayBox(greet);
        break;
      case "bugs":
        setTimeout(() => {
          window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
        }, 1000);
        break;
      case "inspiration":
        loopLines(inspiration, $history, cmd);
        break;
      case "secret":
        // Add a pasword field
        const input = document.createElement("input");
        const p = document.createElement("p");
        p.innerText = "Password:";
        p.classList = "inline text-[#22a2c9]";
        input.type = "password";
        input.classList = "input";
        $ps1.appendChild(p);
        $ps1.appendChild(input);
        input.onkeyup = (event) => {
          if (event.code == "Enter") {
            addLine(
              `<span>client@the_debugger:$</span><span class='text-[#1d4ed8]'>${cmd}</span>`,
              $history
            );
            if (input.value == password) {
              console.log("You hacked me");
              addLine(
                "<span class='text-[#1d4bd8]'>You set the beast free, be careful</span>",
                $history
              );
              poison = true;
            }
            p.innerHTML = "Wrong Password";
            $ps1.removeChild(input);
            setTimeout(() => {
              $ps1.removeChild(p);
              focus($txtArea);
            }, 1000);
          }
        };

        focus(input);
        // Identify
        break;
      case "joke":
        addLine(
          `<span>client@the_debugger:$</span>${cmd} \n <p>Fetching a random DadJoke</p>`,
          $history
        );
        getDadJoke();
        break;
      default:
        addLine(
          `<span>client@the_debugger:$</span>${cmd} \n <p>This it isnt a valid command</p>`,
          $history
        );
        break;
    }
  } else if (event.code == "ArrowUp") {
  } else if (event.code == "ArrowDown") {
  } else {
  }
};
