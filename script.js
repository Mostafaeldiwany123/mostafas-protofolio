document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Global Initializations ---

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- 2. Navigation Smooth Scroll & Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Smooth Scrolling Logic
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior for anchor links
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
            }
        });
    });

    // Mobile Menu Toggle Logic (Kept separate for toggle functionality)
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // --- 3. Hero Title Typing Effect ---
    const titles = [
        "Developer • Content Creator",
        "CIS Student • Cuber",
        "Builder • Innovator"
    ];
    const heroTitleElement = document.getElementById('hero-title-text');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            heroTitleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before next word start
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();


    // --- 4. Chart.js Setup for Tech Stack ---
    // Chart initialization requires Chart.js to be loaded, which the HTML handles via CDN.
    const skillChartElement = document.getElementById('skillChart');
    if (skillChartElement) {
        const ctx = skillChartElement.getContext('2d');
        
        const skillData = {
            labels: ['Frontend', 'Backend Basics', 'AI/Automation', 'Database', 'Design Principles'],
            datasets: [{
                label: 'Proficiency Level (%)',
                data: [90, 65, 80, 55, 75],
                backgroundColor: [
                    'rgba(34, 211, 238, 0.7)', // Cyan
                    'rgba(245, 158, 11, 0.7)', // Amber
                    'rgba(16, 185, 129, 0.7)', // Emerald
                    'rgba(239, 68, 68, 0.7)', // Red
                    'rgba(168, 85, 247, 0.7)'  // Violet
                ],
                borderColor: [
                    'rgba(34, 211, 238, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(168, 85, 247, 1)'
                ],
                borderWidth: 2,
                borderRadius: 10,
                hoverOffset: 10
            }]
        };

        const skillConfig = {
            type: 'bar',
            data: skillData,
            options: {
                responsive: true,
                maintainAspectRatio: false, // Important for fixed height container
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: '#1f2937', // Dark tooltip background
                        titleColor: '#ffffff',
                        bodyColor: '#d1d5db',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#9ca3af', // Gray 400
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(107, 114, 128, 0.3)' // Gray 500 subtle lines
                        }
                    },
                    x: {
                        ticks: {
                            color: '#9ca3af',
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        };

        new Chart(ctx, skillConfig);
    }
});




