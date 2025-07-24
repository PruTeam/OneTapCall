function triggerCall(phoneNumber) {
    // Attempt to open WhatsApp app
    const whatsappURL = `whatsapp://calluser/?phone=${phoneNumber}&autoload=1&app_absent=0`;

    // Try to open WhatsApp app directly
    const now = Date.now();
    window.location.href = whatsappURL;

    // Fallback: if WhatsApp doesn't open in 2s, open dialer
    setTimeout(() => {
        if (Date.now() - now < 1500) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }, 1000);
}
