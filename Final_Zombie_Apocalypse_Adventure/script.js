document.addEventListener("DOMContentLoaded", function() {
    // Array of URLs for the random pages
    const pages = [
      'page2-3.html',
      'page2-1.html'
    ];
  
    // Function to generate a random index within the array length
    function getRandomIndex() {
      return Math.floor(Math.random() * pages.length);
    }
  
    // Event listener for the link click
    document.getElementById('randomLink').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      const randomIndex = getRandomIndex();
      const randomPage = pages[randomIndex];
      
      // Redirect the user to the randomly chosen page
      window.location.href = randomPage;
    });
  });

// REFERENCE For Changing pages once timer ends = https://youtu.be/Z3MDVhFmPrA?si=LvqZfmyU7hkRnTvk

  function delayedRedirect(){
    window.location = "timeDeath.html";
}


//Refrence for fading background in homepage - https://www.youtube.com/watch?v=T33NN_pPeNI 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show');
      }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));