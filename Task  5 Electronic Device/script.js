function showDeviceInfo(deviceName) {
    const deviceDetails = {
        MobilePhone: {
            description: "A mobile phone is a portable device for making calls, sending texts, and accessing the internet.",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange gradient
            icon: "📱"
        },
        Laptop: {
            description: "A laptop is a personal computer designed for portability, often used for work or study.",
            background: "linear-gradient(135deg, #43cea2, #185a9d)", // Blue-green gradient
            icon: "💻"
        },
        Desktop: {
            description: "A desktop is a personal computer designed for regular use at a single location.",
            background: "linear-gradient(135deg, #ff6a00, #ee0979)", // Red gradient
            icon: "🖥️"
        },
        Tablet: {
            description: "A tablet is a portable touch-screen device ideal for reading, browsing, and light work.",
            background: "linear-gradient(135deg, #8e44ad, #3498db)", // Purple-blue gradient
            icon: "📟"
        },
        SmartWatch: {
            description: "A smartwatch is a wearable device that offers notifications, fitness tracking, and more.",
            background: "linear-gradient(135deg, #f7971e, #ffd200)", // Yellow gradient
            icon: "⌚"
        }
    };

    const deviceInfo = deviceDetails[deviceName] || {
        description: "No description available for this device.",
        background: "linear-gradient(135deg, #bdc3c7, #2c3e50)", // Default gray gradient
        icon: "❓"
    };

    const newTab = window.open("", "_blank");
    newTab.document.write(`
        <html>
            <head>
                <title>${deviceName}</title>
                <style>
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: ${deviceInfo.background};
                        color: white;
                        text-align: center;
                        animation: fadeIn 1s ease-in-out;
                    }

                    .content {
                        background: rgba(255, 255, 255, 0.2);
                        padding: 30px 40px;
                        border-radius: 15px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                        animation: fadeIn 1s ease-in-out;
                    }

                    h1 {
                        font-size: 3rem;
                        margin: 0;
                        padding-bottom: 10px;
                        display: inline-block;
                        position: relative;
                    }

                    h1 span {
                        display: block;
                        font-size: 4rem;
                        margin-top: 10px;
                        animation: fadeIn 2s ease-in-out;
                    }

                    p {
                        font-size: 1.5rem;
                        margin-top: 20px;
                        animation: fadeIn 1.5s ease-in-out;
                    }

                    .back-btn {
                        margin-top: 30px;
                        padding: 10px 20px;
                        font-size: 1rem;
                        border: none;
                        background: #ff7e5f;
                        color: white;
                        border-radius: 5px;
                        cursor: pointer;
                        animation: fadeIn 2s ease-in-out;
                        transition: background 0.3s ease;
                    }

                    .back-btn:hover {
                        background: #feb47b;
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>${deviceName} <span>${deviceInfo.icon}</span></h1>
                    <p>${deviceInfo.description}</p>
                    <button class="back-btn" onclick="window.close()">Go Back</button>
                </div>
            </body>
        </html>
    `);
}
