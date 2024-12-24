// const listItems = document.querySelectorAll('.skills ul li');

// listItems.forEach(listItem => {
//   listItem.addEventListener('mouseover', () => {
//     listItem.style.transform = 'scale(1.05)';
//     listItem.style.backgroundColor = '#faf5f5';
//     listItem.style.color = '#fff';
//     listItem.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
//     listItem.style.borderRadius = '10px';
//   });

//   listItem.addEventListener('mouseout', () => {
//     listItem.style.transform = 'scale(1)';
//     listItem.style.backgroundColor = 'transparent'; // Or your original background color
//     listItem.style.color = 'inherit'; // Or your original color
//     listItem.style.boxShadow = 'none';
//     listItem.style.borderRadius = '0'; // Or your original border-radius
//   });
// });

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
    listItem.style.transform = 'translateY(0) scale(1)'; // Reset translateY
    listItem.style.backgroundColor = 'transparent'; 
    listItem.style.color = 'inherit'; 
    listItem.style.boxShadow = 'none';
    listItem.style.borderRadius = '0'; 
  });
});

const linkedinBadges = document.querySelectorAll('.certifications ul li');

linkedinBadges.forEach(linkedinBadge => {
  linkedinBadge.addEventListener('mouseover', () => {
    linkedinBadge.style.transition = 'all 0.3s ease-in-out';
    linkedinBadge.style.transform = 'translateY(-5px) scale(1.05)'; 
    linkedinBadge.style.backgroundColor = '#faf5f5';
    linkedinBadge.style.color = '#fff';
    linkedinBadge.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    linkedinBadge.style.borderRadius = '10px';
  });

  linkedinBadge.addEventListener('mouseout', () => {
    linkedinBadge.style.transition = 'all 0.3s ease-in-out';
    linkedinBadge.style.transform = 'translateY(0) scale(1)'; 
    linkedinBadge.style.backgroundColor = 'transparent'; 
    linkedinBadge.style.color = 'inherit'; 
    linkedinBadge.style.boxShadow = 'none';
    linkedinBadge.style.borderRadius = '0'; 
  });
});

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