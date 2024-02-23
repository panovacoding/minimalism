document.addEventListener('DOMContentLoaded', () => {
    initHeroToggle();
})

function initHeroToggle(){
    const hero = document.querySelector('.hero');
    const btn = hero.querySelector('#sectionToggle');

    btn.addEventListener('click', () => {
        hero.classList.toggle('hero_open');
    })
}