// Utility function to add hover effects
function addHoverEffect(elements, onEnter, onLeave) {
  elements.forEach(el => {
    el.addEventListener('mouseenter', onEnter.bind(null, el));
    el.addEventListener('mouseleave', onLeave.bind(null, el));
  });
}

// Navigation link hover effect
addHoverEffect(
  document.querySelectorAll('nav li a'),
  (link) => { link.style.color = '#007bff'; },
  (link) => { link.style.color = '#2d2e32'; }
);

// Skills list item hover effect
addHoverEffect(
  document.querySelectorAll('.skills ul li'),
  (li) => {
    li.style.transition = 'all 0.3s ease-in-out';
    li.style.transform = 'translateY(-5px) scale(1.05)';
    // li.style.backgroundColor = '#faf5f5';
    // li.style.color = '#fff';
    // li.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    li.style.borderRadius = '10px';
  },
  (li) => {
    li.style.transition = 'all 0.3s ease-in-out';
    li.style.transform = 'translateY(0) scale(1)';
    li.style.backgroundColor = 'transparent';
    li.style.color = 'inherit';
    li.style.boxShadow = 'none';
    li.style.borderRadius = '0';
  }
);

// Certifications badge hover effect
addHoverEffect(
  document.querySelectorAll('.certifications ul li'),
  (badge) => {
    badge.style.transition = 'all 0.3s ease-in-out';
    badge.style.transform = 'translateY(-5px) scale(1.05)';
    // badge.style.backgroundColor = '#faf5f5';
    // badge.style.color = '#fff';
    // badge.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    badge.style.borderRadius = '10px';
  },
  (badge) => {
    badge.style.transition = 'all 0.3s ease-in-out';
    badge.style.transform = 'translateY(0) scale(1)';
    badge.style.backgroundColor = 'transparent';
    badge.style.color = 'inherit';
    badge.style.boxShadow = 'none';
    badge.style.borderRadius = '0';
  }
);

// Contact icon box hover effect
addHoverEffect(
  document.querySelectorAll('.contact__icon-box span'),
  (span) => {
    span.style.transform = 'scale(1.0)';
    span.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.15)';
  },
  (span) => {
    span.style.transform = 'scale(1)';
    span.style.boxShadow = 'none';
  }
);

// Footer social links hover effect
addHoverEffect(
  document.querySelectorAll('.footerb__socials a'),
  (link) => {
    link.style.transition = 'all 0.1s ease-in-out';
    link.style.transform = 'scale(1.2)';
    link.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.15)';
  },
  (link) => {
    link.style.transition = 'all 0.1s ease-in-out';
    link.style.transform = 'scale(1)';
    link.style.boxShadow = 'none';
  }
);

// Add rotate animation keyframes for rotating element
(function() {
  const rotatingElement = document.querySelector('.img-side span img');
  if (rotatingElement) {
    const rotateAnimation = `
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    const styleElement = document.createElement('style');
    styleElement.textContent = rotateAnimation;
    document.head.appendChild(styleElement);
    // You can apply the animation to the element if needed:
    // rotatingElement.style.animation = 'rotate 2s linear infinite';
  }
})();
