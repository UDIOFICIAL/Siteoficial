// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.nome || !data.email || !data.mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Obrigado pelo contacto.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.album-card, .show-item, .social-card, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Add active link styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #e74c3c !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-img');
    
    if (heroImg && scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Social media links (placeholder - replace with actual URLs)
const socialLinks = {
    spotify: 'https://open.spotify.com/artist/your-artist-id',
    instagram: 'https://instagram.com/udi_oficial',
    youtube: 'https://youtube.com/@udi_oficial',
    facebook: 'https://facebook.com/udi.oficial',
    tiktok: 'https://tiktok.com/@udi_oficial',
    twitter: 'https://twitter.com/udi_oficial'
};

// Update social media links
document.addEventListener('DOMContentLoaded', () => {
    // Header social links
    const headerSpotify = document.querySelector('.nav-social .fa-spotify').parentElement;
    const headerInstagram = document.querySelector('.nav-social .fa-instagram').parentElement;
    const headerYoutube = document.querySelector('.nav-social .fa-youtube').parentElement;
    
    if (headerSpotify) headerSpotify.href = socialLinks.spotify;
    if (headerInstagram) headerInstagram.href = socialLinks.instagram;
    if (headerYoutube) headerYoutube.href = socialLinks.youtube;
    
    // Hero section buttons
    const heroSpotifyBtn = document.querySelector('.hero-buttons .fa-spotify').parentElement;
    if (heroSpotifyBtn) heroSpotifyBtn.href = socialLinks.spotify;
    
    // Footer and contact social links
    const footerSocialLinks = document.querySelectorAll('.footer-section a, .social-card');
    footerSocialLinks.forEach(link => {
        const text = link.textContent.toLowerCase().trim();
        if (socialLinks[text]) {
            link.href = socialLinks[text];
        }
    });
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect (uncomment to enable)
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         setTimeout(() => {
//             typeWriter(heroTitle, originalText, 150);
//         }, 1000);
//     }
// });

console.log('ÚDI Website loaded successfully! 🎵');

