//Video play
// const setAutoPlay = ()=>{
//   const videoElement = document.getElementsByClassName('f-card-video');
//   videoElement.autoplay = window.matchMedia('(max-width: 768px)').matches;
// }

// window.addEventListener('resize', setAutoPlay);
// setAutoPlay();

//Hamburger 
function dropDown(x) {
    x.classList.toggle("is-active");
  
  }
  
  //sidebar
  function sideBar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle("show");
  
  }
  
  //Image slider
  const slider = document.querySelector('#res-images');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    console.log('moving down')
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    console.log('mouse leaving')
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    console.log('mouse up')
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousemove', (e) => {
    console.log('mouse up')
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  
  
  
  });
  
  
  //------------------Mouse Follower -----------------------
  let cursor = document.querySelector(".cursor");
  
  
  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
  
  
  //------------------Cursor Color -----------------------
  function invert() {
    cursor.classList.add('cursorInvert');
  };
  function devert() {
    cursor.classList.remove('cursorInvert');
  };
  
  function explore() {
    cursor.innerHTML = 'Explore';
    cursor.classList.add('large-cursor')
  }
  function drag() {
    cursor.innerHTML = 'Drag';
    cursor.classList.add('large-cursor')
  }
  function simple() {
    cursor.innerHTML = '';
    cursor.classList.remove('large-cursor')
  }
  
  //------------------Hamburger color invert-----------------------
  
  let featured = document.getElementById('featured');
  let resources = document.getElementById('resources');
  let footer = document.getElementById('footer');
  let philoso = document.getElementById('philoso');
  let contact = document.getElementById('contact');
  let bar1 = document.querySelector("#bar1");
  let bar2 = document.querySelector("#bar2");
  
  document.body.addEventListener('scroll', function () {
    const rect1 = featured.getBoundingClientRect();
    const rect2 = philoso.getBoundingClientRect();
    const rect3 = resources.getBoundingClientRect();
    const rect4 = contact.getBoundingClientRect();
    const rect5 = footer.getBoundingClientRect();
  
    switch (true) {
      case rect5.top <= 0:
        // Footer is visible
        bar1.style.backgroundColor = 'white';
        bar2.style.backgroundColor = 'white';
        break;
      case rect4.top <= 0:
        // Contact is visible
        bar1.style.backgroundColor = '';
        bar2.style.backgroundColor = '';
        break;
      case rect3.top <= 0:
        // Resources is visible
        bar1.style.backgroundColor = 'white';
        bar2.style.backgroundColor = 'white';
        break;
      case rect2.top <= 0:
        // Philoso is visible
        bar1.style.backgroundColor = '';
        bar2.style.backgroundColor = '';
        break;
      case rect1.top <= 0:
        // Featured is visible
        bar1.style.backgroundColor = 'white';
        bar2.style.backgroundColor = 'white';
        break;
      default:
        // Default case
        bar1.style.backgroundColor = '';
        bar2.style.backgroundColor = '';
    }
  
  })