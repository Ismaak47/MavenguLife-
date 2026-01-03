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
        chakra: chakra,
        spiritAnimal: spiritAnimal,
        elementBalance: elementBalance
    };
}

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    } else {
        console.error(`CRITICAL ERROR: Element with ID '${id}' not found in DOM.`);
    }
}

function renderDashboard(profile) {
    // Update Name
    safeSetText('user-name-display', profile.name);

    // Update Core Panels
    safeSetText('life-path-number', profile.lifePath);
    safeSetText('life-path-desc', window.Numerology.getMeaning(profile.lifePath, 'lifePath'));

    safeSetText('destiny-number', profile.destiny);
    safeSetText('destiny-desc', window.Numerology.getMeaning(profile.destiny, 'destiny'));

    safeSetText('soul-urge-number', profile.soulUrge);
    safeSetText('soul-urge-desc', window.Numerology.getMeaning(profile.soulUrge, 'soulUrge'));

    // Update Soul Mission Panels
    safeSetText('soul-mission-text', profile.soulMission);
    safeSetText('shadow-work-text', profile.shadowWork);
    safeSetText('meditation-text', profile.meditation);
    safeSetText('sun-freq-text', profile.sunFreq);
    safeSetText('aesthetics-text', profile.aesthetics);
    safeSetText('oracle-text', `"${profile.oracle}"`);
    safeSetText('symbolic-wisdom-text', profile.symbolicWisdom);

    // Update Extended Panels
    safeSetText('current-cycle-text', profile.currentCycle);
    safeSetText('chakra-text', profile.chakra);
    safeSetText('spirit-animal-text', profile.spiritAnimal);
    safeSetText('element-balance-text', profile.elementBalance);

    // Detailed Analysis
    const analysisDiv = document.getElementById('detailed-analysis');
    if (analysisDiv) {
        analysisDiv.innerHTML = `
        <div>
            <div class="data-label">ELEMENTAL COMPOSITION</div>
            <div class="data-value" style="font-size: 1.5rem;">${profile.zodiac.element.toUpperCase()}</div>
        </div>
        <div>
            <div class="data-label">ZODIAC SIGNATURE</div>
            <div class="data-value" style="font-size: 1.5rem;">${profile.zodiac.icon} ${profile.zodiac.name.toUpperCase()}</div>
        </div>
        <div style="grid-column: span 2;">
            <div class="data-label">DIVINE PURPOSE</div>
            <p>${profile.soulMission}</p>
        </div>
        <div style="grid-column: span 2;">
            <div class="data-label">ORIGIN COORDINATES</div>
            <div class="data-value" style="font-size: 1.2rem;">${profile.birthPlace.toUpperCase()}</div>
        </div>
    `;
    } else {
        console.error("CRITICAL ERROR: 'detailed-analysis' div not found.");
    }
}

/* Particle Animation System */
function initParticles() {
    const canvas = document.getElementById('universe-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

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
