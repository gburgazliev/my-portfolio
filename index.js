document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a');
    const burger = document.querySelector('.burger');
    sections[0].classList.add('active');
   const mobileDrawer = document.getElementById('mobile-drawer');



    const handleContentChange = (link) => {
     
            
        sections.forEach((section) => {
                section.classList.remove('active');
            })

            
            sections.forEach((section) => {
                if (section.getAttribute('id') === link.getAttribute('href').replace('#', '')) {
                    section.classList.add('active');
                }
            })
    }




    navLinks.forEach((link) => {


        
link.addEventListener('click', (e) => {
            e.preventDefault();
             handleContentChange(link);
        
        });
    
    
    
    
    
    });

    mobileNavLinks.forEach((link) => {


        link.addEventListener('click', (e) => {
            e.preventDefault();
           handleContentChange(link);
         mobileDrawer.classList.remove('active');
      
    
    
    
        });
       


    });

    burger.addEventListener('click',() => {
            mobileDrawer.classList.toggle('active');
    });

    



}); 
