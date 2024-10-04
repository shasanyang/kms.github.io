// 스크롤 애니메이션 추가
window.addEventListener('scroll', () => {
    const projectsSection = document.getElementById('projects');
    const sectionPos = projectsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (sectionPos < screenPos) {
        projectsSection.classList.add('visible');
    }
});
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
