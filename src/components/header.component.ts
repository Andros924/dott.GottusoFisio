import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class]="'header ' + (isScrolled ? 'scrolled' : '')">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <h2>Dr. Gianluca Gottuso</h2>
            <span>Fisioterapista</span>
          </div>
          
          <div class="nav-links" [class.active]="isMenuOpen">
            <a href="#home" (click)="closeMenu()">Home</a>
            <a href="#about" (click)="closeMenu()">Chi Sono</a>
            <a href="#services" (click)="closeMenu()">Servizi</a>
            <a href="#instagram" (click)="closeMenu()">Instagram</a>
            <a href="#contact" (click)="closeMenu()">Contatti</a>
          </div>
          
          <div class="mobile-menu-toggle" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      padding: 16px 0;
    }
    
    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      padding: 12px 0;
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo h2 {
      color: #2563eb;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
    
    .logo span {
      color: #6b7280;
      font-size: 14px;
      font-weight: 500;
    }
    
    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #374151;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }
    
    .nav-links a:hover {
      color: #2563eb;
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #2563eb;
      transition: width 0.3s ease;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 8px;
    }
    
    .mobile-menu-toggle span {
      width: 25px;
      height: 3px;
      background: #374151;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 50px;
        transition: left 0.3s ease;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      }
      
      .nav-links.active {
        left: 0;
      }
      
      .nav-links a {
        font-size: 18px;
        padding: 16px 0;
      }
      
      .mobile-menu-toggle {
        display: flex;
      }
      
      .logo h2 {
        font-size: 20px;
      }
      
      .logo span {
        font-size: 12px;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}