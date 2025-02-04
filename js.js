let loadingTextElement = document.getElementById('loading-text');
let dots = 0;

function updateLoadingText() {
    loadingTextElement.textContent = 'loading' + '.'.repeat(dots);
    dots = (dots +1) % 4; // 循环1到3
}

setInterval(updateLoadingText, 500); 