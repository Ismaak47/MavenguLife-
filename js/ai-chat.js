/* AI Chat - OpenAI Integrated Version */

const AIChat = {
    userProfile: null,
    chatContainer: null,
    inputField: null,
    history: [],

    init: function (profile) {
        this.userProfile = profile;
        this.chatContainer = document.getElementById('chat-messages');
        this.inputField = document.getElementById('user-input');

        if (this.chatContainer.children.length <= 1) {
            this.addMessage(`Karibu katika mzunguko wa maarifa, ${profile.name}. Mimi ni Mavengu, kiongozi wako katika safari hii ya kujitambua. Nipo hapa kufafanua siri za ulimwengu zilizojificha katika frequency yako ya ${profile.sunFreq} na Life Path ${profile.lifePath}. Safari yako ya kujitambua inaanza na swali lolote ulilo nalo moyoni. Tunaweza kuanza na nini?`, 'bot');
        }
    },

    handleInput: async function () {
        const message = this.inputField.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.inputField.value = '';
        this.showTyping();

        console.log("Sending message to Mavengu Server...", message);
        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: message,
                    profile: this.userProfile
                })
            });

            console.log("Response received from server:", response.status);

            const data = await response.json();
            this.removeTyping();

            if (data.reply) {
                this.addMessage(data.reply, 'bot');
                this.history.push({ user: message, bot: data.reply });
                if (this.history.length > 5) this.history.shift();
            } else {
                this.addMessage("Samahani, kuna tatizo katika kuunganisha na mfumo wa Mavengu.", 'bot');
            }
        } catch (error) {
            this.removeTyping();
            this.addMessage("Samahani, seva ya Mavengu haipatikani kwa sasa. Tafadhali hakikisha seva inafanya kazi.", 'bot');
            console.error("Chat error:", error);
        }
    },

    addMessage: function (text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender} animate-fade-in`;
        // Basic markdown-like formatting for bold text
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = formattedText.replace(/\n/g, '<br>');
        this.chatContainer.appendChild(msgDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    },

    showTyping: function () {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.textContent = 'Mavengu anachota maarifa ya kiulimwengu...';
        this.chatContainer.appendChild(typingDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    },

    removeTyping: function () {
        const typingDiv = document.getElementById('typing-indicator');
        if (typingDiv) typingDiv.remove();
    }
};

window.AIChat = AIChat;
