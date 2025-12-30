# Upgrade: Autonomous & Intelligent Chat Guide (Mavengu)

This plan overhauls the `ai-chat.js` logic to move away from rigid keyword matching and toward a more fluid, conversational experience. The goal is to make Mavengu feel like a deep, insightful guide that can explain complex cosmic concepts simply and autonomously.

## User Review Required

> [!IMPORTANT]
> The AI will now track the "context" of the conversation. If you say "sijaelewa" (I don't understand), it will attempt to simplify the *last* topic discussed badala ya kurudia swali lile lile.

## Proposed Changes

### [Component] AI Chat Engine

#### [MODIFY] [ai-chat.js](file:///c:/Users/mms/Downloads/Mavengu%20life/js/ai-chat.js)
- **Add Context Tracking**: Introduce `this.lastTopic` to remember what was just explained.
- **Improve Intent Parsing**:
    - Handle "continue" (endelea) by providing deeper layers of the current topic.
    - Handle "don't understand" (sijaelewa) by simplifying the explanation.
    - Handle "tell me more" (niambie zaidi) by expanding on the current theme.
- **Expanded Knowledge Library**:
    - Add detailed sections for **Resonance vs Dissonance**.
    - Add detailed sections for **The Harmonic Series** in nature.
    - Add detailed sections for **Consciousness and the Human System**.
- **Dynamic Fallback System**: Replace the static default messages with a system that suggests new topics or asks reflective questions based on the user's profile.

## Verification Plan

### Manual Verification
1. **Test Looping Fix**: Ask a question, then say "sijaelewa". Verify the AI explains the concept in simpler terms instead of repeating the question.
2. **Test Continuity**: Ask about vibration, then say "endelea". Verify the AI provides more depth on vibration.
3. **Test Depth**: Ask "Nini maana ya resonance?" and verify a detailed, human-like explanation.
4. **Test Swahili Naturalness**: Ensure the tone remains "Tulivu, yenye hekima, na yenye heshima".
