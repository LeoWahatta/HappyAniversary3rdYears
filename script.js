// Fungsi untuk mengupdate salam berdasarkan waktu
function updateTimeBasedGreeting() {
    const greetingElement = document.getElementById('time-based-greeting');
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 11) {
        greetingElement.textContent = 'SELAMAT PAGI SAYANG RANTI';
    } else if (hour >= 11 && hour < 15) {
        greetingElement.textContent = 'SELAMAT SIANG SAYANG RANTI';
    } else if (hour >= 15 && hour < 18) {
        greetingElement.textContent = 'SELAMAT SORE SAYANG RANTI';
    } else {
        greetingElement.textContent = 'SELAMAT MALAM SAYANG RANTI';
    }
}

// Fungsi untuk menambahkan efek kedip pada teks
function blinkText() {
    const elements = document.querySelectorAll('.blink');
    elements.forEach(element => {
        element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
    });
}

// Fungsi untuk menambahkan efek rotasi pada teks
function rotateText() {
    const elements = document.querySelectorAll('.message-highlight, .message-highlight-red');
    elements.forEach(element => {
        const currentRotation = parseFloat(element.style.transform?.match(/-?\d+/)?.[0] || 0);
        const newRotation = currentRotation >= 5 ? -5 : currentRotation + 1;
        element.style.transform = `rotate(${newRotation}deg)`;
    });
}

// Fungsi untuk menambahkan efek perubahan warna pada teks
function changeColors() {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    const elements = document.querySelectorAll('.fancy-text, .footer-text');
    
    elements.forEach(element => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor;
    });
}

// Fungsi untuk menambahkan efek gemerlap
function addSparkles() {
    const container = document.querySelector('.container');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.position = 'absolute';
    sparkle.style.width = '5px';
    sparkle.style.height = '5px';
    sparkle.style.backgroundColor = '#ffffff';
    sparkle.style.borderRadius = '50%';
    sparkle.style.opacity = '0.7';
    
    // Posisi acak
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    container.appendChild(sparkle);
    
    // Hapus sparkle setelah animasi
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Fungsi untuk menambahkan counter pengunjung palsu
function updateVisitorCount() {
    const visitorCount = document.getElementById('visitor-count');
    let count = parseInt(visitorCount.textContent);
    count += Math.floor(Math.random() * 3) + 1;
    visitorCount.textContent = count;
}

// Fungsi untuk menambahkan pesan selamat datang
function showWelcomeMessage() {
    alert('ASSALAMUALAIKUM WARAHMATULLAHI WABARAKAATUH\n\nSELAMAT DATANG DI WEBSITE SAYA!\n\nSEMOGA HARI KAMU MENYENANGKAN!');
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Update salam berdasarkan waktu
    updateTimeBasedGreeting();
    
    // Periksa dan update salam setiap menit
    setInterval(updateTimeBasedGreeting, 60000);
    
    // Tampilkan pesan selamat datang
    setTimeout(showWelcomeMessage, 1000);
    
    // Jalankan fungsi secara berkala
    setInterval(blinkText, 500);
    setInterval(rotateText, 1000);
    setInterval(changeColors, 2000);
    setInterval(addSparkles, 300);
    setInterval(updateVisitorCount, 5000);
    
    // Tambahkan efek klik
    document.addEventListener('click', function(event) {
        const clickEffect = document.createElement('div');
        clickEffect.className = 'click-effect';
        clickEffect.style.position = 'absolute';
        clickEffect.style.width = '50px';
        clickEffect.style.height = '50px';
        clickEffect.style.borderRadius = '50%';
        clickEffect.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
        clickEffect.style.left = (event.pageX - 25) + 'px';
        clickEffect.style.top = (event.pageY - 25) + 'px';
        clickEffect.style.animation = 'expand 0.5s forwards';
        
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            clickEffect.remove();
        }, 500);
    });
});

// Tambahkan style untuk efek klik
const style = document.createElement('style');
style.textContent = `
    @keyframes expand {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .sparkle {
        animation: twinkle 1s forwards;
    }
    
    @keyframes twinkle {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1);
            opacity: 0.7;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);