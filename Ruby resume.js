document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const resumeBuilder = document.querySelector('.resume-builder');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple registration logic (for demonstration)
        if (username && password) {
            alert('Registration successful!');
            registrationForm.style.display = 'none';
            resumeBuilder.style.display = 'block';
        }
    });

    window.selectTemplate = function(template) {
        alert('Template ' + template + ' selected!');
        document.getElementById('template-selection').style.display = 'none';
        document.getElementById('resume-fields').style.display = 'block';
    };

    window.previewResume = function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;

        const resumeContent = `
            <h1>${name}</h1>
            <p>${email} | ${phone}</p>
            <h2>Profile</h2>
            <p>${summary}</p>
        `;

        document.getElementById('resume-content').innerHTML = resumeContent;
        document.getElementById('resume-fields').style.display = 'none';
        document.getElementById('resume-preview').style.display = 'block';
    };

    window.downloadResume = function() {
        // Simple download logic using PDF libraries or similar
        alert('Download functionality will be implemented here.');
    };
});
