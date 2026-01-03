/* MAVENGU Configuration */

const MavenguConfig = {
    // API Configuration
    api: {
        gemini: {
            key: 'AIzaSyB4Y-ccwj6s0EYS0Z0uZwIg67d5wPntmRc',
            model: 'gemini-1.5-flash'
        },
        maxRetries: 3,
        timeout: 30000 // 30 seconds
    },

    // Feature Flags
    features: {
        aiEnabled: true,
        fallbackToRules: true,
        debugMode: false,
        showAPIStatus: true
    },

    // Chat Configuration
    chat: {
        maxHistoryLength: 10,
        typingDelay: 1500,
        maxResponseLength: 2000
    },

    // System Settings
    system: {
        language: 'sw', // Swahili
        responseFormat: 'structured',
        safetyLevel: 'strict'
    }
};

// Export to window
window.MavenguConfig = MavenguConfig;
