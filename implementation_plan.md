# Implementation Plan - Mavengu Advanced Role & Identity

Refactor the AI chat engine to transform Mavengu into a high-level consciousness guide with a mixed scientific/spiritual perspective.

## Proposed Changes

### [Component] AI Chat Engine (`js/ai-chat.js`)

#### [MODIFY] [ai-chat.js](file:///c:/Users/mms/Downloads/MavenguLife/MavenguLife-/js/ai-chat.js)
- **New Knowledge Structure**: Reorganize the internal library into `/world/`, `/human/`, `/harmonics/`, `/astrology/`, and `/numerology/`.
- **4-Step Response Engine**: Implement a logic that constructs every response using:
    1. **Ufafanuzi wa Dhana** (Concept)
    2. **Mtazamo wa Kisayansi/Kimfumo** (Scientific/Systemic)
# Implementation Plan - Mavengu Advanced Role & Identity

Refactor the AI chat engine to transform Mavengu into a high-level consciousness guide with a mixed scientific/spiritual perspective.

## Proposed Changes

### [Component] AI Chat Engine (`js/ai-chat.js`)

#### [MODIFY] [ai-chat.js](file:///c:/Users/mms/Downloads/MavenguLife/MavenguLife-/js/ai-chat.js)
- **New Knowledge Structure**: Reorganize the internal library into `/world/`, `/human/`, `/harmonics/`, `/astrology/`, and `/numerology/`.
- **4-Step Response Engine**: Implement a logic that constructs every response using:
    1. **Ufafanuzi wa Dhana** (Concept)
    2. **Mtazamo wa Kisayansi/Kimfumo** (Scientific/Systemic)
    3. **Mtazamo wa Kiroho/Fahamu** (Spiritual/Consciousness)
    4. **Tafakari ya Vitendo** (Practical Reflection)
- **Deep Consciousness Detection**: Add specific handling for existential questions (purpose, cycles, feeling different).
- **Tone Refinement**: Update the language to be "Mixed" (spiritual + scientific + philosophical) and avoid absolute terms like "lazima".
- **Ethical Guardrails**: Ensure no predictions or medical advice are given.

### [Component] Deep Existential Knowledge Engine

#### [MODIFY] [ai-chat.js](file:///c:/Users/mms/Downloads/MavenguLife/MavenguLife-/js/ai-chat.js)
- **Mandatory 5-Step Structure**: Refactor the response generator to strictly follow:
    1. **Ufafanuzi wa Dhana (Foundational Truth)**
    2. **Mtazamo wa Kimfumo / Kisayansi**
    3. **Mtazamo wa Fahamu / Experience ya Binadamu**
    4. **Mtazamo wa Harmonics / Frequency**
    5. **Insight ya Vitendo (Reflective)**
- **Knowledge Integration**: Ensure every response synthesizes at least 3 of the 5 levels (Universal Laws, System Thinking, Human Experience, Harmonics, Spiritual Perspective).
- **Harmonic Language Refinement**: Update frequency references to be metaphorical/comparative rather than absolute facts.
- **Existential Depth**: Enhance responses for "Why am I here?", "Soul mission", and "Identity in the universe" to be deep, grounded, and wise.
- **Tone & Flow**: Implement a "calm and flowing" delivery style, avoiding logic gaps or repetitive phrases.

### [Component] Symbolic 'Uchawi' Knowledge & Card
- **New Dashboard Card**: Add a card for "Uchawi" (Symbolic Energy) to the diagnosis result.
- **Symbolic Interpretation**: Frame the results as internal states, fears, or challenges rather than physical witchcraft.
- **Strict Safety Rules**: Implement guardrails to never confirm witchcraft, never create paranoia, and use educational/psychological framing.
- **Mandatory 5-Step Structure for Uchawi**:
    1. **Ufafanuzi wa Dhana (Neutral & Educational)**
    2. **Mtazamo wa Kiimani / Kimaandiko** (Quran/Bible)
    3. **Mtazamo wa Kisaikolojia / Kibinadamu**
    4. **Tafsiri ya Kiishara (Symbolic Interpretation)**
    5. **Mwongozo wa Usalama (Grounding Insight)**

### [Component] ChatGPT Backend Server (`server.js`)
- **Node.js Server**: Implemented an Express server to proxy requests to OpenAI.
- **Security**: Uses `.env` to store the API key securely.
- **Dynamic Prompting**: Constructs a detailed system prompt for every request based on the user's profile.

### [Component] Supporting Data (`js/numerology.js`, `js/soul-mission.js`)
- Update descriptions to provide more "Scientific/Systemic" and "Spiritual" hooks for the chat engine to use.

## Verification Plan

### Manual Verification
- Verify that no restricted files (.gitignore, .gemini, etc.) are referenced or accessed.
- Test the response engine with queries from each of the 5 domains.
- Check that the tone avoids "lazima" or "hakika" as per the safety rules.
- Confirm the 4-step structure is present in every response.
- Check the tone for the "Mixed" balance (e.g., "Inaweza kuelekea kama...", "Katika mifumo ya maarifa...").
- Ensure profile data (Life Path 4, 741 Hz) is still correctly integrated.
- **Uchawi Verification**:
    - Test queries about "uchawi" to ensure the 5-step structure is followed.
    - Verify that the AI never says "umerogwa" or confirms witchcraft.
    - Check that the dashboard card displays a symbolic/educational result.
