import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section-padding">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            <span class="badge-icon">📞</span>
            Contatti
          </div>
          <h2>Prenota la tua consulenza</h2>
          <p>Inizia il tuo percorso verso il benessere. Contattami per una valutazione personalizzata gratuita.</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-card location">
              <div class="card-icon">
                <span>📍</span>
              </div>
              <div class="card-content">
                <h3>Studio Professionale</h3>
                <p>Via della Salute, 123<br>00100 Roma (RM)</p>
                <span class="card-note">Facilmente raggiungibile</span>
              </div>
            </div>
            
            <div class="info-card phone">
              <div class="card-icon">
                <span>📞</span>
              </div>
              <div class="card-content">
                <h3>Chiamami Ora</h3>
                <p><a href="tel:+393331234567">+39 333 123 4567</a></p>
                <span class="card-note">Disponibile tutti i giorni</span>
              </div>
            </div>
            
            <div class="info-card email">
              <div class="card-icon">
                <span>✉️</span>
              </div>
              <div class="card-content">
                <h3>Scrivi una Email</h3>
                <p><a href="mailto:gianlucagottusofisio&#64;gmail.com">gianlucagottusofisio&#64;gmail.com</a></p>
                <span class="card-note">Risposta entro 24h</span>
              </div>
            </div>
            
            <div class="info-card schedule">
              <div class="card-icon">
                <span>🕒</span>
              </div>
              <div class="card-content">
                <h3>Orari di Apertura</h3>
                <div class="schedule-details">
                  <div class="schedule-item">
                    <span>Lun-Ven</span>
                    <span>8:00 - 20:00</span>
                  </div>
                  <div class="schedule-item">
                    <span>Sabato</span>
                    <span>8:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="emergency-card">
              <div class="emergency-icon">🚨</div>
              <div class="emergency-content">
                <h3>Urgenze</h3>
                <p>Per urgenze fuori orario, contattami su WhatsApp</p>
                <a href="https://wa.me/393331234567" class="btn btn-whatsapp" target="_blank">
                  <span class="icon">💬</span> 
                  Contatto Urgente
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <div class="form-header">
              <h3>Richiedi una Consulenza Gratuita</h3>
              <p>Compila il form e ti ricontatterò entro 24 ore per fissare un appuntamento</p>
            </div>
            
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="consultation-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name" 
                    required 
                    #name="ngModel"
                    class="form-control"
                    [class.error]="name.invalid && name.touched"
                    placeholder="Es. Mario Rossi"
                  />
                  <span class="error-message" *ngIf="name.invalid && name.touched">
                    Il nome è obbligatorio
                  </span>
                </div>
                
                <div class="form-group">
                  <label for="phone">Telefono *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone" 
                    required
                    #phone="ngModel"
                    class="form-control"
                    [class.error]="phone.invalid && phone.touched"
                    placeholder="Es. +39 333 123 4567"
                  />
                  <span class="error-message" *ngIf="phone.invalid && phone.touched">
                    Il telefono è obbligatorio
                  </span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required 
                  email
                  #email="ngModel"
                  class="form-control"
                  [class.error]="email.invalid && email.touched"
                  placeholder="Es. mario.rossi@email.com"
                />
                <span class="error-message" *ngIf="email.invalid && email.touched">
                  Inserisci un'email valida
                </span>
              </div>
              
              <div class="form-group">
                <label for="service">Servizio di Interesse</label>
                <select 
                  id="service" 
                  name="service" 
                  [(ngModel)]="formData.service" 
                  class="form-control"
                >
                  <option value="">Seleziona il servizio che ti interessa</option>
                  <option value="fisioterapia-ortopedica">Fisioterapia Ortopedica</option>
                  <option value="riabilitazione-sportiva">Riabilitazione Sportiva</option>
                  <option value="terapia-posturale">Terapia Posturale</option>
                  <option value="terapia-manuale">Terapia Manuale</option>
                  <option value="riabilitazione-neurologica">Riabilitazione Neurologica</option>
                  <option value="fisioterapia-geriatrica">Fisioterapia Geriatrica</option>
                  <option value="consulenza-generale">Consulenza Generale</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Descrivi il tuo problema *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message" 
                  required
                  #message="ngModel"
                  rows="4" 
                  class="form-control"
                  [class.error]="message.invalid && message.touched"
                  placeholder="Descrivi brevemente il tuo problema, i sintomi che avverti o la tipologia di trattamento di cui hai bisogno..."
                ></textarea>
                <span class="error-message" *ngIf="message.invalid && message.touched">
                  La descrizione è obbligatoria
                </span>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="privacy" 
                    [(ngModel)]="formData.privacy" 
                    required
                    #privacy="ngModel"
                  />
                  <span class="checkmark"></span>
                  <span class="checkbox-text">
                    Accetto il trattamento dei dati personali secondo la 
                    <a href="#privacy" target="_blank">Privacy Policy</a> e autorizzo 
                    l'uso dei miei dati per essere ricontattato *
                  </span>
                </label>
                <span class="error-message" *ngIf="privacy.invalid && privacy.touched">
                  È necessario accettare la privacy policy
                </span>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary btn-submit"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting" class="btn-content">
                  <span class="btn-icon">📩</span>
                  Invia Richiesta di Consulenza
                </span>
                <span *ngIf="isSubmitting" class="btn-loading">
                  <span class="loading-spinner"></span>
                  Invio in corso...
                </span>
              </button>
              
              <div class="form-status" *ngIf="submitStatus">
                <div class="success-message" *ngIf="submitStatus === 'success'">
                  <span class="status-icon">✅</span>
                  <div class="status-content">
                    <strong>Richiesta inviata con successo!</strong>
                    <p>Ti ricontatterò entro 24 ore per confermare l'appuntamento.</p>
                  </div>
                </div>
                <div class="error-message" *ngIf="submitStatus === 'error'">
                  <span class="status-icon">❌</span>
                  <div class="status-content">
                    <strong>Si è verificato un errore</strong>
                    <p>Riprova o contattami direttamente al numero sopra indicato.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ecfdf5 100%);
    }
    
    .section-header {
      margin-bottom: 60px;
    }
    
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(16, 185, 129, 0.1);
      color: #059669;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 16px;
      border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    .badge-icon {
      font-size: 1rem;
    }
    
    .section-header h2 {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #2563eb, #10b981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .section-header p {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }
    
    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      background: white;
      padding: 24px;
      border-radius: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid rgba(16, 185, 129, 0.1);
    }
    
    .info-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
      border-color: rgba(16, 185, 129, 0.3);
    }
    
    .card-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.5rem;
    }
    
    .card-content h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    .card-content p {
      color: #374151;
      line-height: 1.5;
      margin-bottom: 4px;
    }
    
    .card-content a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
    }
    
    .card-content a:hover {
      text-decoration: underline;
    }
    
    .card-note {
      color: #10b981;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .schedule-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .schedule-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #374151;
      font-size: 0.875rem;
    }
    
    .schedule-item span:first-child {
      font-weight: 500;
    }
    
    .emergency-card {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      border: 2px solid #f59e0b;
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(245, 158, 11, 0.15);
    }
    
    .emergency-icon {
      font-size: 2rem;
      margin-bottom: 12px;
    }
    
    .emergency-content h3 {
      color: #92400e;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .emergency-content p {
      color: #78350f;
      margin-bottom: 16px;
      font-size: 0.875rem;
    }
    
    .btn-whatsapp {
      background: linear-gradient(135deg, #25d366, #22c55e);
      color: white;
      font-size: 0.875rem;
    }
    
    .btn-whatsapp:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
    }
    
    .contact-form {
      background: white;
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(37, 99, 235, 0.1);
    }
    
    .form-header {
      text-align: center;
      margin-bottom: 32px;
    }
    
    .form-header h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    .form-header p {
      color: #6b7280;
      font-size: 0.875rem;
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-group label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
    }
    
    .form-control {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 16px;
      transition: all 0.3s ease;
      background: #f9fafb;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #2563eb;
      background: white;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    
    .form-control.error {
      border-color: #ef4444;
      background: #fef2f2;
    }
    
    .form-control::placeholder {
      color: #9ca3af;
    }
    
    .error-message {
      color: #ef4444;
      font-size: 14px;
      margin-top: 6px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .success-message,
    .error-message.status {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      border-radius: 12px;
      margin-top: 20px;
    }
    
    .success-message {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
    }
    
    .error-message.status {
      background: #fef2f2;
      border: 1px solid #fecaca;
    }
    
    .status-icon {
      font-size: 1.25rem;
      flex-shrink: 0;
    }
    
    .status-content strong {
      display: block;
      margin-bottom: 4px;
      color: #1f2937;
    }
    
    .status-content p {
      color: #6b7280;
      font-size: 0.875rem;
      margin: 0;
    }
    
    .checkbox-group {
      border-top: 1px solid #e5e7eb;
      padding-top: 20px;
    }
    
    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.5;
    }
    
    .checkbox-label input[type="checkbox"] {
      margin: 0;
      opacity: 0;
      position: absolute;
    }
    
    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid #d1d5db;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: white;
      transition: all 0.3s ease;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark {
      background: #2563eb;
      border-color: #2563eb;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
      content: '✓';
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
    
    .checkbox-text {
      color: #374151;
    }
    
    .checkbox-text a {
      color: #2563eb;
      text-decoration: none;
    }
    
    .checkbox-text a:hover {
      text-decoration: underline;
    }
    
    .btn-submit {
      width: 100%;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      margin-top: 8px;
      position: relative;
      overflow: hidden;
    }
    
    .btn-submit:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
    
    .btn-content,
    .btn-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .btn-icon {
      font-size: 1.125rem;
    }
    
    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 1024px) {
      .contact-content {
        gap: 40px;
      }
      
      .contact-form {
        padding: 32px;
      }
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
      
      .contact-form {
        padding: 24px;
      }
      
      .section-header h2 {
        font-size: 2.5rem;
      }
      
      .info-card {
        padding: 20px;
      }
      
      .card-icon {
        width: 50px;
        height: 50px;
        font-size: 1.25rem;
      }
    }
  `]
})
export class ContactComponent {
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  };

  constructor() {
    // Inizializza EmailJS con le tue credenziali
    if (typeof emailjs !== 'undefined') {
      emailjs.init('your_public_key_here'); // Sostituisci con la tua chiave pubblica EmailJS
    }
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = null;

    try {
      // Simula l'invio email (sostituisci con la configurazione EmailJS reale)
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        phone: this.formData.phone,
        service: this.formData.service || 'Non specificato',
        message: this.formData.message,
        to_email: 'gianlucagottusofisio@gmail.com'
      };

      // Invia email tramite EmailJS (configurazione necessaria)
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(
          'your_service_id', // Sostituisci con il tuo Service ID
          'your_template_id', // Sostituisci con il tuo Template ID
          templateParams
        );
      }

      // Per ora simula successo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.submitStatus = 'success';
      this.resetForm();
      
      // Scroll per mostrare il messaggio di successo
      setTimeout(() => {
        const statusElement = document.querySelector('.form-status');
        if (statusElement) {
          statusElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
    } catch (error) {
      console.error('Errore invio email:', error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: false
    };
  }
}