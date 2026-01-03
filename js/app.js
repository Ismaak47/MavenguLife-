/* Main Application Controller for MavenguLife */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initParticles();
});

function initApp() {
    const startBtn = document.getElementById('start-btn');
    const introSection = document.getElementById('intro-section');
    const inputSection = document.getElementById('input-section');
    const form = document.getElementById('cosmic-form');
    const dashboardSection = document.getElementById('dashboard-section');
    const loadingScreen = document.getElementById('loading-screen');

    // Navigation
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introSection.style.display = 'none';
            inputSection.style.display = 'block';
            inputSection.classList.add('animate-fade-in');
        });
    }

    // Form Submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('full-name').value;
            const birthDate = document.getElementById('birth-date').value;
            const birthPlace = document.getElementById('birth-place').value;

            if (!fullName || !birthDate) return;

            // Show Loading
            inputSection.style.display = 'none';
            loadingScreen.style.display = 'flex';

            // Simulate Calculation Time
            setTimeout(() => {
                try {
                    const profile = generateProfile(fullName, birthDate, birthPlace);
                    renderDashboard(profile);

                    loadingScreen.style.display = 'none';
                    dashboardSection.style.display = 'block';

                    // Initialize Chat with Profile
                    if (window.AIChat) {
                        window.AIChat.init(profile);
                    }
                } catch (error) {
                    console.error("Profile Generation Error:", error);
                    alert("Kuna tatizo la kiufundi: " + error.message);
                    loadingScreen.style.display = 'none';
                    inputSection.style.display = 'block';
                }
            }, 3000);
        });
    }

    // Chat Toggles
    const chatToggle = document.getElementById('chat-toggle-btn');
    const chatWidget = document.getElementById('chat-widget');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-msg-btn');
    const userInput = document.getElementById('user-input');

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWidget.classList.toggle('active');
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWidget.classList.remove('active');
        });
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            if (window.AIChat) window.AIChat.handleInput();
        });
    }

    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (window.AIChat) window.AIChat.handleInput();
            }
        });
    }
}

function generateProfile(fullName, birthDate, birthPlace) {
    const lifePath = window.Numerology.calculateLifePath(birthDate);
    const destiny = window.Numerology.calculateDestiny(fullName);
    const soulUrge = window.Numerology.calculateSoulUrge(fullName);
    const zodiac = window.Astrology.getZodiacSign(birthDate);

    // Soul Mission Data
    const soulMission = window.SoulMission.getSoulMission(lifePath);
    const shadowWork = window.SoulMission.getShadowWork(zodiac.name);
    const meditation = window.SoulMission.getMeditation(zodiac.element);
    const sunFreq = window.SoulMission.getSunFrequency(zodiac.name);
    const aesthetics = window.SoulMission.getAesthetics(zodiac.element);
    const oracle = window.SoulMission.getMysticOracle();
    const symbolicWisdom = window.SoulMission.getSymbolicWisdom(lifePath);

    // New Metrics
    const currentCycle = window.SoulMission.getCurrentCycle(birthDate);
    const chakra = window.SoulMission.getChakraDominance(zodiac.name);
    const spiritAnimal = window.SoulMission.getSpiritAnimal(lifePath);
    const elementBalance = `Dominant: ${zodiac.element}`;

    return {
        name: fullName,
        birthDate: birthDate,
        birthPlace: birthPlace || "Unknown Coordinates",
        lifePath: lifePath,
        destiny: destiny,
        soulUrge: soulUrge,
        zodiac: zodiac,
        soulMission: soulMission,
        shadowWork: shadowWork,
        meditation: meditation,
        sunFreq: sunFreq,
        aesthetics: aesthetics,
        oracle: oracle,
        symbolicWisdom: symbolicWisdom,
        currentCycle: currentCycle,
        const ctx = canvas.getContext('2d');

        let width, height;
        let particles =[];

        function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(0, 243, 255, ${Math.random() * 0.5})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    init();
    animate();
}
