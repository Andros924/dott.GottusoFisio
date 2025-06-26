import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="animated-bg-1"></div>
        <div class="animated-bg-2"></div>
        <div class="animated-bg-3"></div>
      </div>
      
      <div class="particles">
        <div class="particle" *ngFor="let particle of particles" 
             [style.left.%]="particle.x" 
             [style.animation-delay.s]="particle.delay">
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" [class.animate]="isLoaded">
            <div class="welcome-badge">
              <span class="pulse-dot"></span>
              Fisioterapista Professionale
            </div>
            <h1>
              <span class="name-highlight">Dr. Gianluca Gottuso</span><br>
              <span class="main-text">Ritrova il tuo <span class="highlight">benessere</span></span><br>
              <span class="sub-text">con trattamenti personalizzati</span>
            </h1>
            <p class="hero-description">
              Specializzato in fisioterapia ortopedica, riabilitazione sportiva e terapie manuali avanzate. 
              Il mio approccio personalizzato ti aiuterà a raggiungere i tuoi obiettivi di salute e benessere.
            </p>
            <div class="hero-buttons">
              <a href="#contact" class="btn btn-primary btn-glow">
                <span class="btn-text">Prenota Consulenza Gratuita</span>
                <span class="btn-icon">→</span>
              </a>
              <a href="#about" class="btn btn-secondary">
                <span class="play-icon">▶</span>
                Scopri di più
              </a>
            </div>
          </div>
          
          <div class="hero-image" [class.animate]="isLoaded">
            <div class="image-wrapper">
              <div class="floating-elements">
                <div class="floating-element element-1">
                  <span class="icon">🏥</span>
                </div>
                <div class="floating-element element-2">
                  <span class="icon">💪</span>
                </div>
                <div class="floating-element element-3">
                  <span class="icon">🎯</span>
                </div>
                <div class="floating-element element-4">
                  <span class="icon">❤️</span>
                </div>
              </div>
              <div class="image-glow"></div>
              <img src="assets/hero-gianlu.png" alt="Dr. Gianluca Gottuso - Fisioterapista Professionale" />
              <div class="image-overlay">
                <div class="overlay-badge">
                  <span class="badge-icon">⭐</span>
                  <div class="badge-text">
                    <strong>Eccellenza</strong>
                    <span>Nei Trattamenti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" [class.show]="isLoaded">
        <div class="scroll-text">Scorri per esplorare</div>
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #ecfdf5 70%, #fefce8 100%);
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.6;
    }
    
    .animated-bg-1,
    .animated-bg-2,
    .animated-bg-3 {
      position: absolute;
      border-radius: 50%;
      animation: float 8s ease-in-out infinite;
    }
    
    .animated-bg-1 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }
    
    .animated-bg-2 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
      bottom: 20%;
      right: 15%;
      animation-delay: 2s;
    }
    
    .animated-bg-3 {
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
      top: 60%;
      left: 60%;
      animation-delay: 4s;
    }
    
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: linear-gradient(45deg, #3b82f6, #10b981);
      border-radius: 50%;
      animation: particle-float 12s linear infinite;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      padding: 140px 0 80px;
      position: relative;
      z-index: 2;
    }
    
    .hero-text {
      opacity: 0;
      transform: translateY(50px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .hero-text.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .welcome-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(37, 99, 235, 0.1);
      color: #2563eb;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 24px;
      border: 1px solid rgba(37, 99, 235, 0.2);
    }
    
    .pulse-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse-dot 2s infinite;
    }
    
    .hero-text h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 24px;
      color: #1f2937;
    }
    
    .name-highlight {
      background: linear-gradient(135deg, #2563eb, #0ea5e9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: block;
      font-size: 2rem;
      margin-bottom: 8px;
    }
    
    .main-text {
      display: block;
      margin-bottom: 8px;
    }
    
    .highlight {
      background: linear-gradient(135deg, #10b981, #059669);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .sub-text {
      display: block;
      font-size: 2.5rem;
      color: #6b7280;
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: #6b7280;
      margin-bottom: 40px;
      line-height: 1.7;
    }
    
    .hero-buttons {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .btn-glow {
      position: relative;
      overflow: hidden;
    }
    
    .btn-glow::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .btn-glow:hover::before {
      left: 100%;
    }
    
    .btn-text {
      position: relative;
      z-index: 1;
    }
    
    .btn-icon {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }
    
    .btn-primary:hover .btn-icon {
      transform: translateX(4px);
    }
    
    .play-icon {
      margin-right: 8px;
      font-size: 0.875rem;
    }
    
    .hero-image {
      position: relative;
      opacity: 0;
      transform: translateX(50px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    }
    
    .hero-image.animate {
      opacity: 1;
      transform: translateX(0);
    }
    
    .image-wrapper {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      transform: perspective(1000px) rotateY(-5deg);
      transition: transform 0.6s ease;
    }
    
    .image-wrapper:hover {
      transform: perspective(1000px) rotateY(0deg) scale(1.02);
    }
    
    .image-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      right: -50%;
      bottom: -50%;
      background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%);
      z-index: -1;
      animation: glow-pulse 4s ease-in-out infinite;
    }
    
    .image-wrapper img {
      width: 100%;
      height: auto;
      display: block;
      filter: brightness(1.05) contrast(1.1);
    }
    
    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
    
    .floating-element {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      animation: float-elements 6s ease-in-out infinite;
      backdrop-filter: blur(10px);
    }
    
    .element-1 {
      top: 15%;
      right: -30px;
      animation-delay: 0s;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(255, 255, 255, 0.9));
    }
    
    .element-2 {
      bottom: 30%;
      left: -30px;
      animation-delay: 1.5s;
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(255, 255, 255, 0.9));
    }
    
    .element-3 {
      top: 50%;
      right: -20px;
      animation-delay: 3s;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9));
    }
    
    .element-4 {
      bottom: 15%;
      left: -20px;
      animation-delay: 4.5s;
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(255, 255, 255, 0.9));
    }
    
    .image-overlay {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      padding: 16px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease 1s;
    }
    
    .hero-image.animate .image-overlay {
      opacity: 1;
      transform: translateY(0);
    }
    
    .overlay-badge {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .badge-icon {
      font-size: 1.5rem;
      color: #f59e0b;
    }
    
    .badge-text strong {
      display: block;
      color: #1f2937;
      font-weight: 600;
    }
    
    .badge-text span {
      color: #6b7280;
      font-size: 0.875rem;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      text-align: center;
      opacity: 0;
      transition: opacity 0.8s ease 1.5s;
    }
    
    .scroll-indicator.show {
      opacity: 1;
    }
    
    .scroll-text {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    .scroll-arrow {
      width: 24px;
      height: 24px;
      border-right: 2px solid #2563eb;
      border-bottom: 2px solid #2563eb;
      transform: rotate(45deg);
      margin: 0 auto;
      animation: bounce 2s infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    
    @keyframes float-elements {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    
    @keyframes particle-float {
      0% { 
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% { 
        opacity: 1;
      }
      90% { 
        opacity: 1;
      }
      100% { 
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }
    
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.2); }
    }
    
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
      40% { transform: translateY(-10px) rotate(45deg); }
      60% { transform: translateY(-5px) rotate(45deg); }
    }
    
    @media (max-width: 1024px) {
      .hero-content {
        gap: 60px;
      }
      
      .hero-text h1 {
        font-size: 3rem;
      }
      
      .sub-text {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
        padding: 120px 0 60px;
      }
      
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .name-highlight {
        font-size: 1.75rem;
      }
      
      .sub-text {
        font-size: 1.75rem;
      }
      
      .hero-description {
        font-size: 1rem;
      }
      
      .hero-buttons {
        justify-content: center;
        flex-direction: column;
        align-items: stretch;
      }
      
      .hero-buttons .btn {
        text-align: center;
      }
      
      .floating-element {
        width: 50px;
        height: 50px;
        font-size: 1.25rem;
      }
      
      .image-wrapper {
        transform: perspective(1000px) rotateY(0deg);
      }
    }
  `]
})
export class HeroComponent implements OnInit, AfterViewInit {
  isLoaded = false;
  particles: Array<{x: number, delay: number}> = [];

  ngOnInit() {
    // Genera particelle casuali
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * 100,
        delay: Math.random() * 8
      });
    }
  }

  ngAfterViewInit() {
    // Trigger delle animazioni dopo che la vista è caricata
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }
}