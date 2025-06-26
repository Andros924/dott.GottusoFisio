import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-brand">
              <h3>Dr. Gianluca Gottuso</h3>
              <p>Fisioterapista Professionale</p>
              <p class="tagline">Il tuo benessere è la mia priorità</p>
            </div>
            
            <div class="footer-section">
              <h4>Contatti</h4>
              <div class="contact-item">
                <span class="icon">📍</span>
                <span>Via della Salute, 123<br>00100 Roma (RM)</span>
              </div>
              <div class="contact-item">
                <span class="icon">📞</span>
                <a href="tel:+393331234567">+39 333 123 4567</a>
              </div>
              <div class="contact-item">
                <span class="icon">✉️</span>
                <a href="mailto:gianlucagottusofisio&#64;gmail.com">gianlucagottusofisio&#64;gmail.com</a>
              </div>
            </div>
            
            <div class="footer-section">
              <h4>Orari di Apertura</h4>
              <div class="schedule-item">
                <span>Lunedì - Venerdì</span>
                <span>8:00 - 20:00</span>
              </div>
              <div class="schedule-item">
                <span>Sabato</span>
                <span>8:00 - 13:00</span>
              </div>
              <div class="schedule-item">
                <span>Domenica</span>
                <span>Chiuso</span>
              </div>
            </div>
            
            <div class="footer-section">
              <h4>Seguimi</h4>
              <div class="social-links">
                <a href="https://www.instagram.com/gianlucagottusofisioterapista/" 
                   target="_blank" 
                   class="social-link instagram">
                  <span class="icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/dottgianlucagottusofisioterpista" 
                   target="_blank" 
                   class="social-link facebook">
                  <span class="icon">👥</span>
                  <span>Facebook</span>
                </a>
                <a href="https://wa.me/393331234567" 
                   target="_blank" 
                   class="social-link whatsapp">
                  <span class="icon">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} Dr. Gianluca Gottuso. Tutti i diritti riservati.</p>
            <div class="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Termini di Servizio</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e293b 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .footer-content {
      position: relative;
      z-index: 1;
      padding: 60px 0 40px;
    }
    
    .footer-main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    
    .footer-brand h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #60a5fa;
    }
    
    .footer-brand p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 4px;
    }
    
    .tagline {
      font-style: italic;
      color: #34d399 !important;
      font-weight: 500;
    }
    
    .footer-section h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #f0f9ff;
    }
    
    .contact-item,
    .schedule-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }
    
    .schedule-item {
      justify-content: space-between;
      align-items: center;
    }
    
    .contact-item .icon {
      font-size: 1.125rem;
      opacity: 0.8;
    }
    
    .contact-item a,
    .schedule-item span {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .contact-item a:hover {
      color: #60a5fa;
    }
    
    .social-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .social-link:hover {
      transform: translateX(5px);
      background: rgba(255, 255, 255, 0.1);
    }
    
    .social-link.instagram:hover {
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      border-color: transparent;
    }
    
    .social-link.facebook:hover {
      background: #1877f2;
      border-color: transparent;
    }
    
    .social-link.whatsapp:hover {
      background: #25d366;
      border-color: transparent;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 24px 0;
    }
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .footer-bottom p {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
    
    .legal-links {
      display: flex;
      gap: 24px;
    }
    
    .legal-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }
    
    .legal-links a:hover {
      color: #60a5fa;
    }
    
    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
    }
    
    @media (max-width: 768px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 32px;
        text-align: center;
      }
      
      .footer-content {
        padding: 40px 0 32px;
      }
      
      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }
      
      .legal-links {
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .schedule-item {
        justify-content: center;
        gap: 24px;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}