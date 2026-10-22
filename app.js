/*console.log("node.js is running inside WSL!");
function showAlert() {
    alert("success! you just interacted with your first website!");
}*/
console.log("Interactive script loaded successfully!");

const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
let colorIndex = 0;

function handleInteraction() {
    const messageDisplay = document.getElementById("message-box");
    messageDisplay.innerText = "🎉 You successfully changed the features dynamically!";
document.body.style.backgroundColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;
}