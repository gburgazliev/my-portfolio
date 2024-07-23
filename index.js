document.addEventListener('DOMContentLoaded', function() {
        
   document.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('menu-button')) {
        e.target.style.color = 'red';
        e.target.style.cursor = 'pointer';
    
    }
   })

   document.addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('menu-button')) {
        e.target.style.color = '';
    }
});


      
});