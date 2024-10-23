document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const toggleIcon = document.getElementById('toggle-icon');
    const container = document.querySelector('.container');

    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('full-name').textContent = `${data.firstName} ${data.lastName}`;
            document.getElementById('role').textContent = data.role;
            document.getElementById('years-experience').textContent = data.yearsOfExperience;
            document.getElementById('projects-completed').textContent = data.projectsCompleted;
            document.getElementById('clients-worldwide').textContent = data.clientsWorldwide;

            document.getElementById('facebook-link').href = data.socialLinks.facebook;
            document.getElementById('instagram-link').href = data.socialLinks.instagram;
            document.getElementById('twitter-link').href = data.socialLinks.twitter;
            document.getElementById('linkedin-link').href = data.socialLinks.linkedin;

            document.getElementById('about-me-text').textContent = data.navbar.aboutMe;
            document.getElementById('portfolio-text').textContent = data.navbar.portfolio;
            document.getElementById('badge').textContent = data.navbar.badge;
            document.getElementById('services-pricing-text').textContent = data.navbar.servicesPricing;
            document.getElementById('resume-text').textContent = data.navbar.resume;
            document.getElementById('products-text').textContent = data.navbar.products;
            document.getElementById('blog-text').textContent = data.navbar.blog;
            document.getElementById('contact-text').textContent = data.navbar.contact;

            document.getElementById('hire-me').textContent = data.hireMe;
            document.getElementById('view-portfolio').textContent = data.viewPortfolio;
            document.getElementById('view-resume').textContent = data.viewResume;
            document.getElementById('services-pricing-btn').textContent = data.navbar.servicesPricing;

            document.getElementById('intro-heading').textContent = data.intro.heading;
            document.getElementById('intro-subheading').textContent = data.intro.subheading;
            document.getElementById('intro-description').innerHTML = data.intro.description;

            document.getElementById('years').innerHTML = data.stats.years;
            document.getElementById('projects').innerHTML = data.stats.projects;
            document.getElementById('clients').innerHTML = data.stats.clients;

            document.getElementById('what-i-do-heading').textContent = data.whatIDo.heading;
            document.getElementById('what-i-do-description').textContent = data.whatIDo.description;

            document.getElementById('profile-picture').src = data.profilePic;
            document.getElementById('hello-picture').src = data.helloPic;
            document.getElementById('profile-image').src = data.profileImage;
        })
        .catch(error => console.error('Error loading data:', error));

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('closed');
        if (sidebar.classList.contains('closed')) {
            toggleIcon.classList.replace('fa-arrow-left', 'fa-arrow-right');
        } else {
            toggleIcon.classList.replace('fa-arrow-right', 'fa-arrow-left');
        }
        if (window.innerWidth <= 850) {
            if (sidebar.classList.contains('closed')) {
                container.style.flexDirection = 'row';
            } else {
                container.style.flexDirection = 'column';
            }
        }
    });
});
