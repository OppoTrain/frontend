window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
   
    if (verticalScrollPx > 130) {
        console.log('hi');
        // document.getElementById('nav-bar').style.border=''
      //document.getElementById('containerone').style.backgroundColor='black';
    } else if(verticalScrollPx <130) {
        document.getElementById('containerone').style.backgroundColor = '#E5E7EB';
//
        // document.getElementById('containerone').style.backgroundColor='linear-gradient(to bottom, #E5E7EB, #FFFFFF)'; 
    } 
  });
