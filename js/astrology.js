/* Astrology Engine for MavenguLife - Swahili Version */

const Astrology = {
    zodiacSigns: [
        { name: "Capricorn", start: [12, 22], end: [1, 19], icon: "♑", element: "Ardhi (Earth)" },
        { name: "Aquarius", start: [1, 20], end: [2, 18], icon: "♒", element: "Hewa (Air)" },
        { name: "Pisces", start: [2, 19], end: [3, 20], icon: "♓", element: "Maji (Water)" },
        { name: "Aries", start: [3, 21], end: [4, 19], icon: "♈", element: "Moto (Fire)" },
        { name: "Taurus", start: [4, 20], end: [5, 20], icon: "♉", element: "Ardhi (Earth)" },
        { name: "Gemini", start: [5, 21], end: [6, 20], icon: "♊", element: "Hewa (Air)" },
        { name: "Cancer", start: [6, 21], end: [7, 22], icon: "♋", element: "Maji (Water)" },
        { name: "Leo", start: [7, 23], end: [8, 22], icon: "♌", element: "Moto (Fire)" },
        { name: "Virgo", start: [8, 23], end: [9, 22], icon: "♍", element: "Ardhi (Earth)" },
        { name: "Libra", start: [9, 23], end: [10, 22], icon: "♎", element: "Hewa (Air)" },
        { name: "Scorpio", start: [10, 23], end: [11, 21], icon: "♏", element: "Maji (Water)" },
        { name: "Sagittarius", start: [11, 22], end: [12, 21], icon: "♐", element: "Moto (Fire)" }
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
            "Aries": { name: "Mirihi (Mars)", icon: "♂️", desc: "Sayari ya Vita na Nishati" },
            "Taurus": { name: "Zuhura (Venus)", icon: "♀️", desc: "Sayari ya Upendo na Uzuri" },
            "Gemini": { name: "Zebaki (Mercury)", icon: "☿️", desc: "Sayari ya Mawasiliano" },
            "Cancer": { name: "Mwezi (Moon)", icon: "🌙", desc: "Sayari ya Hisia na Intuition" },
            "Leo": { name: "Jua (Sun)", icon: "☀️", desc: "Nyota ya Nguvu na Uhai" },
            "Virgo": { name: "Zebaki (Mercury)", icon: "☿️", desc: "Sayari ya Akili na Uchambuzi" },
            "Libra": { name: "Zuhura (Venus)", icon: "♀️", desc: "Sayari ya Mahusiano" },
            "Scorpio": { name: "Pluto", icon: "♇️", desc: "Sayari ya Mabadiliko na Nguvu" },
            "Sagittarius": { name: "Mushtari (Jupiter)", icon: "♃️", desc: "Sayari ya Bahati na Falsafa" },
            "Capricorn": { name: "Zohali (Saturn)", icon: "♄️", desc: "Sayari ya Nidhamu na Karma" },
            "Aquarius": { name: "Uranus", icon: "♅️", desc: "Sayari ya Mapinduzi" },
            "Pisces": { name: "Neptune", icon: "♆️", desc: "Sayari ya Ndoto na Kiroho" }
        };
        return planets[signName] || { name: "Haijulikani", icon: "❓", desc: "Nishati Isiyojulikana" };
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

        if (age < 1.84566) return { name: "Mwezi Mpya (New Moon)", icon: "🌑", desc: "Mwanzo Mpya" };
        if (age < 5.53699) return { name: "Mwezi Mchanga (Waxing Crescent)", icon: "🌒", desc: "Kuweka Nia" };
        if (age < 9.22831) return { name: "Robo ya Kwanza (First Quarter)", icon: "🌓", desc: "Kuchukua Hatua" };
        if (age < 12.91963) return { name: "Mwezi Unaoelekea Kujaa (Waxing Gibbous)", icon: "🌔", desc: "Kukamilisha" };
        if (age < 16.61096) return { name: "Mwezi Mkamili (Full Moon)", icon: "🌕", desc: "Utimilifu na Mavuno" };
        if (age < 20.30228) return { name: "Mwezi Unaoanza Kupungua (Waning Gibbous)", icon: "🌖", desc: "Kushukuru" };
        if (age < 23.99361) return { name: "Robo ya Mwisho (Last Quarter)", icon: "🌗", desc: "Kuachilia" };
        return { name: "Mwezi Mwandamo (Waning Crescent)", icon: "🌘", desc: "Kupumzika" };
    },

    getBirthStone: function (birthDate) {
        const month = new Date(birthDate).getMonth() + 1;
        const stones = {
            1: { name: "Garnet", color: "Nyekundu Nzito", desc: "Ulinzi na Nguvu" },
            2: { name: "Amethyst", color: "Zambarau", desc: "Hekima na Utulivu" },
            3: { name: "Aquamarine", color: "Bluu Nyepesi", desc: "Ujasiri na Amani" },
            4: { name: "Almasi (Diamond)", color: "Angavu", desc: "Upendo wa Milele" },
            5: { name: "Zumaridi (Emerald)", color: "Kijani", desc: "Uzazi na Upyaji" },
            6: { name: "Lulu (Pearl)", color: "Nyeupe", desc: "Usafi na Hekima" },
            7: { name: "Yakuti (Ruby)", color: "Nyekundu", desc: "Shauku na Ulinzi" },
            8: { name: "Peridot", color: "Kijani Nyepesi", desc: "Nguvu na Uponyaji" },
            9: { name: "Sapphire", color: "Bluu", desc: "Hekima na Uaminifu" },
            10: { name: "Opal", color: "Rangi Nyingi", desc: "Matumaini na Ubunifu" },
            11: { name: "Topaz", color: "Njano", desc: "Upendo na Mapenzi" },
            12: { name: "Turquoise", color: "Bluu-Kijani", desc: "Bahati na Mafanikio" }
        };
        return stones[month] || { name: "Quartz", color: "Angavu", desc: "Nguvu ya Jumla" };
    },

    getSpiritAnimal: function (signName) {
        const animals = {
            "Aries": "Duma (Cheetah)",
            "Taurus": "Dubu (Bear)",
            "Gemini": "Pomboo (Dolphin)",
            "Cancer": "Sungura (Rabbit)",
            "Leo": "Simba (Lion)",
            "Virgo": "Mbweha (Fox)",
            "Libra": "Bata Maji (Swan)",
            "Scorpio": "Nyoka (Snake)",
            "Sagittarius": "Bundi (Owl)",
            "Capricorn": "Mbwa Mwitu (Wolf)",
            "Aquarius": "Tai (Eagle)",
            "Pisces": "Kipepeo (Butterfly)"
        };
        return animals[signName] || "Phoenix";
    },

    getLuckyColor: function (signName) {
        const colors = {
            "Aries": "Nyekundu", "Taurus": "Kijani", "Gemini": "Njano", "Cancer": "Fedha",
            "Leo": "Dhahabu", "Virgo": "Kijivu", "Libra": "Pinki", "Scorpio": "Nyeusi",
            "Sagittarius": "Zambarau", "Capricorn": "Kahawia", "Aquarius": "Bluu", "Pisces": "Kijani Bahari"
        };
        return colors[signName] || "Nyeupe";
    },

    getLuckyDay: function (signName) {
        const days = {
            "Aries": "Jumanne", "Taurus": "Ijumaa", "Gemini": "Jumatano", "Cancer": "Jumatatu",
            "Leo": "Jumapili", "Virgo": "Jumatano", "Libra": "Ijumaa", "Scorpio": "Jumanne",
            "Sagittarius": "Alhamisi", "Capricorn": "Jumamosi", "Aquarius": "Jumamosi", "Pisces": "Alhamisi"
        };
        return days[signName] || "Jumapili";
    },

    getTarotCard: function (signName) {
        const cards = {
            "Aries": "The Emperor (Mfalme)", "Taurus": "The Hierophant (Kuhani Mkuu)", "Gemini": "The Lovers (Wapendanao)", "Cancer": "The Chariot (Gari la Vita)",
            "Leo": "Strength (Nguvu)", "Virgo": "The Hermit (Mtawa)", "Libra": "Justice (Haki)", "Scorpio": "Death (Kifo/Mabadiliko)",
            "Sagittarius": "Temperance (Kiasi)", "Capricorn": "The Devil (Shetani/Vifungo)", "Aquarius": "The Star (Nyota)", "Pisces": "The Moon (Mwezi)"
        };
        return cards[signName] || "The Fool (Mjinga)";
    },

    getChakra: function (signName) {
        const chakras = {
            "Aries": "Solar Plexus (Kitovu)", "Taurus": "Heart (Moyo)", "Gemini": "Throat (Koo)", "Cancer": "Third Eye (Jicho la Tatu)",
            "Leo": "Crown (Taji)", "Virgo": "Throat (Koo)", "Libra": "Heart (Moyo)", "Scorpio": "Sacral (Sakrali)",
            "Sagittarius": "Sacral (Sakrali)", "Capricorn": "Root (Mzizi)", "Aquarius": "Root (Mzizi)", "Pisces": "Solar Plexus (Kitovu)"
        };
        return chakras[signName] || "Root (Mzizi)";
    },

    getChineseZodiac: function (birthDate) {
        const year = new Date(birthDate).getFullYear();
        const animals = ["Panya (Rat)", "Ng'ombe (Ox)", "Chui (Tiger)", "Sungura (Rabbit)", "Joka (Dragon)", "Nyoka (Snake)", "Farasi (Horse)", "Mbuzi (Goat)", "Tumbili (Monkey)", "Jogoo (Rooster)", "Mbwa (Dog)", "Nguruwe (Pig)"];
        const index = (year - 4) % 12;
        return animals[index >= 0 ? index : index + 12];
    },

    getAuraColor: function (signName) {
        const auras = {
            "Aries": "Nyekundu Angavu", "Taurus": "Kijani cha Msitu", "Gemini": "Njano Angavu", "Cancer": "Pinki Laini",
            "Leo": "Dhahabu-Chungwa", "Virgo": "Bluu ya Kifalme", "Libra": "Kijani Laini", "Scorpio": "Nyekundu Nzito",
            "Sagittarius": "Zambarau Nyepesi", "Capricorn": "Indigo Nzito", "Aquarius": "Bluu ya Umeme", "Pisces": "Violeti"
        };
        return auras[signName] || "Nyeupe";
    },

    getNorthNode: function (signName) {
        // Simplified North Node logic based on Zodiac Sign for demonstration
        const nodes = {
            "Aries": "Libra (Mizani)", "Taurus": "Scorpio (Nge)", "Gemini": "Sagittarius (Mshale)", "Cancer": "Capricorn (Mbuzi)",
            "Leo": "Aquarius (Ndoo)", "Virgo": "Pisces (Samaki)", "Libra": "Aries (Kondoo)", "Scorpio": "Taurus (Ng'ombe)",
            "Sagittarius": "Gemini (Mapacha)", "Capricorn": "Cancer (Kaa)", "Aquarius": "Leo (Simba)", "Pisces": "Virgo (Mashuke)"
        };
        return nodes[signName] || "Unknown";
    },

    getLifeLesson: function (signName) {
        const lessons = {
            "Aries": "Subira na Kujidhibiti",
            "Taurus": "Kuachilia na Kubadilika",
            "Gemini": "Kuzingatia na Undani",
            "Cancer": "Kujitegemea Kihisia",
            "Leo": "Unyenyekevu na Huduma",
            "Virgo": "Kukubali Mapungufu",
            "Libra": "Kujiamini na Maamuzi",
            "Scorpio": "Msamaha na Imani",
            "Sagittarius": "Ukweli na Uwajibikaji",
            "Capricorn": "Furaha na Usawa",
            "Aquarius": "Ushirikiano na Hisia",
            "Pisces": "Mipaka na Uhalisia"
        };
        return lessons[signName] || "Kujitambua";
    },

    getGuardianAngel: function (signName) {
        const angels = {
            "Aries": "Ariel", "Taurus": "Chamuel", "Gemini": "Zadkiel", "Cancer": "Gabriel",
            "Leo": "Raziel", "Virgo": "Metatron", "Libra": "Jophiel", "Scorpio": "Jeremiel",
            "Sagittarius": "Raguel", "Capricorn": "Azrael", "Aquarius": "Uriel", "Pisces": "Sandalphon"
        };
        return angels[signName] || "Michael";
    },

    getSoulAge: function (birthDate) {
        const year = new Date(birthDate).getFullYear();
        if (year > 2010) return "Roho Changa (Infant Soul)";
        if (year > 1995) return "Roho Mtoto (Baby Soul)";
        if (year > 1980) return "Roho Kijana (Young Soul)";
        if (year > 1960) return "Roho Iliyokomaa (Mature Soul)";
        return "Roho Mzee (Old Soul)";
    }
};

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.Astrology = Astrology;
}
if (typeof module !== 'undefined') {
    module.exports = Astrology;
}
