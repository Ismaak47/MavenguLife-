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

### [Component] Safe Knowledge Architecture

#### [MODIFY] [ai-chat.js](file:///c:/Users/mms/Downloads/MavenguLife/MavenguLife-/js/ai-chat.js)
- **Logical Reference Integration**: Refactor the internal `library` to strictly follow the `/knowledge-base/` logical structure (`world`, `human`, `harmonics`, `astrology`, `numerology`).
- **Strict Access Compliance**: Ensure the code never attempts to access real file system paths for knowledge, treating the structure as a conceptual schema only.
- **Enhanced Response Engine**: Refine the 4-step engine to strictly adhere to the "Ufafanuzi, Mtazamo wa Kimfumo, Mtazamo wa Fahamu, Tafakari" flow.
- **Tone & Safety Guardrails**: Implement the "Mixed" tone (spiritual + scientific + philosophical) and ensure no absolute terms or medical/legal advice are provided.

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
