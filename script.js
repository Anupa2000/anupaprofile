document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.6 // Section is considered active when 60% is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the section is intersecting (mostly visible)
      if (entry.isIntersecting) {
        // First, mark all sections as blurred
        sections.forEach(sec => {
          sec.classList.remove('active');
          sec.classList.add('blur');
        });
        // Then, highlight the visible section
        entry.target.classList.add('active');
        entry.target.classList.remove('blur');
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach(section => observer.observe(section));
});



  