// window.addEventListener('scroll', () => {
//     const verticalScrollPx = window.scrollY || window.pageYOffset;
   
<<<<<<< Updated upstream
//     if (verticalScrollPx > 130) {
//         console.log('hi');
//         // document.getElementById('nav-bar').style.border=''
//       //document.getElementById('containerone').style.backgroundColor='black';
//     } else if(verticalScrollPx <130) {
//         document.getElementById('containerone').style.backgroundColor = '#E5E7EB';
// //
//         // document.getElementById('containerone').style.backgroundColor='linear-gradient(to bottom, #E5E7EB, #FFFFFF)'; 
//     } 
//   });
=======
    if (verticalScrollPx       <90) {
      // document.getElementById('nav-bar').style.backgroundColor=null;
      // document.getElementById('nav-bar').style.boxShadow=null;
    } else if(verticalScrollPx >90) {
      document.getElementById('nav-bar').style.backgroundColor ='#FDF9F5'; //'#F0F0F0';
      document.getElementById('nav-bar').style.boxShadow="1px 2px 10px #f9e9d9" ;// #4648aa69";
    } 
  });
  const burgerIcon = document.getElementById('burger-icon');
  const links = document.getElementById('links');
  
  burgerIcon.addEventListener('click', () => {
      links.classList.toggle('active');
  });
>>>>>>> Stashed changes
