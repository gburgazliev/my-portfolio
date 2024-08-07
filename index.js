document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a');
    const burger = document.querySelector('.burger');
    sections[0].classList.add('active');
    navLinks[0].style.backgroundColor = 'red';
    mobileNavLinks[0].style.backgroundColor = 'red';
   const mobileDrawer = document.getElementById('mobile-drawer');



    const handleContentChange = (link) => {
     
            
        sections.forEach((section) => {
                section.classList.remove('active');
            })

            
            sections.forEach((section) => {
                if (section.getAttribute('id') === link.getAttribute('href').replace('#', '')) {
                    section.classList.add('active');
                    mobileNavLinks.forEach((navLink) => navLink.style.backgroundColor = 'transparent');
                    navLinks.forEach((navLink) => navLink.style.backgroundColor = 'transparent');
                   link.style.backgroundColor = 'red';
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
