// Mobile menu functionality
function toggleMobileMenu() {
    // This would be implemented for mobile navigation if needed
    console.log('Mobile menu toggle - can be implemented for Google Sites');
}

// Smartphone filtering and sorting
let currentFilter = 'all';
let currentSort = 'name';

function filterPhones(category) {
    currentFilter = category;
    applyFiltersAndSort();
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function sortPhones(sortBy) {
    currentSort = sortBy;
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    const phones = document.querySelectorAll('.smartphone-card');
    const phonesArray = Array.from(phones);
    
    // Filter phones
    phonesArray.forEach(phone => {
        const phoneCategory = phone.dataset.category;
        if (currentFilter === 'all' || phoneCategory === currentFilter) {
            phone.style.display = 'block';
        } else {
            phone.style.display = 'none';
        }
    });
    
    // Sort visible phones
    const visiblePhones = phonesArray.filter(phone => phone.style.display !== 'none');
    const grid = document.getElementById('smartphones-grid');
    
    visiblePhones.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return parseInt(a.dataset.price) - parseInt(b.dataset.price);
            case 'price-high':
                return parseInt(b.dataset.price) - parseInt(a.dataset.price);
            case 'rating':
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            default: // name
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
        }
    });
    
    // Reorder DOM elements
    visiblePhones.forEach(phone => {
        grid.appendChild(phone);
    });
}

// How to Choose Guide functionality
let currentStep = 1;
let completedSteps = new Set();

function showStep(stepNumber) {
    currentStep = stepNumber;
    
    // Hide all step panels
    document.querySelectorAll('.step-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show current step panel
    const currentPanel = document.getElementById(`step-${stepNumber}`);
    if (currentPanel) {
        currentPanel.classList.add('active');
    }
    
    // Update step buttons
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.classList.remove('active');
        const stepNum = parseInt(btn.dataset.step);
        if (stepNum === stepNumber) {
            btn.classList.add('active');
        }
        if (completedSteps.has(stepNum)) {
            btn.classList.add('completed');
        }
    });
    
    // Update navigation
    updateStepNavigation();
    
    // Update progress
    updateProgress();
}

function completeStep(stepNumber) {
    completedSteps.add(stepNumber);
    
    // Update button appearance
    const stepBtn = document.querySelector(`[data-step="${stepNumber}"]`);
    if (stepBtn) {
        stepBtn.classList.add('completed');
    }
    
    // Update the complete button in the step
    const completeBtn = document.querySelector(`#step-${stepNumber} .btn-primary`);
    if (completeBtn) {
        completeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 12 2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
            </svg>
            Виконано
        `;
        completeBtn.style.background = '#16a34a';
    }
    
    updateProgress();
}

function nextStep() {
    if (currentStep < 5) {
        showStep(currentStep + 1);
    }
}

function previousStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

function updateStepNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const stepCounter = document.getElementById('current-step');
    
    if (prevBtn) {
        prevBtn.disabled = currentStep === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentStep === 5;
    }
    
    if (stepCounter) {
        stepCounter.textContent = currentStep;
    }
}

function updateProgress() {
    const progress = (completedSteps.size / 5) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressPercentage) {
        progressPercentage.textContent = `${Math.round(progress)}%`;
    }
}

// Store filtering by city
function filterByCity(city) {
    const stores = document.querySelectorAll('.store-card');
    
    stores.forEach(store => {
        const cities = store.dataset.cities;
        if (city === 'all' || cities.includes(city)) {
            store.style.display = 'block';
        } else {
            store.style.display = 'none';
        }
    });
    
    // Update active city button
    document.querySelectorAll('.city-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Facts filtering by category
function filterFacts(category) {
    const facts = document.querySelectorAll('.fact-card');
    
    facts.forEach(fact => {
        const factCategory = fact.dataset.category;
        if (category === 'all' || factCategory === category) {
            fact.style.display = 'block';
        } else {
            fact.style.display = 'none';
        }
    });
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Survey functionality
function startSurvey() {
    document.getElementById('survey-intro').style.display = 'none';
    document.getElementById('survey-form').style.display = 'block';
}

function cancelSurvey() {
    document.getElementById('survey-intro').style.display = 'block';
    document.getElementById('survey-form').style.display = 'none';
    
    // Reset form
    document.getElementById('survey-form').reset();
}

function submitSurvey(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const answers = Object.fromEntries(formData.entries());
    
    // Show success message
    alert('Дякуємо за участь в опитуванні! Ваші відповіді допомагають нам покращувати сервіс.');
    
    // Reset and hide form
    cancelSurvey();
    
    // In a real implementation, you would send this data to a server
    console.log('Survey answers:', answers);
}

function updateRangeValue(input) {
    const valueDisplay = input.nextElementSibling;
    if (valueDisplay && valueDisplay.classList.contains('range-value')) {
        valueDisplay.textContent = input.value;
    }
}

// Contact form functionality
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData.entries());
    
    // Show success message
    alert('Дякуємо за ваше повідомлення! Ми відповімо вам найближчим часом.');
    
    // Reset form
    event.target.reset();
    
    // In a real implementation, you would send this data to a server
    console.log('Contact form data:', contactData);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize step guide if on that page
    if (document.querySelector('.step-panel')) {
        showStep(1);
    }
    
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to cards on scroll
    const observeOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observeOptions);
    
    // Observe cards for animation
    const cards = document.querySelectorAll('.feature-card, .phone-card, .smartphone-card, .fact-card, .store-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add hover effects and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Utility functions for better UX
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#16a34a';
            break;
        case 'error':
            notification.style.background = '#dc2626';
            break;
        case 'warning':
            notification.style.background = '#d97706';
            break;
        default:
            notification.style.background = '#2563eb';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        const fieldName = input.name || input.id;
        
        // Remove previous error styling
        input.style.borderColor = '';
        
        if (!value) {
            input.style.borderColor = '#dc2626';
            showNotification(`Поле "${fieldName}" обов'язкове для заповнення`, 'error');
            isValid = false;
            return;
        }
        
        // Email validation
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                input.style.borderColor = '#dc2626';
                showNotification('Введіть коректний email адрес', 'error');
                isValid = false;
                return;
            }
        }
        
        // Success styling
        input.style.borderColor = '#16a34a';
    });
    
    return isValid;
}

// Back to top button
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width: 1.5rem; height: 1.5rem;">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5,12 12,5 19,12"/>
        </svg>
    `;
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    `;
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#1d4ed8';
        this.style.transform = 'translateY(-2px) scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#2563eb';
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    document.body.appendChild(backToTopBtn);
});

// Console message for developers
console.log('🚀 SmartGuide Website - Статичний сайт створений для Google Sites');
console.log('📱 Повнофункціональний гід з вибору смартфонів українською мовою');
console.log('⚡ Включає інтерактивні фільтри, форми та навігацію');