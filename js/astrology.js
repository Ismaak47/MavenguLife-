/* Astrology Engine for MavenguLife - Swahili Version */

const Astrology = {
    zodiacSigns: [
        { name: "Capricorn", start: [12, 22], end: [1, 19], icon: "♑", element: "Earth" },
        { name: "Aquarius", start: [1, 20], end: [2, 18], icon: "♒", element: "Air" },
        { name: "Pisces", start: [2, 19], end: [3, 20], icon: "♓", element: "Water" },
        { name: "Aries", start: [3, 21], end: [4, 19], icon: "♈", element: "Fire" },
        { name: "Taurus", start: [4, 20], end: [5, 20], icon: "♉", element: "Earth" },
        { name: "Gemini", start: [5, 21], end: [6, 20], icon: "♊", element: "Air" },
        { name: "Cancer", start: [6, 21], end: [7, 22], icon: "♋", element: "Water" },
        { name: "Leo", start: [7, 23], end: [8, 22], icon: "♌", element: "Fire" },
        { name: "Virgo", start: [8, 23], end: [9, 22], icon: "♍", element: "Earth" },
        { name: "Libra", start: [9, 23], end: [10, 22], icon: "♎", element: "Air" },
        { name: "Scorpio", start: [10, 23], end: [11, 21], icon: "♏", element: "Water" },
        { name: "Sagittarius", start: [11, 22], end: [12, 21], icon: "♐", element: "Fire" }
    ],

    getZodiacSign: function (birthDate) {
        const date = new Date(birthDate);
        const month = date.getMonth() + 1; // 1-12
        const day = date.getDate();

        // Handle Capricorn edge case (Dec 22 - Jan 19)
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return this.zodiacSigns[0]; // Capricorn
        }

        for (let i = 1; i < this.zodiacSigns.length; i++) {
            const sign = this.zodiacSigns[i];
            if (
                (month === sign.start[0] && day >= sign.start[1]) ||
                (month === sign.end[0] && day <= sign.end[1])
            ) {
                return sign;
            }
        }

        return this.zodiacSigns[0]; // Default fallback
    },

    getTraits: function (signName) {
        const traits = {
            "Aries": "Jasiri, mwenye malengo makubwa, na mwenye nguvu. Wewe ni kiongozi wa asili unayependa kuanzisha mambo.",
            "Taurus": "Unayeaminika, mwenye subira, na wa vitendo. Unathamini utulivu na mambo mazuri ya maisha.",
            "Gemini": "Unayebadilika, unayependa watu, na mwerevu. Wewe ni mtu wa kijamii mwenye akili ya udadisi.",
            "Cancer": "Mwenye intuition, mwenye hisia, na mwenye huruma. Umeunganishwa sana na hisia zako na nyumbani.",
            "Leo": "Mbunifu, mwenye shauku, na mkarimu. Unapenda kuwa kitovu cha umakini na kuvutia wengine.",
            "Virgo": "Mwaminifu, mwenye uchambuzi, na mkarimu. Una jicho kali kwa maelezo na hamu ya kutumikia.",
            "Libra": "Mshirikiano, mwanadiplomasia, na mwenye neema. Unatafuta usawa, maelewano, na ushirikiano.",
            "Scorpio": "Mwerevu, jasiri, na mwenye shauku. Wewe ni mtu mwenye nguvu na haiba inayovutia.",
            "Sagittarius": "Mkarimu, mwenye maono, na mcheshi sana. Unapenda uhuru na kusafiri.",
            "Capricorn": "Mwenye majukumu, mwenye nidhamu, na anayejitawala. Una malengo makubwa na umedhamiria kufanikiwa.",
            "Aquarius": "Mwenye maendeleo, wa kipekee, na huru. Wewe ni mwanaharakati wa kibinadamu mwenye maono ya kipekee.",
            "Pisces": "Mwenye huruma, msanii, na mwenye intuition. Wewe ni mwotaji mwenye uhusiano wa kina na kiroho."
        };
        return traits[signName] || "Nishati ya kipekee ya kiulimwengu.";
    },

    getRulingPlanet: function (signName) {
        const planets = {
            "Aries": { name: "Mars", icon: "♂️", desc: "Sayari ya Vita na Nishati" },
            "Taurus": { name: "Venus", icon: "♀️", desc: "Sayari ya Upendo na Uzuri" },
            "Gemini": { name: "Mercury", icon: "☿️", desc: "Sayari ya Mawasiliano" },
            "Cancer": { name: "Moon", icon: "🌙", desc: "Sayari ya Hisia na Intuition" },
            "Leo": { name: "Sun", icon: "☀️", desc: "Nyota ya Nguvu na Uhai" },
            "Virgo": { name: "Mercury", icon: "☿️", desc: "Sayari ya Akili na Uchambuzi" },
            "Libra": { name: "Venus", icon: "♀️", desc: "Sayari ya Mahusiano" },
            "Scorpio": { name: "Pluto", icon: "♇️", desc: "Sayari ya Mabadiliko na Nguvu" },
            "Sagittarius": { name: "Jupiter", icon: "♃️", desc: "Sayari ya Bahati na Falsafa" },
            "Capricorn": { name: "Saturn", icon: "♄️", desc: "Sayari ya Nidhamu na Karma" },
            "Aquarius": { name: "Uranus", icon: "♅️", desc: "Sayari ya Mapinduzi" },
            "Pisces": { name: "Neptune", icon: "♆️", desc: "Sayari ya Ndoto na Kiroho" }
        };
        return planets[signName] || { name: "Unknown", icon: "❓", desc: "Nishati Isiyojulikana" };
    },

    getMoonPhase: function (birthDate) {
        const date = new Date(birthDate);
        // Known New Moon: Jan 6, 2000
        const knownNewMoon = new Date('2000-01-06');
        const cycle = 29.53058867;
        const diffTime = date.getTime() - knownNewMoon.getTime();
        const diffDays = diffTime / (1000 * 3600 * 24);
        const totalCycles = diffDays / cycle;
        const currentCycle = totalCycles - Math.floor(totalCycles);
        const age = currentCycle * cycle;

        if (age < 1.84566) return { name: "New Moon", icon: "🌑", desc: "Mwanzo Mpya" };
        if (age < 5.53699) return { name: "Waxing Crescent", icon: "🌒", desc: "Kuweka Nia" };
        if (age < 9.22831) return { name: "First Quarter", icon: "🌓", desc: "Kuchukua Hatua" };
        if (age < 12.91963) return { name: "Waxing Gibbous", icon: "🌔", desc: "Kukamilisha" };
        if (age < 16.61096) return { name: "Full Moon", icon: "🌕", desc: "Utimilifu na Mavuno" };
        if (age < 20.30228) return { name: "Waning Gibbous", icon: "🌖", desc: "Kushukuru" };
        if (age < 23.99361) return { name: "Last Quarter", icon: "🌗", desc: "Kuachilia" };
        return { name: "Waning Crescent", icon: "🌘", desc: "Kupumzika" };
    },

    getBirthStone: function (birthDate) {
        const month = new Date(birthDate).getMonth() + 1;
        const stones = {
            1: { name: "Garnet", color: "Dark Red", desc: "Ulinzi na Nguvu" },
            2: { name: "Amethyst", color: "Purple", desc: "Hekima na Utulivu" },
            3: { name: "Aquamarine", color: "Light Blue", desc: "Ujasiri na Amani" },
            4: { name: "Diamond", color: "Clear", desc: "Upendo wa Milele" },
            5: { name: "Emerald", color: "Green", desc: "Uzazi na Upyaji" },
            6: { name: "Pearl", color: "White", desc: "Usafi na Hekima" },
            7: { name: "Ruby", color: "Red", desc: "Shauku na Ulinzi" },
            8: { name: "Peridot", color: "Light Green", desc: "Nguvu na Uponyaji" },
            9: { name: "Sapphire", color: "Blue", desc: "Hekima na Uaminifu" },
            10: { name: "Opal", color: "Multi", desc: "Matumaini na Ubunifu" },
            11: { name: "Topaz", color: "Yellow", desc: "Upendo na Mapenzi" },
            12: { name: "Turquoise", color: "Blue-Green", desc: "Bahati na Mafanikio" }
        };
        return stones[month] || { name: "Quartz", color: "Clear", desc: "Nguvu ya Jumla" };
    },

    getSpiritAnimal: function (signName) {
        const animals = {
            "Aries": "Cheetah (Kasi na Focus)",
            "Taurus": "Bear (Nguvu na Utulivu)",
            "Gemini": "Dolphin (Akili na Furaha)",
            "Cancer": "Rabbit (Upole na Ulinzi)",
            "Leo": "Lion (Ujasiri na Uongozi)",
            "Virgo": "Fox (Ujanja na Uchambuzi)",
            "Libra": "Swan (Neema na Usawa)",
            "Scorpio": "Snake (Mabadiliko na Uponyaji)",
            "Sagittarius": "Owl (Hekima na Uhuru)",
            "Capricorn": "Wolf (Nidhamu na Uaminifu)",
            "Aquarius": "Eagle (Maono na Uhuru)",
            "Pisces": "Butterfly (Mabadiliko na Roho)"
        };
        return animals[signName] || "Phoenix";
    }
};

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.Astrology = Astrology;
}
if (typeof module !== 'undefined') {
    module.exports = Astrology;
}
