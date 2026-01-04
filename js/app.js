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
                const profile = generateProfile(fullName, birthDate, birthPlace);
                renderDashboard(profile);

                loadingScreen.style.display = 'none';
                dashboardSection.style.display = 'block';

                // Initialize Chat with Profile
                if (window.AIChat) {
                    window.AIChat.init(profile);
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
    const personalYear = window.Numerology.calculatePersonalYear(birthDate);
    const birthDayNumber = window.Numerology.calculateBirthDayNumber(birthDate);

    // New Cosmic Data
    const rulingPlanet = window.Astrology.getRulingPlanet(zodiac.name);
    const moonPhase = window.Astrology.getMoonPhase(birthDate);
    const birthStone = window.Astrology.getBirthStone(birthDate);
    const spiritAnimal = window.Astrology.getSpiritAnimal(zodiac.name);
    const balanceNumber = window.Numerology.calculateBalanceNumber(fullName);
    const passionNumber = window.Numerology.calculateHiddenPassion(fullName);

    // New Advanced Metaphysics Data
    const karmicDebt = window.Numerology.calculateKarmicDebt(birthDate);
    const firstChallenge = window.Numerology.calculateFirstChallenge(birthDate);
    const luckyColor = window.Astrology.getLuckyColor(zodiac.name);
    const luckyDay = window.Astrology.getLuckyDay(zodiac.name);
    const tarotCard = window.Astrology.getTarotCard(zodiac.name);
    const chakra = window.Astrology.getChakra(zodiac.name);
    const chineseZodiac = window.Astrology.getChineseZodiac(birthDate);
    const pinnacle = window.Numerology.calculatePinnacles(birthDate).p1;

    // New Esoteric Insights Data
    const auraColor = window.Astrology.getAuraColor(zodiac.name);
    const lifeLesson = window.Astrology.getLifeLesson(zodiac.name);
    const maturityNumber = window.Numerology.calculateMaturityNumber(lifePath, destiny);
    const rationalThought = window.Numerology.calculateRationalThought(fullName, birthDate);
    const attitudeNumber = window.Numerology.calculateAttitudeNumber(birthDate);
    const northNode = window.Astrology.getNorthNode(zodiac.name);
    const guardianAngel = window.Astrology.getGuardianAngel(zodiac.name);
    const soulAge = window.Astrology.getSoulAge(birthDate);

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
        personalYear: personalYear,
        birthDayNumber: birthDayNumber,
        rulingPlanet: rulingPlanet,
        moonPhase: moonPhase,
        birthStone: birthStone,
        spiritAnimal: spiritAnimal,
        balanceNumber: balanceNumber,
        passionNumber: passionNumber,
        karmicDebt: karmicDebt,
        firstChallenge: firstChallenge,
        luckyColor: luckyColor,
        luckyDay: luckyDay,
        tarotCard: tarotCard,
        chakra: chakra,
        chineseZodiac: chineseZodiac,
        pinnacle: pinnacle,
        auraColor: auraColor,
        lifeLesson: lifeLesson,
        maturityNumber: maturityNumber,
        rationalThought: rationalThought,
        attitudeNumber: attitudeNumber,
        northNode: northNode,
        guardianAngel: guardianAngel,
        soulAge: soulAge
    };
}

function renderDashboard(profile) {
    // Update Name
    document.getElementById('user-name-display').textContent = profile.name;

    // Update Core Panels
    document.getElementById('life-path-number').textContent = profile.lifePath;
    document.getElementById('life-path-desc').textContent = window.Numerology.getMeaning(profile.lifePath, 'lifePath');

    document.getElementById('destiny-number').textContent = profile.destiny;
    document.getElementById('destiny-desc').textContent = window.Numerology.getMeaning(profile.destiny, 'destiny');

    document.getElementById('soul-urge-number').textContent = profile.soulUrge;
    document.getElementById('soul-urge-desc').textContent = window.Numerology.getMeaning(profile.soulUrge, 'soulUrge');

    // Update Secondary Panels
    document.getElementById('personal-year-number').textContent = profile.personalYear;
    document.getElementById('personal-year-desc').textContent = "Mzunguko wa " + profile.personalYear;

    document.getElementById('birth-day-number').textContent = profile.birthDayNumber;
    document.getElementById('birth-day-desc').textContent = "Kipaji cha Asili";

    document.getElementById('element-text').textContent = profile.zodiac.element.toUpperCase();

    // Update Element Icon
    const elIcon = document.getElementById('element-icon');
    const el = profile.zodiac.element.toLowerCase();
    elIcon.className = 'fas'; // Reset
    if (el.includes('moto') || el.includes('fire')) elIcon.classList.add('fa-fire');
    else if (el.includes('maji') || el.includes('water')) elIcon.classList.add('fa-water');
    else if (el.includes('ardhi') || el.includes('earth')) elIcon.classList.add('fa-leaf');
    else elIcon.classList.add('fa-wind'); // Default Air

    // Update Soul Mission Panels
    document.getElementById('soul-mission-text').textContent = profile.soulMission;
    document.getElementById('shadow-work-text').textContent = profile.shadowWork;
    document.getElementById('meditation-text').textContent = profile.meditation;
    document.getElementById('sun-freq-text').textContent = profile.sunFreq;
    document.getElementById('aesthetics-text').textContent = profile.aesthetics;
    document.getElementById('oracle-text').textContent = `"${profile.oracle}"`;
    document.getElementById('symbolic-wisdom-text').textContent = profile.symbolicWisdom;

    // Update Cosmic Alignment Grid
    document.getElementById('planet-name').textContent = profile.rulingPlanet.name.toUpperCase();
    document.getElementById('planet-icon').textContent = profile.rulingPlanet.icon;
    document.getElementById('planet-desc').textContent = profile.rulingPlanet.desc;

    document.getElementById('moon-phase').textContent = profile.moonPhase.name.toUpperCase();
    document.getElementById('moon-icon').textContent = profile.moonPhase.icon;
    document.getElementById('moon-desc').textContent = profile.moonPhase.desc;

    document.getElementById('birth-stone').textContent = profile.birthStone.name.toUpperCase();
    // document.getElementById('stone-icon').style.color = profile.birthStone.color; // Optional styling
    document.getElementById('stone-desc').textContent = profile.birthStone.desc;

    document.getElementById('spirit-animal').textContent = profile.spiritAnimal.split(' ')[0].toUpperCase();

    document.getElementById('balance-number').textContent = profile.balanceNumber;
    document.getElementById('passion-number').textContent = profile.passionNumber;

    // Update Advanced Metaphysics Grid
    document.getElementById('karmic-debt').textContent = profile.karmicDebt || "0";
    document.getElementById('first-challenge').textContent = profile.firstChallenge;
    document.getElementById('lucky-color').textContent = profile.luckyColor.toUpperCase();
    document.getElementById('lucky-day').textContent = profile.luckyDay.toUpperCase();
    document.getElementById('tarot-card').textContent = profile.tarotCard.toUpperCase();
    document.getElementById('chakra-ruler').textContent = profile.chakra.toUpperCase();
    document.getElementById('chinese-zodiac').textContent = profile.chineseZodiac.toUpperCase();
    document.getElementById('pinnacle-cycle').textContent = profile.pinnacle;

    // Update Esoteric Insights Grid
    document.getElementById('aura-color').textContent = profile.auraColor.toUpperCase();
    document.getElementById('life-lesson').textContent = profile.lifeLesson.toUpperCase();
    document.getElementById('maturity-number').textContent = profile.maturityNumber;
    document.getElementById('rational-thought').textContent = profile.rationalThought;
    document.getElementById('attitude-number').textContent = profile.attitudeNumber;
    document.getElementById('north-node').textContent = profile.northNode.toUpperCase();
    document.getElementById('guardian-angel').textContent = profile.guardianAngel.toUpperCase();
    document.getElementById('soul-age').textContent = profile.soulAge.toUpperCase();

    // Detailed Analysis
    const analysisDiv = document.getElementById('detailed-analysis');
    analysisDiv.innerHTML = `
        <div>
            <div class="data-label">ELEMENTAL COMPOSITION</div>
            <div class="data-value" style="font-size: 1.5rem;">${profile.zodiac.element.toUpperCase()}</div>
        </div>
        <div>
            <div class="data-label">ZODIAC SIGNATURE</div>
            <div style="color: var(--text-color);">${profile.zodiac.icon} ${profile.zodiac.name.toUpperCase()}</div>
        </div>
        <div class="full-width">
            <div class="data-label">DIVINE PURPOSE</div>
            <div style="color: var(--text-color);">${profile.soulMission}</div>
        </div>
        <div class="full-width" style="border-top: 1px solid var(--primary-color); padding-top: 1rem;">
            <div class="data-label">ORIGIN COORDINATES</div>
            <div style="color: var(--success-color); font-family: var(--font-display);">${profile.birthPlace.toUpperCase()}</div>
        </div>
    `;

    // Setup Modal Triggers
    setupModalTrigger('life-path-number', `LIFE PATH ${profile.lifePath}`, `Nielezee kwa kina kuhusu Life Path ${profile.lifePath}. Nini maana yake, nguvu zake, changamoto zake, na kusudi lake?`, profile);
    setupModalTrigger('destiny-number', `DESTINY NUMBER ${profile.destiny}`, `Nielezee kwa kina kuhusu Destiny Number ${profile.destiny}. Inasema nini kuhusu hatima yangu na vipaji vyangu?`, profile);
    setupModalTrigger('soul-urge-number', `SOUL URGE ${profile.soulUrge}`, `Nielezee kwa kina kuhusu Soul Urge ${profile.soulUrge}. Moyo wangu unatamani nini hasa?`, profile);

    setupModalTrigger('personal-year-number', `PERSONAL YEAR ${profile.personalYear}`, `Nielezee kwa kina kuhusu Personal Year ${profile.personalYear}. Mwaka huu una nishati gani kwangu na nifanye nini?`, profile);
    setupModalTrigger('birth-day-number', `BIRTH DAY ${profile.birthDayNumber}`, `Nielezee kwa kina kuhusu Birth Day Number ${profile.birthDayNumber}. Hii inaashiria kipaji gani maalum nilichozaliwa nacho?`, profile);
    setupModalTrigger('element-text', `ELEMENT: ${profile.zodiac.element.toUpperCase()}`, `Nielezee kwa kina kuhusu Element ya ${profile.zodiac.element}. Hii inaathiri vipi tabia yangu na nishati yangu?`, profile);

    setupModalTrigger('soul-mission-text', 'SOUL MISSION', `Nielezee kwa kina kuhusu Soul Mission yangu: "${profile.soulMission}". Hii inamaanisha nini katika maisha yangu ya kila siku?`, profile);
    setupModalTrigger('shadow-work-text', 'SHADOW WORK', `Nielezee kwa kina kuhusu Shadow Work yangu: "${profile.shadowWork}". Hii ni sehemu gani ya nafsi yangu iliyojificha na nifanyeje kazi nayo?`, profile);
    setupModalTrigger('symbolic-wisdom-text', 'SYMBOLIC WISDOM', `Nielezee kwa kina hekima hii ya kiishara: "${profile.symbolicWisdom}". Ina ujumbe gani wa ndani kwangu?`, profile);

    // New Triggers
    setupModalTrigger('planet-name', `RULING PLANET: ${profile.rulingPlanet.name}`, `Nielezee kuhusu sayari yangu kiongozi ${profile.rulingPlanet.name}. Inaathiri vipi maisha yangu?`, profile);
    setupModalTrigger('moon-phase', `MOON PHASE: ${profile.moonPhase.name}`, `Nilizaliwa wakati wa ${profile.moonPhase.name}. Hii ina maana gani kwangu kiroho?`, profile);
    setupModalTrigger('birth-stone', `BIRTH STONE: ${profile.birthStone.name}`, `Jiwe langu la asili ni ${profile.birthStone.name}. Lina nguvu gani za uponyaji kwangu?`, profile);
    setupModalTrigger('spirit-animal', `SPIRIT ANIMAL: ${profile.spiritAnimal}`, `Mnyama wangu wa roho ni ${profile.spiritAnimal}. Ninaweza kujifunza nini kutoka kwake?`, profile);
    setupModalTrigger('balance-number', `BALANCE NUMBER: ${profile.balanceNumber}`, `Namba yangu ya usawa ni ${profile.balanceNumber}. Inanisaidiaje wakati wa changamoto?`, profile);
    setupModalTrigger('passion-number', `HIDDEN PASSION: ${profile.passionNumber}`, `Shauku yangu ya ndani ni namba ${profile.passionNumber}. Hii inaonyesha nini kuhusu vipaji vyangu?`, profile);

    // Advanced Metaphysics Triggers
    setupModalTrigger('karmic-debt', `KARMIC DEBT: ${profile.karmicDebt}`, `Nina deni la karma namba ${profile.karmicDebt}. Hii inamaanisha nini kuhusu maisha yangu ya zamani na changamoto za sasa?`, profile);
    setupModalTrigger('first-challenge', `FIRST CHALLENGE: ${profile.firstChallenge}`, `Changamoto yangu ya kwanza ni namba ${profile.firstChallenge}. Hii inanifundisha nini katika kipindi hiki cha maisha?`, profile);
    setupModalTrigger('lucky-color', `LUCKY COLOR: ${profile.luckyColor}`, `Rangi yangu ya bahati ni ${profile.luckyColor}. Nitumieje rangi hii kuongeza nishati yangu?`, profile);
    setupModalTrigger('lucky-day', `LUCKY DAY: ${profile.luckyDay}`, `Siku yangu ya bahati ni ${profile.luckyDay}. Ni mambo gani mazuri ya kufanya siku hii?`, profile);
    setupModalTrigger('tarot-card', `TAROT ARCHETYPE: ${profile.tarotCard}`, `Kadi yangu ya Tarot ni ${profile.tarotCard}. Hii inaashiria nini kuhusu safari yangu ya roho?`, profile);
    setupModalTrigger('chakra-ruler', `CHAKRA RULER: ${profile.chakra}`, `Chakra yangu kiongozi ni ${profile.chakra}. Nifanye nini kuiweka sawa na kuitumia vizuri?`, profile);
    setupModalTrigger('chinese-zodiac', `CHINESE ZODIAC: ${profile.chineseZodiac}`, `Nyota yangu ya Kichina ni ${profile.chineseZodiac}. Hii inaongeza nini kwenye tabia yangu?`, profile);
    setupModalTrigger('pinnacle-cycle', `PINNACLE CYCLE: ${profile.pinnacle}`, `Mzunguko wangu wa kilele ni namba ${profile.pinnacle}. Hii inaashiria mafanikio gani yanayokuja?`, profile);

    // Esoteric Insights Triggers
    setupModalTrigger('aura-color', `AURA COLOR: ${profile.auraColor}`, `Rangi yangu ya aura ni ${profile.auraColor}. Hii inasema nini kuhusu nishati yangu ya sasa?`, profile);
    setupModalTrigger('life-lesson', `LIFE LESSON: ${profile.lifeLesson}`, `Somo langu la maisha ni ${profile.lifeLesson}. Nifanye nini ili kufanikiwa katika somo hili?`, profile);
    setupModalTrigger('maturity-number', `MATURITY NUMBER: ${profile.maturityNumber}`, `Namba yangu ya ukomavu ni ${profile.maturityNumber}. Hii itakuwa na athari gani katika maisha yangu ya baadae?`, profile);
    setupModalTrigger('rational-thought', `RATIONAL THOUGHT: ${profile.rationalThought}`, `Namba yangu ya fikra za kimantiki ni ${profile.rationalThought}. Hii inaonyesha nini kuhusu jinsi ninavyofanya maamuzi?`, profile);
    setupModalTrigger('attitude-number', `ATTITUDE NUMBER: ${profile.attitudeNumber}`, `Namba yangu ya mtazamo ni ${profile.attitudeNumber}. Hii inaathiri vipi jinsi watu wanavyoniona mara ya kwanza?`, profile);
    setupModalTrigger('north-node', `NORTH NODE: ${profile.northNode}`, `North Node yangu ipo ${profile.northNode}. Hii inaashiria nini kuhusu mwelekeo wa roho yangu?`, profile);
    setupModalTrigger('guardian-angel', `GUARDIAN ANGEL: ${profile.guardianAngel}`, `Malaika wangu mlinzi ni ${profile.guardianAngel}. Ninaweza kuwasiliana naye vipi kwa ajili ya mwongozo?`, profile);
    setupModalTrigger('soul-age', `SOUL AGE: ${profile.soulAge}`, `Umri wa roho yangu ni ${profile.soulAge}. Hii inaashiria nini kuhusu uzoefu wangu wa kiulimwengu?`, profile);
}

// Modal Logic
function setupModalTrigger(elementId, title, prompt, profile) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Mavengu Debug: Element not found - ${elementId}`);
        return;
    }

    // Find parent tech-panel
    const panel = element.closest('.tech-panel');
    if (panel) {
        console.log(`Mavengu Debug: Attaching listener to ${elementId}`);
        panel.style.cursor = 'pointer';
        panel.onclick = (e) => {
            console.log(`Mavengu Debug: Clicked ${title}`);
            openDeepDiveModal(title, prompt, profile);
        };
    } else {
        console.warn(`Mavengu Debug: Parent panel not found for ${elementId}`);
    }
}

async function openDeepDiveModal(title, prompt, profile) {
    console.log(`Mavengu Debug: Opening modal for ${title}`);
    const modal = document.getElementById('info-modal');
    if (!modal) {
        console.error("Mavengu Debug: Modal element #info-modal not found!");
        return;
    }
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal');

    modalTitle.textContent = title;
    modal.style.display = 'flex';

    // Loading State
    modalBody.innerHTML = `
        <div class="scanner-line"></div>
        <p style="text-align: center; margin-top: 2rem;">INACHAMBUA TAARIFA ZA KINA KUTOKA KWENYE REKODI ZA AKASHIC...</p>
        <p style="text-align: center; color: var(--accent-color); font-size: 0.8rem;">[ CONNECTING TO MAVENGU CORE ]</p>
    `;

    // Close Logic
    const closeModal = () => {
        modal.style.display = 'none';
    };
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    // Display a static message as the AI service is unavailable
    setTimeout(() => {
        modalBody.innerHTML = `
            <h3>Uchambuzi wa Kina</h3>
            <p>Samahani, uchambuzi wa kina kwa sasa haupatikani. Timu yetu inafanyia kazi suala hili.</p>
            <p>Tafadhali angalia tena baadae.</p>
        `;
    }, 1500);
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
