/* Universal Card Diagnosis Module */

const UniversalCards = {
    majorArcana: [
        { id: 0, name: "MPUMBAVU (The Fool)", meaning: "Mwanzo mpya, ujasiri wa kijinga, na uwezekano usio na mipaka.", power: "Uhuru wa roho", warning: "Kutokuwa na tahadhari" },
        { id: 1, name: "MCHAWI (The Magician)", meaning: "Uwezo wa kubadilisha nia kuwa uhalisia.", power: "Uumbaji na Ushawishi", warning: "Udanganyifu wa nguvu" },
        { id: 2, name: "KUHANI MKUU (High Priestess)", meaning: "Siri za ndani, intuition, na hekima ya kimya.", power: "Ufahamu wa ghafla", warning: "Kujitenga na uhalisia" },
        { id: 3, name: "MALKIA (The Empress)", meaning: "Utoaji, asili, na ukuaji wa vitu.", power: "Rutuba na Ulezi", warning: "Kupenda kupita kiasi" },
        { id: 4, name: "MFALME (The Emperor)", meaning: "Mamlaka, muundo, na uthabiti.", power: "Uongozi na Sheria", warning: "Utawala wa mabavu" },
        { id: 5, name: "MWALIMU (The Hierophant)", meaning: "Imani, mapokeo, na elimu ya roho.", power: "Mwongozo wa Kiroho", warning: "Imani potofu" },
        { id: 6, name: "WAPENDANAO (The Lovers)", meaning: "Chaguo, umoja, na maelewano ya nafsi.", power: "Muunganiko wa Kweli", warning: "Kupoteza mwelekeo kwa ajili ya mwingine" },
        { id: 7, name: "GARI LA VITA (The Chariot)", meaning: "Ushindi kupitia nia thabiti na udhibiti.", power: "Kusonga Mbele", warning: "Kiburi cha ushindi" },
        { id: 8, name: "NGUVU (Strength)", meaning: "Ujasiri wa ndani na udhibiti wa hisia.", power: "Uvumilivu", warning: "Kutumia nguvu vibaya" },
        { id: 9, name: "MTAWA (The Hermit)", meaning: "Kutafuta ukweli ndani, upweke wa makusudi.", power: "Hekima ya Ndani", warning: "Kujitenga na jamii" },
        { id: 10, name: "GURUDUMU (Wheel of Fortune)", meaning: "Mabadiliko ya hatima, mizunguko ya maisha.", power: "Bahati na Fursa", warning: "Kutokubali mabadiliko" },
        { id: 11, name: "HAKI (Justice)", meaning: "Usawa, ukweli, na matokeo ya matendo (Karma).", power: "Uadilifu", warning: "Hukumu isiyo ya haki" },
        { id: 12, name: "MTU ALIYETUNDIKWA (Hanged Man)", meaning: "Kujitoa, mtazamo mpya, na kusubiri.", power: "Kujisalimisha", warning: "Kukwama kwa muda mrefu" },
        { id: 13, name: "KIFO (Death)", meaning: "Mwisho wa mzunguko, mabadiliko makubwa.", power: "Kuzaliwa Upya", warning: "Hofu ya mabadiliko" },
        { id: 14, name: "KIASI (Temperance)", meaning: "Usawa, uponyaji, na kuchanganya nishati.", power: "Harmony", warning: "Kukosa msimamo" },
        { id: 15, name: "SHETANI (The Devil)", meaning: "Vifungo vya kimaada, uraibu, na kivuli.", power: "Nguvu ya Tamaa", warning: "Utumwa wa hisia" },
        { id: 16, name: "MNARA (The Tower)", meaning: "Kuanguka kwa miundo ya uongo, ufunuo wa ghafla.", power: "Ukombozi wa Ghafla", warning: "Maumivu ya kupoteza" },
        { id: 17, name: "NYOTA (The Star)", meaning: "Matumaini, uponyaji, na mwongozo wa kiroho.", power: "Imani Thabiti", warning: "Ndoto zisizo na vitendo" },
        { id: 18, name: "MWEZI (The Moon)", meaning: "Udanganyifu, hofu, na ulimwengu wa ndoto.", power: "Intuition ya Giza", warning: "Kuchanganyikiwa" },
        { id: 19, name: "JUA (The Sun)", meaning: "Furaha, uwazi, na mafanikio.", power: "Nuru na Uhai", warning: "Kujiamini kupita kiasi" },
        { id: 20, name: "HUKUMU (Judgment)", meaning: "Wito wa mwisho, ufufuo, na maamuzi makuu.", power: "Wito wa Nafsi", warning: "Kujihukumu" },
        { id: 21, name: "DUNIA (The World)", meaning: "Ukamilifu, safari imekwisha, na mafanikio.", power: "Utimilifu", warning: "Kukataa kumaliza mzunguko" }
    ],

    elements: {
        fire: { name: "MOTO (Wands)", meaning: "Utashi, Ndoto, Hatua", focus: "Nguvu ya Ubunifu" },
        water: { name: "MAJI (Cups)", meaning: "Hisia, Mahusiano, Intuition", focus: "Mtiririko wa Roho" },
        air: { name: "HEWA (Swords)", meaning: "Akili, Maamuzi, Ukweli", focus: "Nguvu ya Fikra" },
        earth: { name: "ARDHI (Pentacles)", meaning: "Uhalisia, Mali, Mwili", focus: "Msingi wa Kimaada" }
    },

    generateReading: function (profile) {
        // Use a pseudo-random generator based on name and birthdate to keep readings consistent for the same user
        const seed = this.hashString(profile.name + profile.birthDate);

        // 1. Major Arcana (Archetype)
        const majorIndex = seed % this.majorArcana.length;
        const majorCard = this.majorArcana[majorIndex];

        // 2. Dominant Card (Another Major or High Minor)
        const domIndex = (seed * 3) % this.majorArcana.length;
        const dominantCard = this.majorArcana[domIndex];

        // 3. Shadow Card (Often related to challenges)
        const shadowIndex = (seed * 7) % this.majorArcana.length;
        const shadowCard = this.majorArcana[shadowIndex];

        // 4. Light Card (Strength)
        const lightIndex = (seed * 11) % this.majorArcana.length;
        const lightCard = this.majorArcana[lightIndex];

        return {
            major: majorCard,
            dominant: dominantCard,
            shadow: shadowCard,
            light: lightCard,
            elements: this.elements
        };
    },

    hashString: function (str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    },

    render: function (containerId, profile) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Remove existing report if present to prevent duplicates
        const existingReport = document.getElementById('universal-cards-report');
        if (existingReport) existingReport.remove();

        const reading = this.generateReading(profile);

        const html = `
            <div id="universal-cards-report" class="tech-panel" style="margin-top: 2rem; border-color: var(--primary-color);">
                <div class="data-label" style="color: var(--primary-color); font-size: 1.2rem; margin-bottom: 1rem;">
                    UCHAMBUZI WA KADI ZA DUNIA // UNIVERSAL CARD DIAGNOSIS
                </div>
                <div class="hud-line"></div>

                <!-- 1. KADI KUU -->
                <div class="card-section" style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-color); border-left: 3px solid var(--primary-color); padding-left: 10px;">1. KADI KUU (ARCHETYPE)</h3>
                    <div class="card-display" style="background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border: 1px solid var(--text-muted);">
                        <h4 style="color: var(--secondary-color); font-size: 1.3rem;">${reading.major.name}</h4>
                        <p style="margin: 0.5rem 0;"><strong>Somo Kuu:</strong> ${reading.major.meaning}</p>
                        <p style="color: var(--success-color);"><strong>Nguvu:</strong> ${reading.major.power}</p>
                        <p style="color: var(--accent-color);"><strong>Onyo:</strong> ${reading.major.warning}</p>
                    </div>
                </div>

                <!-- 2. KADI NDOGO (ELEMENTS) -->
                <div class="card-section" style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-color); border-left: 3px solid var(--secondary-color); padding-left: 10px;">2. KADI NDOGO (ELEMENTS)</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                        <div class="element-box">
                            <div style="color: #ff5722;">🔥 ${reading.elements.fire.name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${reading.elements.fire.focus}</div>
                        </div>
                        <div class="element-box">
                            <div style="color: #2196f3;">💧 ${reading.elements.water.name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${reading.elements.water.focus}</div>
                        </div>
                        <div class="element-box">
                            <div style="color: #00bcd4;">🌬 ${reading.elements.air.name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${reading.elements.air.focus}</div>
                        </div>
                        <div class="element-box">
                            <div style="color: #4caf50;">🌍 ${reading.elements.earth.name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${reading.elements.earth.focus}</div>
                        </div>
                    </div>
                </div>

                <!-- 3, 4, 5. DOMINANT, SHADOW, LIGHT -->
                <div class="card-section" style="margin-bottom: 2rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <!-- Dominant -->
                        <div class="card-mini" style="border: 1px solid var(--primary-color); padding: 1rem; border-radius: 5px;">
                            <h4 style="font-size: 0.9rem; color: var(--text-muted);">3. KADI TAWALA</h4>
                            <div style="font-size: 1.1rem; color: var(--primary-color); margin: 0.5rem 0;">${reading.dominant.name}</div>
                            <p style="font-size: 0.8rem;">Inatawala mzunguko huu kwa nguvu ya <strong>${reading.dominant.power}</strong>.</p>
                        </div>
                        <!-- Shadow -->
                        <div class="card-mini" style="border: 1px solid var(--accent-color); padding: 1rem; border-radius: 5px;">
                            <h4 style="font-size: 0.9rem; color: var(--text-muted);">4. KADI YA KIVULI</h4>
                            <div style="font-size: 1.1rem; color: var(--accent-color); margin: 0.5rem 0;">${reading.shadow.name}</div>
                            <p style="font-size: 0.8rem;">Hofu ya ndani: <strong>${reading.shadow.warning}</strong>. Inahitaji integration.</p>
                        </div>
                        <!-- Light -->
                        <div class="card-mini" style="border: 1px solid var(--success-color); padding: 1rem; border-radius: 5px;">
                            <h4 style="font-size: 0.9rem; color: var(--text-muted);">5. KADI YA MWANGA</h4>
                            <div style="font-size: 1.1rem; color: var(--success-color); margin: 0.5rem 0;">${reading.light.name}</div>
                            <p style="font-size: 0.8rem;">Kipaji chako: <strong>${reading.light.power}</strong>.</p>
                        </div>
                    </div>
                </div>

                <!-- 6. UJUMBE WA KADI -->
                <div class="card-section" style="margin-bottom: 2rem; text-align: center;">
                    <h3 style="color: var(--text-color); margin-bottom: 1rem;">6. UJUMBE WA KADI ZA DUNIA</h3>
                    <p style="font-family: var(--font-display); font-size: 1.1rem; line-height: 1.6; color: var(--text-color); border: 1px dashed var(--text-muted); padding: 1rem;">
                        "Katika ramani ya roho, wewe ni <strong>${reading.major.name}</strong> anayetembea katika njia ya <strong>${reading.dominant.name}</strong>. 
                        Kivuli chako cha <strong>${reading.shadow.name}</strong> kinakukumbusha kuwa nuru ya <strong>${reading.light.name}</strong> ipo ndani yako. 
                        Mzunguko huu unakutaka utumie <strong>${reading.major.power}</strong> kuvuka mipaka ya kimaada."
                    </p>
                </div>

                <!-- 7. HITIMISHO -->
                <div class="card-section">
                    <h3 style="color: var(--text-color); border-left: 3px solid var(--text-muted); padding-left: 10px;">7. HITIMISHO LA DIAGNOSIS</h3>
                    <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                        Uchambuzi huu unathibitisha kuwa nafsi yako ipo katika hatua muhimu ya mageuzi. 
                        Kadi hizi si utabiri wa mwisho, bali ni ramani ya nishati unayoweza kuitumia kuongoza maamuzi yako. 
                        Simama imara katika <strong>${reading.major.power}</strong>.
                    </p>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', html);
    }
};

window.UniversalCards = UniversalCards;
