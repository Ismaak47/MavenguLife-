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
        const parts = birthDate.split('-');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

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
            if (this.letterValues[letter]) sum += this.letterValues[letter];
        }
        return this.reduceNumber(sum);
    },

    calculateSoulUrge: function (fullName) {
        let sum = 0;
        const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
        for (let i = 0; i < cleanName.length; i++) {
            const letter = cleanName[i];
            if (this.vowels.includes(letter)) sum += this.letterValues[letter];
        }
        return this.reduceNumber(sum);
    },

    calculatePersonalYear: function (birthDate) {
        const parts = birthDate.split('-');
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        const currentYear = new Date().getFullYear();
        return this.reduceNumber(day + month + currentYear);
    },

    calculateBirthDayNumber: function (birthDate) {
        const parts = birthDate.split('-');
        const day = parseInt(parts[2]);
        return this.reduceNumber(day);
    },

    calculateBalanceNumber: function (fullName) {
        const names = fullName.trim().split(/\s+/);
        let sum = 0;
        names.forEach(name => {
            const firstLetter = name.toLowerCase()[0];
            if (this.letterValues[firstLetter]) sum += this.letterValues[firstLetter];
        });
        return this.reduceNumber(sum);
    },

    calculateHiddenPassion: function (fullName) {
        const counts = {};
        const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
        for (let i = 0; i < cleanName.length; i++) {
            const letter = cleanName[i];
            const val = this.letterValues[letter];
            if (val) counts[val] = (counts[val] || 0) + 1;
        }
        let maxCount = 0;
        let passionNumber = 0;
        for (const [num, count] of Object.entries(counts)) {
            if (count > maxCount) {
                maxCount = count;
                passionNumber = parseInt(num);
            }
        }
        return passionNumber || 0;
    },

    calculateKarmicDebt: function (birthDate) {
        const parts = birthDate.split('-');
        const day = parseInt(parts[2]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[0]);

        if ([13, 14, 16, 19].includes(day)) return day;

        let sum = 0;
        const digits = (day + "" + month + "" + year).split('');
        digits.forEach(d => sum += parseInt(d));

        if ([13, 14, 16, 19].includes(sum)) return sum;
        return 0;
    },

    calculateFirstChallenge: function (birthDate) {
        const parts = birthDate.split('-');
        const day = parseInt(parts[2]);
        const month = parseInt(parts[1]);

        const rMonth = this.reduceNumber(month);
        const rDay = this.reduceNumber(day);

        return Math.abs(rMonth - rDay);
    },

    calculateMaturityNumber: function (lifePath, destiny) {
        return this.reduceNumber(lifePath + destiny);
    },

    calculateRationalThought: function (fullName, birthDate) {
        const firstName = fullName.trim().split(/\s+/)[0].toLowerCase();
        const day = parseInt(birthDate.split('-')[2]);
        let sum = 0;
        for (let i = 0; i < firstName.length; i++) {
            const letter = firstName[i];
            if (this.letterValues[letter]) sum += this.letterValues[letter];
        }
        return this.reduceNumber(sum + day);
    },

    calculateAttitudeNumber: function (birthDate) {
        const parts = birthDate.split('-');
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        return this.reduceNumber(month + day);
    },

    calculatePinnacles: function (birthDate) {
        const parts = birthDate.split('-');
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        const year = parseInt(parts[0]);

        const rMonth = this.reduceNumber(month);
        const rDay = this.reduceNumber(day);
        const rYear = this.reduceNumber(year);

        const p1 = this.reduceNumber(rMonth + rDay);
        const p2 = this.reduceNumber(rDay + rYear);
        const p3 = this.reduceNumber(p1 + p2);
        const p4 = this.reduceNumber(rMonth + rYear);

        return { p1, p2, p3, p4 };
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
                lifePath: "Mjenzi. Wewe ni mtu wa vitendo, mwenye nidhamu, na unayeaminika. Una uwezo wa kugeuza mawazo kuwa ukweli kupitia kazi ngumu na mpangilio.",
                destiny: "Kujenga misingi imara na kuleta mpangilio. Umeumbiwa kuweka mifumo inayodumu.",
                soulUrge: "Unatamani utulivu, mpangilio, na hisia ya usalama katika kila nyanja ya maisha yako."
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

if (typeof window !== 'undefined') {
    window.Numerology = Numerology;
}
if (typeof module !== 'undefined') {
    module.exports = Numerology;
}
