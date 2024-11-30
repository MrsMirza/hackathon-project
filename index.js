// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resumeForm');
    var resumePreview = document.getElementById('resumePreview');
    // Form submission event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get the values from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var bio = document.getElementById('bio').value;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        // Display the values in the preview section
        document.getElementById('previewName').innerHTML = "<strong>Name:</strong> ".concat(name);
        document.getElementById('previewEmail').innerHTML = "<strong>Email:</strong> ".concat(email);
        document.getElementById('previewPhone').innerHTML = "<strong>Phone:</strong> ".concat(phone);
        document.getElementById('previewBio').innerHTML = "<strong>Bio:</strong> ".concat(bio);
        var skillsList = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
        document.getElementById('previewSkills').innerHTML = "<strong>Skills:</strong><ul>".concat(skillsList, "</ul>");
        document.getElementById('previewEducation').innerHTML = "<strong>Education:</strong> ".concat(education);
        document.getElementById('previewExperience').innerHTML = "<strong>Experience:</strong> ".concat(experience);
        resumePreview.style.display = 'block';
    });
});
