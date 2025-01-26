let scrollPercentage = () => {

	  let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
	
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round( pos * 100 / calcHeight);
	
    if (pos>100) {
      scrollProgress.classList.add('active');
    } else {
      scrollProgress.classList.remove('active');
    }
    
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
	
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;
