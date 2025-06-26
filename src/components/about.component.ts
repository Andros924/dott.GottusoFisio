import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Chi Sono</h2>
            <h3>Dr. Gianluca Gottuso</h3>
            <p class="lead">
              Fisioterapista specializzato con anni di esperienza nel campo della riabilitazione e del benessere fisico.
            </p>
            <div class="about-details">
              <div class="detail-item">
                <div class="icon">🎓</div>
                <div>
                  <h4>Formazione Specialistica</h4>
                  <p>Laurea in Fisioterapia con specializzazioni in tecniche manuali avanzate</p>
                </div>
              </div>
              <div class="detail-item">
                <div class="icon">💼</div>
                <div>
                  <h4>Esperienza Professionale</h4>
                  <p>Anni di pratica clinica con pazienti di tutte le età</p>
                </div>
              </div>
              <div class="detail-item">
                <div class="icon">🏆</div>
                <div>
                  <h4>Approccio Personalizzato</h4>
                  <p>Ogni trattamento è studiato specificamente per le esigenze del paziente</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-wrapper">
              <img src="assets/gianlu.jpg" alt="Dr. Gianluca Gottuso nel suo studio" />
              <div class="overlay">
                <div class="overlay-content">
                  <h4>Il tuo benessere è la mia priorità</h4>
                  <p>Insieme troveremo la strada per il tuo recupero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: #f8fafc;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }
    
    .about-text h2 {
      font-size: 3rem;
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 16px;
    }
    
    .about-text h3 {
      font-size: 1.5rem;
      color: #1f2937;
      margin-bottom: 24px;
      font-weight: 600;
    }
    
    .lead {
      font-size: 1.25rem;
      color: #6b7280;
      margin-bottom: 40px;
      line-height: 1.7;
    }
    
    .about-details {
      margin-bottom: 40px;
    }
    
    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .detail-item .icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #2563eb, #0ea5e9);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .detail-item h4 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    .detail-item p {
      color: #6b7280;
      line-height: 1.6;
    }
    
    .about-image {
      position: relative;
    }
    
    .image-wrapper {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
    
    .image-wrapper img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      padding: 40px 32px 32px;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    
    .image-wrapper:hover .overlay {
      transform: translateY(0);
    }
    
    .overlay-content h4 {
      color: white;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .overlay-content p {
      color: rgba(255, 255, 255, 0.9);
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .about-text h2 {
        font-size: 2.5rem;
      }
      
      .detail-item {
        text-align: left;
      }
    }
  `]
})
export class AboutComponent {}