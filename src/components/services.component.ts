import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2>I Miei Servizi</h2>
          <p>Trattamenti personalizzati per il tuo benessere fisico</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">
              <span [innerHTML]="service.icon"></span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">{{ feature }}</li>
            </ul>
          </div>
        </div>
        
        <div class="cta-section">
          <h3>Hai bisogno di una consulenza personalizzata?</h3>
          <p>Contattami per una valutazione gratuita del tuo caso</p>
          <a href="#contact" class="btn btn-primary">Prenota Consulenza Gratuita</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }
    
    .section-header {
      margin-bottom: 60px;
    }
    
    .section-header h2 {
      font-size: 3rem;
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 16px;
    }
    
    .section-header p {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
    
    .service-card {
      background: white;
      border-radius: 20px;
      padding: 40px 32px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      border-color: #2563eb;
    }
    
    .service-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #2563eb, #0ea5e9);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      font-size: 2.5rem;
    }
    
    .service-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 16px;
    }
    
    .service-card > p {
      color: #6b7280;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    
    .service-features {
      list-style: none;
      text-align: left;
    }
    
    .service-features li {
      color: #374151;
      margin-bottom: 12px;
      position: relative;
      padding-left: 24px;
    }
    
    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
    
    .cta-section {
      text-align: center;
      background: white;
      border-radius: 20px;
      padding: 60px 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .cta-section h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 16px;
    }
    
    .cta-section p {
      font-size: 1.125rem;
      color: #6b7280;
      margin-bottom: 32px;
    }
    
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .service-card {
        padding: 32px 24px;
      }
      
      .section-header h2 {
        font-size: 2.5rem;
      }
      
      .cta-section {
        padding: 40px 24px;
      }
      
      .cta-section h3 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🦴',
      title: 'Fisioterapia Ortopedica',
      description: 'Trattamento specializzato per disturbi muscoloscheletrici e post-traumatici.',
      features: [
        'Valutazione funzionale completa',
        'Terapia manuale specializzata',
        'Esercizi terapeutici personalizzati',
        'Rieducazione posturale'
      ]
    },
    {
      icon: '🏃‍♂️',
      title: 'Riabilitazione Sportiva',
      description: 'Recupero funzionale per atleti e sportivi di ogni livello.',
      features: [
        'Prevenzione degli infortuni',
        'Recupero post-infortunio',
        'Ottimizzazione della performance',
        'Programmi specifici per sport'
      ]
    },
    {
      icon: '🧘‍♀️',
      title: 'Terapia Posturale',
      description: 'Correzione dei disturbi posturali e del dolore cronico.',
      features: [
        'Analisi posturale avanzata',
        'Rieducazione motoria',
        'Stretching terapeutico',
        'Educazione posturale'
      ]
    },
    {
      icon: '💆‍♂️',
      title: 'Terapia Manuale',
      description: 'Tecniche manuali avanzate per il sollievo dal dolore.',
      features: [
        'Mobilizzazioni articolari',
        'Massaggio terapeutico',
        'Release miofasciale',
        'Tecniche osteopatiche'
      ]
    },
    {
      icon: '🎯',
      title: 'Riabilitazione Neurologica',
      description: 'Supporto specializzato per disturbi del sistema nervoso.',
      features: [
        'Rieducazione neuromotoria',
        'Miglioramento dell\'equilibrio',
        'Coordinazione motoria',
        'Prevenzione delle cadute'
      ]
    },
    {
      icon: '👴',
      title: 'Fisioterapia Geriatrica',
      description: 'Cure specializzate per il benessere degli anziani.',
      features: [
        'Mantenimento dell\'autonomia',
        'Prevenzione della fragilità',
        'Gestione del dolore cronico',
        'Programmi di attività fisica'
      ]
    }
  ];
}