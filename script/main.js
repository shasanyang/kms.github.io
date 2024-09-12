// 스크롤 애니메이션 추가
window.addEventListener('scroll', () => {
    const projectsSection = document.getElementById('projects');
    const sectionPos = projectsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (sectionPos < screenPos) {
        projectsSection.classList.add('visible');
    }
});
