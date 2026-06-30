  const defaultConfig = {
      business_name: "Aquaflow Plumbing",
      tagline: "Reliable. Professional. Local Plumber You Can Trust.",
      phone_number: "(360) 948-6585",
      services_title: "My Services",
      benefits_title: "Why Choose Me",
      contact_title: "Contact & Location",
      service_area: "Serving Kitsap County & Surrounding Areas",
      email: "info@aquaflowplumbing.us",
      background_color: "#F8FBFD",
      primary_color: "#0c4a6e",
      accent_color: "#0ea5e9",
      text_color: "#475569",
      button_color: "#00B8A9",
      font_family: "Open Sans",
      font_size: 16
    };

    async function onConfigChange(config) {
      // Update text content
      document.getElementById('businessName').textContent = config.business_name || defaultConfig.business_name;
      document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
      document.getElementById('phoneDisplay').textContent = config.phone_number || defaultConfig.phone_number;
      document.getElementById('servicesTitle').textContent = config.services_title || defaultConfig.services_title;
      document.getElementById('benefitsTitle').textContent = config.benefits_title || defaultConfig.benefits_title;
      document.getElementById('contactTitle').textContent = config.contact_title || defaultConfig.contact_title;
      document.getElementById('businessNameFooter').textContent = config.business_name || defaultConfig.business_name;
      
      // Update colors
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const primaryColor = config.primary_color || defaultConfig.primary_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const buttonColor = config.button_color || defaultConfig.button_color;
      
      // Apply background colors
      document.getElementById('services').style.backgroundColor = backgroundColor;
      document.getElementById('about').style.backgroundColor = backgroundColor;
      document.getElementById('contact').style.backgroundColor = backgroundColor;
      
      // Apply primary colors (headings, navigation)
      document.querySelectorAll('.section-title, .header-text, .nav-links a, .service-card h3').forEach(el => {
        el.style.color = primaryColor;
      });
      
      // Apply accent colors (hero gradient, buttons)
      document.querySelector('#home').style.background = `linear-gradient(180deg, ${primaryColor} 0%, ${accentColor} 40%, ${accentColor} 100%)`;
      document.querySelectorAll('.cta-button').forEach(el => {
        el.style.backgroundColor = accentColor;
      });
      
      // Apply text colors
      document.querySelectorAll('.about-text-content p, .service-area-text, .benefit-card p').forEach(el => {
        el.style.color = textColor;
      });
      
      // Apply button colors
      document.querySelectorAll('.quote-button, .floating-review-btn, .back-to-top, .contact-icon, .benefit-icon').forEach(el => {
        el.style.backgroundColor = buttonColor;
      });
      
      // Update fonts
      const customFont = config.font_family || defaultConfig.font_family;
      const baseSize = config.font_size || defaultConfig.font_size;
      const baseFontStack = 'Arial, sans-serif';
      
      // Apply custom font to primary text
      document.querySelectorAll('h1, h2, h3, .tagline, .hero-content, .section-title').forEach(el => {
        el.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      // Apply font sizing
      document.querySelector('#businessName').style.fontSize = `${baseSize * 2.8}px`;
      document.querySelectorAll('.section-title').forEach(el => {
        el.style.fontSize = `${baseSize * 1.75}px`;
      });
      document.querySelectorAll('p, .tagline').forEach(el => {
        el.style.fontSize = `${baseSize}px`;
      });
      document.querySelectorAll('.service-card h3, .benefit-card h3').forEach(el => {
        el.style.fontSize = `${baseSize * 0.9}px`;
      });
    }

    /*function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.primary_color || defaultConfig.primary_color,
            set: (value) => {
              config.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            }
          },
          {
            get: () => config.accent_color || defaultConfig.accent_color,
            set: (value) => {
              config.accent_color = value;
              window.elementSdk.setConfig({ accent_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.button_color || defaultConfig.button_color,
            set: (value) => {
              config.button_color = value;
              window.elementSdk.setConfig({ button_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }*/

    function mapToEditPanelValues(config) {
      return new Map([
        ["business_name", config.business_name || defaultConfig.business_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["phone_number", config.phone_number || defaultConfig.phone_number],
        ["services_title", config.services_title || defaultConfig.services_title],
        ["benefits_title", config.benefits_title || defaultConfig.benefits_title],
        ["contact_title", config.contact_title || defaultConfig.contact_title],
        ["service_area", config.service_area || defaultConfig.service_area],
        ["email", config.email || defaultConfig.email]
      ]);
    }

    /*// Initialize Element SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }*/

    // Mobile menu toggle
    function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
      });
    });

    // Modal functions
    function openModal() {
      document.getElementById('serviceModal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('serviceModal').classList.remove('active');
      document.getElementById('successMessage').style.display = 'none';
    }

    // Close modal when clicking outside
    document.getElementById('serviceModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Form submission
    document.getElementById('serviceForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
      
      // Reset form
      this.reset();
      
      // Close modal after 2 seconds
      setTimeout(() => {
        closeModal();
      }, 2000);
    });

    // Service Details Data
    const serviceDetails = {
      'water-heater': {
        title: 'Water Heater Installation & Repair',
        icon: '🔥',
        description: 'Whether you need a brand new water heater installed or your current one repaired, I\'ve got you covered. I work with all types of water heaters including traditional tank models and modern tankless systems. I\'ll help you choose the right size and type for your home, ensuring you have reliable hot water when you need it. I offer same-day service for most repairs and can typically complete installations within a day.'
      },
      'faucet': {
        title: 'Faucet Installation & Repair',
        icon: '🚰',
        description: 'From dripping faucets to complete replacements, I handle all your faucet needs. A leaky faucet isn\'t just annoying, it wastes water and money. I can repair or replace kitchen faucets, bathroom sink faucets, and outdoor spigots. Whether you\'re upgrading to a modern touchless model or need a quick fix for a worn-out washer, I\'ll get the job done right the first time.'
      },
      toilet: {
    title: 'Toilet Installation & Repair',
    icon: '🚽',
    description: 'Toilet running constantly, not flushing correctly, or leaking? I diagnose and repair all types of toilet issues quickly and reliably. Whether it’s a standard model, a low-flow upgrade, or a comfort-height design, I handle repairs and full replacements with precision. Most jobs are completed in a single visit so your bathroom is back to normal fast.'
},
      'shower': {
        title: 'Shower Repair',
        icon: '🚿',
        description: 'Don\'t let shower problems ruin your day. I fix all types of shower issues including low water pressure, temperature control problems, leaking shower heads, and faulty valves. Whether you have a traditional shower, a combination tub-shower, or a modern walk-in shower, I have the tools and knowledge to restore it to perfect working condition. I can also upgrade your shower fixtures to give your bathroom a fresh new look.'
      },
      'water-pipe': {
        title: 'Water Pipe Repair & Replacement',
        icon: '💧',
        description: 'Water pipe problems can cause serious damage if not addressed quickly. I specialize in locating and repairing leaks, replacing corroded pipes, and upgrading old plumbing systems. Whether you have a burst pipe emergency or want to replace aging galvanized pipes with modern materials, I use the latest techniques to minimize disruption to your home. I work with all kinds of pipe to ensure long-lasting, reliable results.'
      },
      'drain-pipe': {
        title: 'Drain Pipe Repair & Replacement',
        icon: '🔧',
        description: 'Slow drains and clogs are more than just inconvenient, they can indicate serious problems with your drain pipes. I provide professional drain cleaning, repair damaged drain lines, and replace old or broken pipes. I use professional-grade drain snakes for in-home drain cleaning and clog removal. I can clear most blockages safely and efficiently without unnecessary digging or damage.'
      },
      'general': {
        title: 'General Plumbing Repair',
        icon: '🛠️',
        description: 'Not every plumbing problem fits into a neat category, and that\'s okay! My general plumbing services cover everything from garbage disposal repairs to sump pump maintenance, pressure regulator adjustments to fixture replacements. No job is too small or too unusual. I\'ve seen it all and can diagnose and fix just about any plumbing issue you might encounter in your home.'
      },
      'emergency': {
        title: 'Emergency Plumbing Services',
        icon: '🚨',
        description: 'Plumbing emergencies don\'t wait for business hours, and neither do I. I offer 24/7 emergency plumbing services for those urgent situations that can\'t wait: burst pipes, severe leaks, backed-up sewers, and no hot water in winter. When you call me for an emergency, I respond quickly to minimize damage to your property. My truck is fully stocked with common parts and tools so I can often resolve your emergency in a single visit, even in the middle of the night.'
      }
    };

    // Photo counts for each service
    // Photo URLs for each service
const servicePhotos = {
  'water-heater': [
    "https://aquaflowplumbing.us/images/IMG_0040-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_3884.jpg",
    "https://aquaflowplumbing.us/images/IMG_3594-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_0309-1.jpg"
  ],

  'faucet': [
    "https://aquaflowplumbing.us/images/IMG_2516.webp",
    "https://aquaflowplumbing.us/images/IMG_2520.webp"
  ],

  'toilet': [
    "https://aquaflowplumbing.us/images/IMG_2471-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_0761-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_0057-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_0056-1.jpg",
    "https://aquaflowplumbing.us/images/IMG_4222.webp"
  ],

  'shower': [
     "https://aquaflowplumbing.us/images/IMG_2547.webp",
     "https://aquaflowplumbing.us/images/IMG_2473.webp",
     "https://aquaflowplumbing.us/images/IMG_2472.webp",
     "https://aquaflowplumbing.us/images/IMG_0205 (1).webp"
  ],

  'water-pipe': [
     "https://aquaflowplumbing.us/images/Screenshot-2025-11-14-180818.png",
     "https://aquaflowplumbing.us/images/IMG_8702-1.jpg",
     "https://aquaflowplumbing.us/images/IMG_0345-1.jpg",
     "https://aquaflowplumbing.us/images/IMG_0082-1.jpg"
  ],

  'drain-pipe': [
     "https://aquaflowplumbing.us/images/IMG_0078.webp",
     "https://aquaflowplumbing.us/images/IMG_1882.webp",
     "https://aquaflowplumbing.us/images/IMG_2543.webp",
     "https://aquaflowplumbing.us/images/IMG_4207-1.jpg"
  ],

  'general': [
    "https://aquaflowplumbing.us/images/IMG_3586 - Copy.webp",
    "https://aquaflowplumbing.us/images/IMG_3590 - Copy.webp",
    "https://aquaflowplumbing.us/images/Screenshot 2025-11-14 180430.webp"
  ],

  'emergency': [] // intentionally empty
};


    // Show Service Detail
function showServiceDetail(serviceId) {
    const service = serviceDetails[serviceId];
    if (!service) return;

    const photos = servicePhotos[serviceId] || [];

    // Build gallery HTML
    let galleryHTML = "";
    photos.forEach(url => {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${url}" style="width:100%; border-radius:12px;">
            </div>
        `;
    });

    // ⭐ Add Facebook link inside the popup (this is the safe correct spot)
    galleryHTML += `
        <div class="more-photos" style="text-align:center; margin-top:1.5rem;">
            <a href="https://www.facebook.com/AquaflowPlumbingBrandonS"
               target="_blank"
               class="facebook-btn"
               style="display:inline-block; padding:10px 20px; background:#00B8A9; color:white; border-radius:8px; text-decoration:none; font-weight:600;">
               See More Photos on Facebook
            </a>
        </div>
    `;

    // Insert into popup
    const detailBody = document.getElementById("serviceDetailBody");
    detailBody.innerHTML = `
        <h2 class="service-detail-title">${service.icon} ${service.title}</h2>
        <p class="service-detail-description">${service.description}</p>

        <div class="service-gallery">
            ${galleryHTML}
        </div>
    `;

    // Show popup
    document.getElementById("serviceDetailOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
}


    // Close Service Detail
    function closeServiceDetail() {
      document.getElementById('serviceDetailOverlay').classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    // Close detail when clicking outside
    document.getElementById('serviceDetailOverlay').addEventListener('click', function(e) {
      if (e.target === this) {
        closeServiceDetail();
      }
    });

    // Back to Top Button functionality
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }