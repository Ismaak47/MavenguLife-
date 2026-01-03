/* Gemini API Integration for MAVENGU */

const GeminiAPI = {
    conversationHistory: [],
    isInitialized: false,

    /**
     * Initialize the API service
     */
    init: function () {
        if (!window.MavenguConfig) {
            console.error('MavenguConfig not loaded');
            return false;
        }
        this.isInitialized = true;
        console.log('Gemini API initialized');
        return true;
    },

    /**
     * Send a message to Gemini AI
     */
    sendMessage: async function (userMessage, userProfile) {
        if (!this.isInitialized) {
            this.init();
        }

        const config = window.MavenguConfig;

        // Build the full prompt with system instructions
        const systemPrompt = window.MavenguSystemPrompt.generatePrompt(userProfile);

        // Prepare the conversation context
        const conversationContext = this.buildConversationContext(userMessage, systemPrompt);

        try {
            const response = await this.callGeminiAPI(conversationContext);

            // Add to history
            this.conversationHistory.push({
                role: 'user',
                content: userMessage
            });
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            // Limit history length
            if (this.conversationHistory.length > config.chat.maxHistoryLength * 2) {
                this.conversationHistory = this.conversationHistory.slice(-config.chat.maxHistoryLength * 2);
            }

            return {
                success: true,
                response: response,
                source: 'ai'
            };

        } catch (error) {
            console.error('Gemini API Error:', error);
            return {
                success: false,
                error: error.message,
                source: 'error'
            };
        }
    },

    /**
     * Build conversation context for API call
     */
    buildConversationContext: function (userMessage, systemPrompt) {
        const messages = [];

        // Add conversation history
        if (this.conversationHistory.length > 0) {
            this.conversationHistory.forEach(msg => {
                messages.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                });
            });
        }

        // Add current message with system prompt
        const fullUserMessage = this.conversationHistory.length === 0
            ? `${systemPrompt}\n\n---\n\nMTUMIAJI: ${userMessage}`
            : userMessage;

        messages.push({
            role: 'user',
            parts: [{ text: fullUserMessage }]
        });

        return messages;
    },

    /**
     * Call Gemini API
     */
    callGeminiAPI: async function (messages) {
        const config = window.MavenguConfig;
        const apiKey = config.api.gemini.key;
        const model = config.api.gemini.model || 'gemini-1.5-flash-latest';
        const endpoint = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

        const requestBody = {
            contents: messages,
            generationConfig: {
                temperature: 0.9,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2000,
            },
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
            ]
        };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();

            if (!data.candidates || data.candidates.length === 0) {
                throw new Error('No response from AI');
            }

            const aiResponse = data.candidates[0].content.parts[0].text;
            return aiResponse;

        } catch (error) {
            console.error('API Call Error:', error);
            throw error;
        }
    },

    /**
     * Clear conversation history
     */
    clearHistory: function () {
        this.conversationHistory = [];
        console.log('Conversation history cleared');
    },

    /**
     * Check if API is available
     */
    isAvailable: function () {
        return this.isInitialized && window.MavenguConfig.features.aiEnabled;
    }
};

// Export to window
window.GeminiAPI = GeminiAPI;
