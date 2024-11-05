var toggle = document.getElementById('toggle');
var skill = document.getElementById('skill');
toggle.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
///////////////////////////////////////////////////////////
// Get the button and skills section
var toggleButton = document.getElementById('toggle');
var skillsSection = document.getElementById('skill');
// // Add an event listener to the button to toggle visibility of the skills section
// toggleButton.addEventListener('click', function() {
//     if (skillsSection.style.display === 'none') {
//         skillsSection.style.display = 'block';  // Show the skills
//     } else {
//         skillsSection.style.display = 'none';   // Hide the skills
//     }
// });
