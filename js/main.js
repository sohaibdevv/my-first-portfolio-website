const heroImg = document.querySelector('.hero-img');

heroImg.addEventListener('mouseover', () => {
  heroImg.style.transition = 'all 0.5s ease-in-out';
  heroImg.style.transform = 'scale(1.05)'; 
  heroImg.style.borderRadius = '90%'; // Change border-radius on hover
});

heroImg.addEventListener('mouseout', () => {
  heroImg.style.transition = 'all 0.5s ease-in-out';
  heroImg.style.transform = 'scale(1)'; 
  heroImg.style.borderRadius = '60% 40% 30% 70%/60% 30% 70% 40%'; // Reset border-radius
})

const listItems = document.querySelectorAll('.skills ul li');

listItems.forEach(listItem => {
  listItem.addEventListener('mouseover', () => {
    listItem.style.transition = 'all 0.3s ease-in-out'; 
    listItem.style.transform = 'translateY(-5px) scale(1.05)'; // Add translateY(-5px)
    listItem.style.backgroundColor = '#faf5f5';
    listItem.style.color = '#fff';
    listItem.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    listItem.style.borderRadius = '10px';
  });

  listItem.addEventListener('mouseout', () => {
    listItem.style.transition = 'all 0.3s ease-in-out';
    listItem.style.transform = 'translateY(0) scale(1)'; // Reset translateY // Reset translateY
    listItem.style.backgroundColor = 'transparent'; 
    listItem.style.color = 'inherit'; 
    listItem.style.boxShadow = 'none';
    listItem.style.borderRadius = '0'; 
  });
});

const linkedinBadges = document.querySelectorAll('.certifications ul li');

linkedinBadges.forEach(credlyBadge => {
  credlyBadge.addEventListener('mouseover', () => {
    credlyBadge.style.transition = 'all 0.3s ease-in-out';
    credlyBadge.style.transform = 'translateY(-5px) scale(1.05)'; 
    credlyBadge.style.backgroundColor = '#faf5f5';
    credlyBadge.style.color = '#fff';
    credlyBadge.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    credlyBadge.style.borderRadius = '10px';
  });

  credlyBadge.addEventListener('mouseout', () => {
    credlyBadge.style.transition = 'all 0.3s ease-in-out';
    credlyBadge.style.transform = 'translateY(0) scale(1)'; 
    credlyBadge.style.backgroundColor = 'transparent'; 
    credlyBadge.style.color = 'inherit'; 
    credlyBadge.style.boxShadow = 'none';
    credlyBadge.style.borderRadius = '0'; 
  });
});

// Get the rotating element
const rotatingElement = document.querySelector('.img-side span img');

// Define the animation keyframes
const rotateAnimation = 
  `@keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`;

// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.textContent = rotateAnimation;
document.head.appendChild(styleElement);

// Start the animation (if needed, as it will already be running)
// rotatingElement.style.animationPlayState = 'running';

const socialLinks = document.querySelectorAll('.footerb__socials a');

socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'all 0.2s ease-in-out'; 
    link.style.transform = 'scale(1.1)';
    link.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.15)'; 
  });

  link.addEventListener('mouseout', () => {
    link.style.transition = 'all 0.2s ease-in-out'; 
    link.style.transform = 'scale(1)';
    link.style.boxShadow = 'none'; 
  });
});