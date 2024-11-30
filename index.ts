// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;
  
    // Form submission event listener
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get the values from the form
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const bio = (document.getElementById('bio') as HTMLTextAreaElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  
      // Display the values in the preview section
      document.getElementById('previewName')!.innerHTML = `<strong>Name:</strong> ${name}`;
      document.getElementById('previewEmail')!.innerHTML = `<strong>Email:</strong> ${email}`;
      document.getElementById('previewPhone')!.innerHTML = `<strong>Phone:</strong> ${phone}`;
      document.getElementById('previewBio')!.innerHTML = `<strong>Bio:</strong> ${bio}`;
      
      const skillsList = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
      document.getElementById('previewSkills')!.innerHTML = `<strong>Skills:</strong><ul>${skillsList}</ul>`;
      
      document.getElementById('previewEducation')!.innerHTML = `<strong>Education:</strong> ${education}`;
      document.getElementById('previewExperience')!.innerHTML = `<strong>Experience:</strong> ${experience}`;
  
      resumePreview.style.display = 'block';
    });
  });
  