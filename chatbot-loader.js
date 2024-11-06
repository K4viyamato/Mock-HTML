(function() {
  window.SalesWinChatbot = {
    init: function(config) {
      const { token } = config;
      
      const chatbotContainer = document.createElement('div');
      chatbotContainer.id = 'saleswin-chatbot-root';
      
      const iframe = document.createElement('iframe');
      iframe.src = `http://localhost:5173/?token=${token}`;
      iframe.style.cssText = `
        border: none;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        background: transparent;
      `;
      
      chatbotContainer.appendChild(iframe);
      document.body.appendChild(chatbotContainer);
    }
  };
})();
