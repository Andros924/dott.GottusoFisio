import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="instagram" class="instagram section-padding">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            <span class="badge-icon">📱</span>
            Social
          </div>
          <h2>Seguimi sui Social</h2>
          <p>Consigli quotidiani, esercizi e contenuti esclusivi per il tuo benessere</p>
        </div>
        
        <div class="instagram-content">
          <div class="instagram-main">
            <div class="featured-reel">
              <div class="reel-container">
                <div class="reel-header">
                  <div class="profile-mini">
                    <img src="assets/gianlu.jpg" alt="Dr. Gianluca Gottuso" />
                    <div class="profile-info">
                      <span class="username">&#64;gianlucagottusofisioterapista</span>
                      <span class="verified">✓</span>
                    </div>
                  </div>
                  <div class="reel-live">
                    <span class="live-dot"></span>
                    LIVE
                  </div>
                </div>
                
                <div class="reel-content">
                  <div class="reel-placeholder">
                    <div class="play-button">
                      <span class="play-icon">▶</span>
                    </div>
                    <div class="reel-overlay">
                      <h3>Ultimo Reel</h3>
                      <p>Esercizi di mobilità per la colonna vertebrale</p>
                      <div class="reel-stats">
                        <span>👍 1.2K</span>
                        <span>💬 45</span>
                        <span>🔄 89</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="reel-actions">
                  <a href="https://www.instagram.com/gianlucagottusofisioterapista/reels/" 
                     target="_blank" 
                     class="btn btn-instagram">
                    <span class="icon">📺</span>
                    Guarda tutti i Reel
                  </a>
                </div>
              </div>
            </div>
            
            <div class="social-info">
              <div class="profile-card">
                <div class="profile-image">
                  <img src="assets/gianlu.jpg" alt="Dr. Gianluca Gottuso" />
                  <div class="status-ring"></div>
                </div>
                <div class="profile-details">
                  <h3>&#64;gianlucagottusofisioterapista</h3>
                  <p>Dr. Gianluca Gottuso</p>
                  <span class="badge professional">Fisioterapista Professionale</span>
                </div>
              </div>
              
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-number">2.5K+</span>
                  <span class="stat-label">Followers</span>
                  <div class="stat-icon">👥</div>
                </div>
                <div class="stat-card">
                  <span class="stat-number">150+</span>
                  <span class="stat-label">Post</span>
                  <div class="stat-icon">📸</div>
                </div>
                <div class="stat-card">
                  <span class="stat-number">50+</span>
                  <span class="stat-label">Reels</span>
                  <div class="stat-icon">🎬</div>
                </div>
                <div class="stat-card">
                  <span class="stat-number">95%</span>
                  <span class="stat-label">Engagement</span>
                  <div class="stat-icon">❤️</div>
                </div>
              </div>
              
              <div class="content-preview">
                <h4>Contenuti che trovi sui miei profili:</h4>
                <div class="content-tags">
                  <span class="tag">🏃‍♂️ Esercizi Terapeutici</span>
                  <span class="tag">📚 Educazione Sanitaria</span>
                  <span class="tag">🤸‍♀️ Prevenzione Infortuni</span>
                  <span class="tag">💪 Riabilitazione</span>
                  <span class="tag">🧘‍♂️ Postura Corretta</span>
                  <span class="tag">⚡ Recovery Tips</span>
                </div>
              </div>
              
              <div class="social-buttons">
                <a href="https://www.instagram.com/gianlucagottusofisioterapista/" 
                   target="_blank" 
                   class="btn btn-instagram-main">
                  <span class="icon">📷</span> 
                  <span class="btn-content">
                    <strong>Seguimi su Instagram</strong>
                    <small>Contenuti quotidiani</small>
                  </span>
                </a>
                <a href="https://www.facebook.com/dottgianlucagottusofisioterpista" 
                   target="_blank" 
                   class="btn btn-facebook">
                  <span class="icon">👥</span> 
                  <span class="btn-content">
                    <strong>Seguimi su Facebook</strong>
                    <small>Approfondimenti e articoli</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div class="instagram-feed">
            <h4>Ultimi Post</h4>
            <div class="feed-grid">
              <div class="post-preview" *ngFor="let post of instagramPosts">
                <div class="post-image">
                  <span class="post-icon">{{ post.icon }}</span>
                  <div class="post-overlay">
                    <div class="post-stats">
                      <span>❤️ {{ post.likes }}</span>
                      <span>💬 {{ post.comments }}</span>
                    </div>
                  </div>
                </div>
                <div class="post-info">
                  <p>{{ post.title }}</p>
                  <span class="post-date">{{ post.date }}</span>
                </div>
              </div>
            </div>
            <div class="feed-cta">
              <a href="https://www.instagram.com/gianlucagottusofisioterapista/" 
                 target="_blank" 
                 class="btn btn-outline">
                Vedi tutti i post →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .instagram {
      background: linear-gradient(135deg, #fafafa 0%, #f0f9ff 50%, #fef7ed 100%);
    }
    
    .section-header {
      margin-bottom: 60px;
    }
    
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, rgba(131, 58, 180, 0.1), rgba(253, 29, 29, 0.1));
      color: #833ab4;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 16px;
      border: 1px solid rgba(131, 58, 180, 0.2);
    }
    
    .section-header h2 {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
    }
    
    .section-header p {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .instagram-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-bottom: 60px;
      align-items: start;
    }
    
    .featured-reel {
      background: white;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
    }
    
    .reel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #fafafa;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .profile-mini {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .profile-mini img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .profile-info {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .username {
      font-weight: 600;
      color: #1f2937;
      font-size: 0.875rem;
    }
    
    .verified {
      color: #3b82f6;
      font-size: 0.75rem;
    }
    
    .reel-live {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #ef4444;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    
    .live-dot {
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }
    
    .reel-content {
      aspect-ratio: 9/16;
      position: relative;
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
    }
    
    .reel-placeholder {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      background: rgba(0, 0, 0, 0.3);
    }
    
    .play-button {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #833ab4;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .play-button:hover {
      transform: scale(1.1);
      background: white;
    }
    
    .reel-overlay {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      color: white;
    }
    
    .reel-overlay h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .reel-overlay p {
      font-size: 0.875rem;
      opacity: 0.9;
      margin-bottom: 12px;
    }
    
    .reel-stats {
      display: flex;
      gap: 16px;
      font-size: 0.75rem;
    }
    
    .reel-actions {
      padding: 20px;
      text-align: center;
    }
    
    .btn-instagram {
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      color: white;
      width: 100%;
    }
    
    .profile-card {
      background: white;
      border-radius: 20px;
      padding: 32px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      margin-bottom: 32px;
      position: relative;
    }
    
    .profile-image {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 20px;
    }
    
    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid white;
    }
    
    .status-ring {
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: 3px solid transparent;
      border-radius: 50%;
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      background-clip: border-box;
      animation: rotate 3s linear infinite;
    }
    
    .profile-details h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    .profile-details p {
      color: #6b7280;
      margin-bottom: 12px;
    }
    
    .badge.professional {
      background: linear-gradient(135deg, #2563eb, #0ea5e9);
      color: white;
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .stat-card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #f3f4f6;
      position: relative;
      overflow: hidden;
    }
    
    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
    }
    
    .stat-number {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 4px;
    }
    
    .stat-label {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 8px;
    }
    
    .stat-icon {
      font-size: 1.25rem;
      opacity: 0.6;
    }
    
    .content-preview {
      background: white;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }
    
    .content-preview h4 {
      color: #1f2937;
      font-weight: 600;
      margin-bottom: 16px;
      font-size: 1rem;
    }
    
    .content-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .tag {
      background: linear-gradient(135deg, rgba(131, 58, 180, 0.1), rgba(253, 29, 29, 0.1));
      color: #833ab4;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid rgba(131, 58, 180, 0.2);
    }
    
    .social-buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .btn-instagram-main,
    .btn-facebook {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-radius: 16px;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.875rem;
    }
    
    .btn-instagram-main {
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      color: white;
    }
    
    .btn-facebook {
      background: #1877f2;
      color: white;
    }
    
    .btn-content {
      flex: 1;
      text-align: left;
    }
    
    .btn-content strong {
      display: block;
      margin-bottom: 2px;
    }
    
    .btn-content small {
      opacity: 0.8;
    }
    
    .btn-instagram-main:hover,
    .btn-facebook:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .instagram-feed {
      background: white;
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .instagram-feed h4 {
      color: #1f2937;
      font-weight: 600;
      margin-bottom: 24px;
      font-size: 1.25rem;
    }
    
    .feed-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .post-preview {
      border-radius: 12px;
      overflow: hidden;
      background: #f9fafb;
      transition: transform 0.3s ease;
    }
    
    .post-preview:hover {
      transform: scale(1.05);
    }
    
    .post-image {
      aspect-ratio: 1;
      position: relative;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .post-icon {
      font-size: 2rem;
      opacity: 0.6;
    }
    
    .post-overlay {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .post-preview:hover .post-overlay {
      opacity: 1;
    }
    
    .post-stats {
      display: flex;
      gap: 8px;
    }
    
    .post-info {
      padding: 12px;
    }
    
    .post-info p {
      font-size: 0.875rem;
      color: #374151;
      margin-bottom: 4px;
      font-weight: 500;
    }
    
    .post-date {
      font-size: 0.75rem;
      color: #9ca3af;
    }
    
    .feed-cta {
      text-align: center;
    }
    
    .btn-outline {
      background: transparent;
      color: #833ab4;
      border: 2px solid #833ab4;
      padding: 12px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .btn-outline:hover {
      background: #833ab4;
      color: white;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 1024px) {
      .instagram-main {
        gap: 40px;
      }
      
      .stats-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media (max-width: 768px) {
      .instagram-main {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .reel-content {
        aspect-ratio: 16/9;
      }
      
      .feed-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      
      .section-header h2 {
        font-size: 2.5rem;
      }
      
      .social-buttons {
        gap: 12px;
      }
      
      .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .stat-card {
        padding: 16px;
      }
    }
  `]
})
export class InstagramComponent implements OnInit {
  instagramPosts = [
    { 
      icon: '🏃‍♂️', 
      title: 'Esercizi per Runners', 
      likes: '234', 
      comments: '12',
      date: '2 giorni fa'
    },
    { 
      icon: '🧘‍♀️', 
      title: 'Stretching Mattutino', 
      likes: '189', 
      comments: '8',
      date: '4 giorni fa'
    },
    { 
      icon: '💪', 
      title: 'Rinforzo Core', 
      likes: '312', 
      comments: '24',
      date: '5 giorni fa'
    },
    { 
      icon: '🦴', 
      title: 'Salute Schiena', 
      likes: '267', 
      comments: '16',
      date: '1 settimana fa'
    },
    { 
      icon: '⚡', 
      title: 'Recovery Tips', 
      likes: '145', 
      comments: '7',
      date: '1 settimana fa'
    },
    { 
      icon: '🎯', 
      title: 'Postura Corretta', 
      likes: '198', 
      comments: '11',
      date: '2 settimane fa'
    }
  ];

  ngOnInit() {
    // Qui potresti integrare l'API di Instagram per recuperare i post reali
    // Per ora usiamo dei placeholder con dati statici
  }
}