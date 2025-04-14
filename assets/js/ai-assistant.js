const aiInput = document.getElementById('ai-input');
const sendMessage = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// AI chat functionality
sendMessage.addEventListener('click', sendAiMessage);
aiInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendAiMessage();
    }
});

// Send AI message
function sendAiMessage() {
    const message = aiInput.value.trim();
    if (!message) return;

    // Add user message
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);

    // Clear input
    aiInput.value = '';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate AI response after delay
    setTimeout(() => {
        // Remove typing indicator
        chatMessages.removeChild(typingIndicator);

        // Add AI response
        const aiResponse = getAiResponse(message);
        const aiMessageElement = document.createElement('div');
        aiMessageElement.classList.add('message', 'bot');
        aiMessageElement.textContent = aiResponse;
        chatMessages.appendChild(aiMessageElement);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

// Get AI response (simplified for demo)
function getAiResponse(message) {
    const responses = [
        "I'll look into that for you right away.",
        "Based on your current projects, I recommend prioritizing the bathroom renovation this week.",
        "I've analyzed your schedule and noticed there's a potential conflict next Tuesday.",
        "The team has completed 45% of the current project, which is on track with our timeline.",
        "Would you like me to schedule a follow-up call with the client?",
        "I've updated the job status in our system.",
        "The latest estimate has been sent to the client via email.",
        "Based on historical data, this job should take approximately 12-15 business days to complete.",
        "I've noticed a pattern in client inquiries - would you like me to prepare a report?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}