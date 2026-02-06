  document.getElementById('year').textContent = new Date().getFullYear();

        // mobile toggle
        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('primaryMenu');
        toggle && toggle.addEventListener('click', () => {
            const open = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        // highlight active nav item on hash change and initial load
        function updateActive() {
            const links = document.querySelectorAll('.menu a');
            links.forEach(a => {
                const href = a.getAttribute('href') || '';
                const normalized = href.replace(/^#/, '');
                const current = location.hash.replace(/^#/, '') || 'home';
                a.classList.toggle('active', normalized === current);
            });
        }
        window.addEventListener('hashchange', updateActive);
        window.addEventListener('load', updateActive);

        // close mobile menu when link is clicked (mobile)
        document.querySelectorAll('#primaryMenu a').forEach(a => a.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                toggle && toggle.setAttribute('aria-expanded', 'false');
            }
        }));


        // ...existing code...
// animate about progress bars when section appears
(function () {
  const about = document.getElementById('about');
  if (!about) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bars = entry.target.querySelectorAll('.progress-bar[data-value]');
      bars.forEach(bar => {
        const v = Number(bar.dataset.value) || 0;
        bar.style.width = v + '%';
        bar.setAttribute('aria-valuenow', String(v));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  observer.observe(about);
})();

var typed = new Typed('#auto-type', {
  strings: [
    'PHP Developer', 
    'UI/UX Designer (Figma)', 
    'Web Development Student'
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    
    // 1. Hide the loader
    loader.classList.add("loader-hidden");
    
    // 2. Enable scrolling again
    document.body.style.overflow = "auto";
    
    // Optional: Remove loader from DOM entirely after fade-out for performance
    setTimeout(() => {
        loader.style.display = "none";
    }, 600); 
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close-modal");

    // Select all images inside certificate items
    const certImages = document.querySelectorAll(".cert-item img");

    certImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = 'hidden'; // Stop scrolling
        });
    });

    // Close the modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close on background click
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    };
});