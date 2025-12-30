/* Numerology Engine for MavenguLife - Swahili Version */

const Numerology = {
    // Pythagorean Table
    letterValues: {
        'a': 1, 'j': 1, 's': 1,
        'b': 2, 'k': 2, 't': 2,
        'c': 3, 'l': 3, 'u': 3,
        'd': 4, 'm': 4, 'v': 4,
        'e': 5, 'n': 5, 'w': 5,
        'f': 6, 'o': 6, 'x': 6,
        'g': 7, 'p': 7, 'y': 7,
        'h': 8, 'q': 8, 'z': 8,
        'i': 9, 'r': 9
    },

    vowels: ['a', 'e', 'i', 'o', 'u'],

    // Reduce a number to a single digit or master number (11, 22, 33)
    reduceNumber: function (num) {
        if (num === 11 || num === 22 || num === 33) return num;

        let sum = 0;
        const digits = num.toString().split('');

        digits.forEach(digit => {
            sum += parseInt(digit);
        });

        if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
            return this.reduceNumber(sum);
        }

        return sum;
    },

    calculateLifePath: function (birthDate) {
        // Format: YYYY-MM-DD
        const parts = birthDate.split('-');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        // Reduce year, month, day separately then sum
        const rYear = this.reduceNumber(year);
        const rMonth = this.reduceNumber(month);
        const rDay = this.reduceNumber(day);

        return this.reduceNumber(rYear + rMonth + rDay);
    },

    calculateDestiny: function (fullName) {
        let sum = 0;
        const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');

        for (let i = 0; i < cleanName.length; i++) {
            const letter = cleanName[i];
            if (this.letterValues[letter]) {
                sum += this.letterValues[letter];
            }
        }

        return this.reduceNumber(sum);
    },

    calculateSoulUrge: function (fullName) {
        let sum = 0;
        const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');

        for (let i = 0; i < cleanName.length; i++) {
            const letter = cleanName[i];
            if (this.vowels.includes(letter)) {
                sum += this.letterValues[letter];
            }
        }

        return this.reduceNumber(sum);
    },

    getMeaning: function (number, type) {
        const meanings = {
            1: {
                lifePath: "Kiongozi. Wewe ni mtu huru, mwenye malengo makubwa, na mwenye bidii.",
                destiny: "Kuongoza na kuvumbua. Umeumbiwa kuwa mwanzilishi wa mambo.",
                soulUrge: "Unatamani uhuru na nafasi ya kuwa wewe mwenyewe."
            },
            2: {
                lifePath: "Mleta Amani. Wewe ni mwanadiplomasia, mwenye hisia kali, na mshirikiano.",
                destiny: "Kuleta maelewano na usawa. Wewe ni mpatanishi wa asili.",
                soulUrge: "Unatamani upendo, maelewano, na ushirikiano."
            },
            3: {
                lifePath: "Mbunifu. Wewe ni mtu wa kueleza hisia, mwenye matumaini, na unayevutia wengine.",
                destiny: "Kueleza hisia zako kwa ubunifu na kuinua wengine.",
                soulUrge: "Unatamani kujieleza na kushirikiana na watu."
            },
            4: {
                lifePath: "Mjenzi. Wewe ni mtu wa vitendo, mwenye nidhamu, na unayeaminika.",
                destiny: "Kujenga misingi imara na kuleta mpangilio.",
                soulUrge: "Unatamani utulivu, mpangilio, na hisia ya usalama."
            },
            5: {
                lifePath: "Mwanasafari. Wewe ni mtu unayebadilika haraka, na unayependa uhuru.",
                destiny: "Kupata uzoefu wa maisha kikamilifu na kukubali mabadiliko.",
                soulUrge: "Unatamani uhuru, mambo mbalimbali, na matukio mapya."
            },
            6: {
                lifePath: "Mlezi. Wewe ni mtu mwenye majukumu, anayejali, na anayelinda wengine.",
                destiny: "Kutumikia na kusaidia wengine. Wewe ni nguzo ya jamii.",
                soulUrge: "Unatamani maelewano katika nyumba yako na uhusiano wako."
            },
            7: {
                lifePath: "Mtafuta Ukweli. Wewe ni mtu wa uchambuzi, mwenye intuition, na wa kiroho.",
                destiny: "Kutafuta ukweli na hekima. Wewe ni mtafiti wa asili.",
                soulUrge: "Unatamani maarifa, uelewa, na muda wa kuwa peke yako."
            },
            8: {
                lifePath: "Mwenye Nguvu. Wewe ni mtu mwenye malengo, ufanisi, na unayelenga matokeo.",
                destiny: "Kufikia mafanikio ya kimwili na mamlaka.",
                soulUrge: "Unatamani nguvu, hadhi, na wingi wa kifedha."
            },
            9: {
                lifePath: "Mwanaharakati wa Kibinadamu. Wewe ni mwenye huruma, mkarimu, na mwenye maono.",
                destiny: "Kutumikia ubinadamu na kuifanya dunia kuwa mahali bora.",
                soulUrge: "Unatamani upendo wa ulimwengu wote na kurudisha fadhila kwa dunia."
            },
            11: {
                lifePath: "Mwangaza Mkuu. Wewe ni mwenye intuition, unayevutia, na wa kiroho.",
                destiny: "Kuvutia wengine kwa maono yako na intuition yako.",
                soulUrge: "Unatamani mwanga wa kiroho na kuwatia moyo wengine."
            },
            22: {
                lifePath: "Mjenzi Mkuu. Wewe ni mwenye maono na nguvu ya kudhihirisha mambo.",
                destiny: "Kugeuza ndoto kuwa ukweli katika kiwango kikubwa.",
                soulUrge: "Unatamani kujenga kitu cha kudumu na cha maana."
            },
            33: {
                lifePath: "Mwalimu Mkuu. Wewe ni mwenye huruma na umejitolea kuponya.",
                destiny: "Kuponya na kufundisha kupitia upendo usio na masharti.",
                soulUrge: "Unatamani kulea na kuponya ulimwengu."
            }
        };

        return meanings[number] ? meanings[number][type] : "Vibration ya kipekee.";
    }
};

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.Numerology = Numerology;
}
if (typeof module !== 'undefined') {
    module.exports = Numerology;
}
