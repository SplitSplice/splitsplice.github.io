
function init() {

document.getElementById("snowflakes").innerHTML = "";

for (var i = 0; i < (window.innerWidth / 32); i++) {
    var snowflakeContainer = document.createElement("div");
    document.getElementById("snowflakes").appendChild(snowflakeContainer);
    snowflakeContainer.className = "snowflake-container";

    var snowflake = document.createElement("div");
    snowflakeContainer.appendChild(snowflake);
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❅";
}

for (snowflake of document.getElementsByClassName("snowflake")) {
    snowflake.style.animation = "rotating " + (1.5 + Math.random() * 8) + "s linear infinite " + (Math.random() > 0.5 ? "reverse" : "");
}

for (snowflake of document.getElementsByClassName("snowflake-container")) {
    snowflake.style.animation = "fall 10s linear infinite, wind 10s cubic-bezier(0.65, 0, 0.35, 1) infinite";
    snowflake.style.animationDelay = (Math.random() * 10) + "s, " + (Math.random() * 2) + "s";
    snowflake.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
}

}

init();

window.addEventListener("resize", _ => {
    init();
});

document.getElementById("clicktoenter").addEventListener("click", _ => {
    document.getElementById("clicktoenter").style.display = "none";

    var card = document.getElementById("card");
    card.style.filter = "brightness(100%)";
    card.style.transform = "translate(0, 0)"
});