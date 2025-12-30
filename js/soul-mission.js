/* Soul Mission & Occult Engine for MavenguLife - Swahili Version */

const SoulMission = {
    getSoulMission: function (lifePath) {
        const missions = {
            1: "Kuanzisha mabadiliko na kuongoza kwa ujasiri. Lengo lako ni kufungua njia mpya na kusimamia nguvu zako mwenyewe.",
            2: "Kuleta maelewano na usawa. Lengo lako ni kukuza uhusiano na kuponya migogoro kati ya watu.",
            3: "Kuvutia wengine kupitia maelezo. Lengo lako ni kuinua ulimwengu kwa ubunifu na furaha yako.",
            4: "Kujenga misingi imara. Lengo lako ni kutengeneza utulivu na mpangilio kwa ajili ya vizazi vijavyo. Wewe ni nguzo inayoshikilia mifumo mikubwa.",
            5: "Kukomboa na kupata uzoefu. Lengo lako ni kuonyesha wengine thamani ya uhuru na uwezo wa kubadilika.",
            6: "Kulea na kulinda. Lengo lako ni kuleta uzuri, haki, na huduma kwa jamii yako.",
            7: "Kutafuta ukweli na hekima. Lengo lako ni kuunganisha ulimwengu wa kimwili na ule wa kiroho.",
            8: "Kumudu ulimwengu wa kimwili. Lengo lako ni kujiwezesha na kuwezesha wengine kupitia mafanikio na wingi.",
            9: "Kutumikia ubinadamu. Lengo lako ni kupenda bila masharti na kuongoza wengine kuelekea ukamilifu.",
            11: "Kumulika njia. Lengo lako ni kuwa mjumbe wa kiroho na mwenye maono makubwa.",
            22: "Kudhihirisha ndoto. Lengo lako ni kugeuza mawazo makubwa kuwa ukweli unaoonekana.",
            33: "Kuponya jamii. Lengo lako ni kuwa nuru ya huruma na mwalimu wa kiroho."
        };
        return missions[lifePath] || "Kugundua njia yako ya kipekee.";
    },

    getShadowWork: function (zodiacSign) {
        const shadows = {
            "Aries": "Kukosa subira na hasira. Fanyia kazi kudhibiti jazba na kuzingatia mahitaji ya wengine.",
            "Taurus": "Ukaidi na kupenda vitu vya kimwili. Jifunze kuachilia milki na mitazamo isiyobadilika.",
            "Gemini": "Kutokuwa na msimamo na juu-juu. Lenga kukuza uhusiano na ahadi zako.",
            "Cancer": "Kubadilika hisia na ghiliba. Jifunze kueleza mahitaji yako moja kwa moja bila kuleta hatia.",
            "Leo": "Kiburi na kuhitaji sifa. Tafuta thamani yako ndani yako badala ya kutafuta makofi ya nje.",
            "Virgo": "Upendeleo wa ukamilifu na ukosoaji. Jifunze kujihurumia na kukubali mapungufu. Mara nyingi unajichelewesha kwa kuogopa kutokamilika.",
            "Libra": "Kushindwa kuamua na utegemezi. Jifunze kusimama peke yako na kufanya maamuzi yako mwenyewe.",
            "Scorpio": "Wivu na kutaka kutawala. Achilia hitaji la kumiliki na amini mtiririko wa maisha.",
            "Sagittarius": "Kukosa busara na kutokuwajibika. Jifunze kuwa makini katika maneno na kukamilisha mambo.",
            "Capricorn": "Kukata tamaa na ugumu. Jiruhusu kucheza na amini msaada wa ulimwengu.",
            "Aquarius": "Kujitenga na uasi. Ungana na moyo wako na hisia za wengine.",
            "Pisces": "Kukimbia ukweli na kujiona mwathirika. Jikite katika ukweli na chukua jukumu la maisha yako."
        };
        return shadows[zodiacSign] || "Kukabiliana na nafsi ya ndani.";
    },

    getMeditation: function (element) {
        const rituals = {
            "Fire": "Kuangalia Mshumaa (Trataka). Lenga mwali wa moto ili kuchoma vizuizi na kuwasha utashi wako wa ndani.",
            "Earth": "Kuunganishwa na Ardhi. Waza mizizi ikitoka kwenye uti wa mgongo wako kuelekea ardhini, ikiimarisha nishati yako.",
            "Air": "Mazoezi ya Pumzi (Pranayama). Lenga mtiririko wa hewa ili kusafisha akili na kupanua ufahamu.",
            "Water": "Taswira ya Mtiririko. Jiwazie kama mto, ukiruhusu hisia kutiririka bila kuzing'ang'ania."
        };
        return rituals[element] || "Kupumua kwa umakini.";
    },

    getSunFrequency: function (zodiacSign) {
        const freqs = {
            "Aries": "528 Hz - Mabadiliko na Miujiza",
            "Taurus": "432 Hz - Resonance ya Asili ya Ardhi",
            "Gemini": "396 Hz - Kukomboa Guilt na Hofu",
            "Cancer": "417 Hz - Kurekebisha Hali na Kurahisisha Mabadiliko",
            "Leo": "528 Hz - Matengenezo ya DNA na Frequency ya Upendo",
            "Virgo": "741 Hz - Kuamsha Intuition",
            "Libra": "639 Hz - Kuunganisha Uhusiano",
            "Scorpio": "852 Hz - Kurudi kwenye Mpangilio wa Kiroho",
            "Sagittarius": "963 Hz - Kuamsha Hali ya Ukamilifu",
            "Capricorn": "174 Hz - Kupunguza Maumivu na Msongo",
            "Aquarius": "285 Hz - Kuponya Tishu na Viungo",
            "Pisces": "963 Hz - Frequency ya Miungu"
        };
        return freqs[zodiacSign] || "432 Hz - Frequency ya Ulimwengu";
    },

    getMysticOracle: function () {
        const messages = [
            "Giza linakutazama. Karibisha yasiyojulikana.",
            "Kama ilivyo juu, ndivyo ilivyo chini. Ulimwengu wako wa nje unaonyesha hali yako ya ndani.",
            "Nyota zinaashiria, hazilazimishi.",
            "Ukimya ni lugha ya miungu.",
            "Unachokitafuta kinakutafuta pia.",
            "Amini mpangilio wa muda wa kupatwa kwa maisha yako.",
            "Intuition yako ni mnong'ono wa nafsi.",
            "Nishati hutiririka pale umakini unapoenda."
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    },

    getAesthetics: function (element) {
        const aesthetics = {
            "Fire": "Dhahabu, Nyekundu, Machungwa ya Neon. Miundo yenye nguvu na ujasiri.",
            "Earth": "Zumaridi, Onyx, Shaba. Miundo ya asili na imara.",
            "Air": "Fedha, Cyan, Nyeupe. Mitindo mepesi na ya kiroho.",
            "Water": "Bluu nzito, Zambarau, Seafoam. Athari za majimaji na holographic."
        };
        return aesthetics[element] || "Iridescence ya Ulimwengu";
    },

    getUchawiSymbolic: function (lifePath) {
        const interpretations = {
            1: "Ishara ya 'Vizuizi vya Mapenzi'. Inaashiria hofu ya kushindwa kuongoza au kuanza jambo jipya. Hii ni 'blockage' ya ndani, si nje.",
            2: "Ishara ya 'Dissonance ya Mahusiano'. Inaashiria hofu ya kusalitiwa au kutokueleweka. Ni mwangwi wa kutokuaminiana ndani ya nafsi.",
            3: "Ishara ya 'Kuzimwa kwa Nuru'. Inaashiria msongo wa mawazo unaozuia ubunifu wako. Ni 'shadow' ya hofu ya kuhukumiwa na jamii.",
            4: "Ishara ya 'Misingi Inayoyumba'. Inaashiria hofu ya kupoteza utulivu au usalama wa kifedha. Ni ishara ya kutojiamini katika uwezo wako wa kujenga.",
            5: "Ishara ya 'Kifungo cha Uhuru'. Inaashiria hisia za kukwama katika mzunguko uleule. Ni hofu ya mabadiliko inayojificha kama 'uchawi'.",
            6: "Ishara ya 'Mizigo ya Familia'. Inaashiria shinikizo la majukumu yanayokulemea. Ni 'energy leak' inayotokana na kutokuweka mipaka.",
            7: "Ishara ya 'Giza la Maarifa'. Inaashiria kuchanganyikiwa kwa kiroho. Ni hofu ya kutafuta ukweli unaoweza kubadilisha maisha yako.",
            8: "Ishara ya 'Kupotea kwa Nguvu'. Inaashiria hofu ya umaskini au kupoteza mamlaka. Ni mwangwi wa kutokujithamini katika ulimwengu wa kimwili.",
            9: "Ishara ya 'Mwisho wa Mzunguko'. Inaashiria hofu ya kuachilia mambo yaliyopita. Ni 'attachment' inayozuia ukuaji wako mpya.",
            11: "Ishara ya 'Nuru Inayopofusha'. Inaashiria mshtuko wa kiroho (spiritual crisis). Ni nguvu kubwa ya ndani inayohitaji kuelekezwa vizuri.",
            22: "Ishara ya 'Ujenzi wa Ndoto'. Inaashiria hofu ya majukumu makubwa. Ni 'pressure' ya kutaka kufanya mambo makubwa peke yako.",
            33: "Ishara ya 'Moyo Uliochoka'. Inaashiria kutoa nishati nyingi kwa wengine bila kujijali. Ni 'imbalance' ya huruma."
        };
        return interpretations[lifePath] || "Ishara ya 'Mabadiliko ya Ndani'. Inaashiria mchakato wa nafsi kujitambua kupitia changamoto.";
    }
};

// Export
if (typeof window !== 'undefined') {
    window.SoulMission = SoulMission;
}
if (typeof module !== 'undefined') {
    module.exports = SoulMission;
}
