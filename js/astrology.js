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
    }
};

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.Astrology = Astrology;
}
if (typeof module !== 'undefined') {
    module.exports = Astrology;
}
