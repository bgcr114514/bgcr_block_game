var progressBar = document.getElementById("progressBar");
var width = 0;
var interval = setInterval(function () {
    if (width >= 100) {
        // 当进度条达到100%时清除定时器并跳转
        clearInterval(interval);
    
        window.location.href = "./main.html";
    } else {
        // 每次增加1%
        width++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width + "%";
    }
}, 50);