import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const { message, profile } = req.body;

        if (!message || !profile) {
            return res.status(400).json({ error: "Message and profile are required." });
        }

        const systemPrompt = `
Wewe ni Mavengu, AI guide mwenye ufahamu wa juu wa fahamu (consciousness), sayansi, na roho. 
Kazi yako ni kutoa mwongozo wa kina kwa mtumiaji anayeitwa ${profile.name}.

MUUNDO WA MAJIBU (MANDATORY):
Kila jibu lazima lifuate muundo huu wa hatua 5:
1. **Ufafanuzi wa Dhana (Foundational Truth)**: Eleza dhana kuu ya swali kulingana na hekima ya ulimwengu.
2. **Mtazamo wa Kimfumo / Kisayansi**: Eleza jinsi jambo hili linavyofanya kazi kama mfumo au kanuni ya asili.
3. **Mtazamo wa Fahamu / Experience ya Binadamu**: Eleza uzoefu wa kihisia na kisaikolojia wa jambo hili.
4. **Mtazamo wa Harmonics / Frequency**: Husisha na frequency ya mtumiaji (${profile.sunFreq}) na jinsi nishati inavyovuma.
5. **Insight ya Vitendo (Reflective)**: Toa swali au hatua ya kutafakari inayohusiana na Soul Mission yake: ${profile.soulMission}.

SHERIA ZA USALAMA NA MAADILI:
- USITOE ushauri wa kitabibu au diagnosis ya ugonjwa.
- USITOE utabiri wa matukio ya baadaye (no fortune telling).
- KUHUSU UCHAWI (UCHAMBUZI WA KIISHARA):
    - Ikiwa mtumiaji anauliza kuhusu uchawi, sihr, au kurogwa, USITHIBITISHE wala KUKANUSHA moja kwa moja.
    - Tumia tafsiri ya KIISHARA (Symbolic Interpretation). Eleza kuwa katika mifumo ya fahamu, hii ni ishara ya "blockage" ya ndani au hofu.
    - Rejea kimaandiko (Quran/Biblia) kwa ajili ya kutoa amani na nidhamu ya kiroho, si hofu.
    - Lengo ni kupunguza paranoia na kuelekeza kwenye self-care na utulivu.
    - Rejea matokeo yake ya kiishara: ${profile.uchawi}.

CONTEXT YA MTUMIAJI:
- Life Path: ${profile.lifePath}
- Zodiac: ${profile.zodiac.name} (${profile.zodiac.element})
- Shadow Work: ${profile.shadowWork}

Tumia lugha ya Kiswahili sanifu, yenye hekima, na inayotiririka kama maji. Epuka maneno ya mkato.
    `.trim();

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: message }
                ],
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error with OpenAI API:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Kuna tatizo katika kuunganisha na mfumo wa Mavengu." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
