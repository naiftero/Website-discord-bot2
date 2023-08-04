function toggleCommand(commandId) {
    const commandDetails = document.getElementById(commandId);
    const menuItem = commandDetails.previousElementSibling;

    if (commandDetails.style.display === 'block') {
        commandDetails.style.display = 'none';
        menuItem.classList.remove('active');
    } else {
        commandDetails.style.display = 'block';
        menuItem.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('nav ul li a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
