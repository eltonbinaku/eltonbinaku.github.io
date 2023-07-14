//burger function
function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}


// go to top Button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

document.getElementById("goToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


//aboutme scroll
document.addEventListener('DOMContentLoaded', function() {
  var aboutSection = document.querySelector('.about-section');

  function isElementNearViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	var threshold = 1.3;
    return rect.top - windowHeight <= 0.75 * windowHeight;
  }

  function handleScroll() {
    if (isElementNearViewport(aboutSection)) {
      aboutSection.classList.add('appear');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
});

//scroll for skills

document.addEventListener('DOMContentLoaded', function() {
  var skillsSection = document.querySelector('.skills-section');
  var skillsListItems = document.querySelectorAll('.skills-list li');

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var threshold = 1.9; // Adjust the threshold value as per your preference (0.8 means 80% into the viewport)

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight * threshold &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(skillsSection)) {
      skillsSection.classList.add('appear');
      window.removeEventListener('scroll', handleScroll);
    }

    for (var i = 0; i < skillsListItems.length; i++) {
      if (isElementInViewport(skillsListItems[i])) {
        skillsListItems[i].classList.add('appear');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
});

//scroll for experience

document.addEventListener('DOMContentLoaded', function() {
  var experienceSection = document.querySelector('.experience-section');

  function isElementNearViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var threshold = 1.9; // Adjust the threshold value as per your preference (0.5 means halfway into the viewport)

    return rect.top - windowHeight <= 0.75 * windowHeight;
  }

  function handleScroll() {
    if (isElementNearViewport(experienceSection)) {
      experienceSection.classList.add('appear');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
});

