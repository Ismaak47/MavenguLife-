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

### [Component] Supporting Data (`js/numerology.js`, `js/soul-mission.js`)
- Update descriptions to provide more "Scientific/Systemic" and "Spiritual" hooks for the chat engine to use.

## Verification Plan

### Manual Verification
- Test with "Deep Consciousness" questions like "Maana ya maisha ni nini?".
- Verify that every response follows the 4-step structure.
- Check the tone for the "Mixed" balance (e.g., "Inaweza kuelekea kama...", "Katika mifumo ya maarifa...").
- Ensure profile data (Life Path 4, 741 Hz) is still correctly integrated.
