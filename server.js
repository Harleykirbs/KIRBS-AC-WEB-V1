<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kirbs AC - Premium FiveM Anti-Cheat Protection</title>
    <script src="https://js.stripe.com/v3/"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%);
            color: #ffffff;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #00d4ff;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #00d4ff;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #00d4ff;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: 
                radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.03) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(120, 119, 198, 0.03) 50%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
        }

        .hero-content {
            z-index: 2;
            position: relative;
            animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #00d4ff, #7777c6, #ffffff);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: none;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from {
                filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
            }
            to {
                filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.6));
            }
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(45deg, #00d4ff, #7777c6);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
        }

        .cta-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .features {
            padding: 100px 0;
            background: rgba(0, 0, 0, 0.1);
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #00d4ff;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            border: 1px solid rgba(0, 212, 255, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #00d4ff, #7777c6);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
            border-color: rgba(0, 212, 255, 0.5);
        }

        .feature-icon {
            font-size: 3rem;
            color: #00d4ff;
            margin-bottom: 1rem;
            display: block;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .pricing {
            padding: 100px 0;
            background: rgba(0, 0, 0, 0.2);
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .pricing-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2.5rem;
            text-align: center;
            border: 1px solid rgba(0, 212, 255, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .pricing-card.featured {
            border-color: #00d4ff;
            box-shadow: 0 0 50px rgba(0, 212, 255, 0.3);
            transform: scale(1.05);
        }

        .pricing-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 30px 60px rgba(0, 212, 255, 0.2);
        }

        .price {
            font-size: 3rem;
            font-weight: bold;
            color: #00d4ff;
            margin: 1rem 0;
        }

        .price-features {
            list-style: none;
            margin: 2rem 0;
            text-align: left;
        }

        .price-features li {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .price-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00d4ff;
            font-weight: bold;
        }

        .stats {
            padding: 100px 0;
            background: rgba(0, 0, 0, 0.1);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }

        .stat-item {
            padding: 2rem;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: #00d4ff;
            display: block;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .stat-label {
            font-size: 1.1rem;
            margin-top: 0.5rem;
            opacity: 0.8;
        }

        footer {
            background: rgba(0, 0, 0, 0.5);
            padding: 3rem 0;
            text-align: center;
            border-top: 1px solid rgba(0, 212, 255, 0.2);
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            color: #00d4ff;
            margin-bottom: 1rem;
        }

        .footer-section a {
            color: #ffffff;
            text-decoration: none;
            display: block;
            margin: 0.5rem 0;
            transition: color 0.3s ease;
            cursor: pointer;
        }

        .footer-section a:hover {
            color: #00d4ff;
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }

        .modal-content {
            background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%);
            margin: 5% auto;
            padding: 2rem;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
        }

        .close {
            color: #ffffff;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 15px;
            transition: color 0.3s ease;
        }

        .close:hover {
            color: #00d4ff;
        }

        .modal h2 {
            color: #00d4ff;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 2rem;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .modal p {
            margin-bottom: 1rem;
            line-height: 1.6;
            color: #ffffff;
        }

        .modal strong {
            color: #00d4ff;
        }

        .policy-section {
            margin-bottom: 2rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border-left: 4px solid #00d4ff;
        }

        /* Payment Modal Styles */
        .payment-modal {
            display: none;
            position: fixed;
            z-index: 2001;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(15px);
        }

        .payment-modal-content {
            background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%);
            margin: 2% auto;
            padding: 2rem;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
        }

        .payment-form {
            margin-top: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #00d4ff;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus {
            outline: none;
            border-color: #00d4ff;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        #card-element {
            padding: 12px 15px;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            transition: border-color 0.3s ease;
        }

        #card-element:focus-within {
            border-color: #00d4ff;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        #card-errors {
            color: #ff4757;
            margin-top: 10px;
            font-size: 14px;
        }

        .payment-summary {
            background: rgba(255, 255, 255, 0.05);
            padding: 1.5rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .loading {
            display: none;
            text-align: center;
            color: #00d4ff;
            margin-top: 1rem;
        }

        .spinner {
            border: 3px solid rgba(0, 212, 255, 0.3);
            border-radius: 50%;
            border-top: 3px solid #00d4ff;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .pricing-card.featured {
                transform: none;
            }

            .modal-content, .payment-modal-content {
                margin: 10% auto;
                width: 95%;
                padding: 1.5rem;
            }
        }

        /* Particles animation */
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            top: 0;
            left: 0;
            z-index: 1;
        }

        .particle {
            position: absolute;
            background: #00d4ff;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            opacity: 0.7;
            animation: float-particle 8s infinite linear;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(100px);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">🛡️ Kirbs AC</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="particles" id="particles"></div>
        <div class="container">
            <div class="hero-content">
                <h1>Kirbs AC FiveM Protection</h1>
                <p>Advanced anti-cheat solution protecting over 10,000+ FiveM servers worldwide</p>
                <a href="#pricing" class="cta-button">Get Protected Now</a>
            </div>
        </div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">Why Choose Kirbs AC?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <span class="feature-icon">⚡</span>
                    <h3>Real-Time Detection</h3>
                    <p>Advanced algorithms detect and block cheats in real-time with 99.9% accuracy rate.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🔒</span>
                    <h3>Advanced Encryption</h3>
                    <p>Military-grade encryption protects your server from reverse engineering and bypasses.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">📊</span>
                    <h3>Detailed Analytics</h3>
                    <p>Comprehensive dashboard with detailed reports and player behavior analytics.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🛠️</span>
                    <h3>Easy Integration</h3>
                    <p>Simple drag-and-drop installation with full documentation and 24/7 support.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🌐</span>
                    <h3>Multi-Server Support</h3>
                    <p>Protect multiple servers with a single license and centralized management.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🔄</span>
                    <h3>Auto Updates</h3>
                    <p>Automatic updates ensure your protection stays ahead of new cheat methods.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <h2 class="section-title">Trusted by hundreds</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">100+</span>
                    <div class="stat-label">Protected Servers</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">90%</span>
                    <div class="stat-label">Detection Rate</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">1000+</span>
                    <div class="stat-label">Cheats Blocked</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <div class="stat-label">Support Available</div>
                </div>
            </div>
        </div>
    </section>

    <section class="pricing" id="pricing">
        <div class="container">
            <h2 class="section-title">Choose Your Protection Level</h2>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Starter</h3>
                    <div class="price">£20<span style="font-size: 1rem;">/month</span></div>
                    <ul class="price-features">
                        <li>1 Month Access</li>
                        <li>All Kirbs AC Features</li>
                        <li>Instant Delivery</li>
                        <li>Live Web Panel</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button class="cta-button purchase-btn" data-plan="starter" data-amount="20" data-title="Starter Plan">Choose Starter</button>
                </div>
                <div class="pricing-card featured">
                    <h3>Quarterly</h3>
                    <div class="price">£40<span style="font-size: 1rem;">/4 Months</span></div>
                    <ul class="price-features">
                        <li>4 Months Access</li>
                        <li>All Kirbs AC Features</li>
                        <li>Instant Delivery</li>
                        <li>Live Web Panel</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button class="cta-button purchase-btn" data-plan="quarterly" data-amount="40" data-title="Quarterly Plan">Choose Pro</button>
                </div>
                <div class="pricing-card">
                    <h3>Lifetime</h3>
                    <div class="price">£80<span style="font-size: 1rem;"></span></div>
                    <ul class="price-features">
                        <li>Lifetime Access</li>
                        <li>Ultimate protection</li>
                        <li>24/7 support</li>
                        <li>Private Giveaways</li>
                        <li>Instant Delivery</li>
                        <li>Live Web Panel</li>
                    </ul>
                    <button class="cta-button purchase-btn" data-plan="lifetime" data-amount="80" data-title="Lifetime Plan">Choose Lifetime</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Payment Modal -->
    <div id="paymentModal" class="payment-modal">
        <div class="payment-modal-content">
            <span class="close" id="closePayment">&times;</span>
            <h2 id="paymentTitle">Complete Your Purchase</h2>
            
            <div class="payment-summary">
                <h3 style="color: #00d4ff; margin-bottom: 10px;">Order Summary</h3>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span id="planName">Starter Plan</span>
                    <span id="planPrice">£20.00</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid rgba(0,212,255,0.3); padding-top: 10px;">
                    <span>Total:</span>
                    <span id="totalPrice">£20.00</span>
                </div>
            </div>

            <form id="payment-form" class="payment-form">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="card-element">Card Details</label>
                    <div id="card-element">
                        <!-- Stripe Elements will create form elements here -->
                    </div>
                    <div id="card-errors" role="alert"></div>
                </div>

                <button type="submit" class="cta-button" id="submit-payment" style="width: 100%; margin-top: 1rem;">
                    <span id="button-text">Complete Payment</span>
                </button>

                <div class="loading" id="loading">
                    <div class="spinner"></div>
                    Processing payment...
                </div>
            </form>
        </div>
    </div>

    <!-- Refund Policy Modal -->
    <div id="refundModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>🚫 Refund Policy</h2>
            
            <div class="policy-section">
                <p><strong>NO REFUNDS POLICY</strong></p>
                <p>All sales of Kirbs AC anti-cheat software are final. By purchasing our product, you acknowledge and agree that <strong>no refunds will be provided</strong> under any circumstances.</p>
            </div>

            <div class="policy-section">
                <p><strong>Why No Refunds?</strong></p>
                <p>Due to the digital nature of our anti-cheat software and the immediate access provided upon purchase, we operate under a strict no-refund policy. This protects both our intellectual property and ensures fair usage of our service.</p>
            </div>

            <div class="policy-section">
                <p><strong>Before You Purchase</strong></p>
                <p>We strongly encourage you to:</p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>• Review all product features and compatibility requirements</li>
                    <li>• Contact our support team with any questions via Discord</li>
                    <li>• Ensure your server meets all technical requirements</li>
                    <li>• Understand the licensing terms and conditions</li>
                </ul>
            </div>

            <div class="policy-section">
                <p><strong>Technical Support</strong></p>
                <p>While we don't offer refunds, we provide comprehensive technical support to ensure you can successfully use our product. Our support team is available 24/7 via Discord to help resolve any issues.</p>
            </div>

            <div class="policy-section">
                <p><strong>Exceptional Circumstances</strong></p>
                <p>In very rare cases where there are significant technical issues that cannot be resolved and are directly caused by our software, we may consider exceptions to this policy at our sole discretion.</p>
            </div>

            <div class="policy-section">
                <p><strong>Contact Information</strong></p>
                <p>For any questions about this policy or technical support, please contact us through our Discord community or support channels.</p>
            </div>

            <div class="policy-section">
                <p><strong>Agreement</strong></p>
                <p>By purchasing Kirbs AC, you acknowledge that you have read, understood, and agree to this no-refund policy.</p>
            </div>
        </div>
    </div>

    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Kirbs AC</h3>
                    <p>One of The most trusted FiveM anti-cheat solution, protecting servers worldwide since 2025.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#">Documentation</a>
                    <a href="#">API</a>
                </div>