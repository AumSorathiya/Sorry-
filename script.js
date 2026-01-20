function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💜';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = '0.5';
    heart.style.animationName = 'bg-float'; // Defined in CSS
    document.getElementById('bg').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
