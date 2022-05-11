import '../styles/styles.css'


const ScrollTop = () => {

    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    document.addEventListener('DOMContentLoaded', function() {
      const goTopButton = document.querySelector('[data-action="gotop"]');
      const windowViewPortHeight = window.innerHeight; // browser viewport height
      let isRequestingAnimationFrame = false;
    
      if (!goTopButton) {
        return;
      }
    
      goTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    
      window.addEventListener('scroll', function() {
        if (!isRequestingAnimationFrame) {
          requestAnimationFrame(filterGoTopButtonVisibility);
          isRequestingAnimationFrame = true;
        }
      });
    
      function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
          goTopButton.classList.add('show');
          isRequestingAnimationFrame = false;
        } else {
          goTopButton.classList.remove('show');
          requestAnimationFrame(filterGoTopButtonVisibility);
        }
      }
    })
    return (
        <>
            <button type="button" className="btn btn-gotop d-inline-flex align-items-center justify-content-center" data-action="gotop">
              <i class='bx bx-up-arrow'></i>
            </button>

        
        </>

    )
}


export default ScrollTop;