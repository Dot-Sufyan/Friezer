document.addEventListener('scroll',()=>{
    const navbar = document.querySelector('.navbar-custom');
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
    }else{
       navbar.classList.remove('scrolled');
    }
})

const wrapper = document.getElementById('testimonialWrapper');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const testimonials = document.querySelectorAll('.testimonial');
        let index = 0;

        function updateSlider() {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        prev.addEventListener('click', () => {
            index = (index - 1 + testimonials.length) % testimonials.length;
            updateSlider();
        });

        next.addEventListener('click', () => {
            index = (index + 1) % testimonials.length;
            updateSlider();
            
        });