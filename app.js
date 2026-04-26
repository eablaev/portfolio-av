const aboutBtnContainer = document.getElementById('aboutBtnContainer');
const projectsBtnContainer = document.getElementById('projectsBtnContainer');

const messageEl = document.getElementById('welcomeMessageContainer');
const aboutContent = document.getElementById('aboutContent');
const projectsContainer = document.getElementById('projectsContainer')

const closeBtnAbout = document.getElementById('closeBtnAbout');
const closeBtnProjects = document.getElementById('closeBtnProjects');

const lines = document.querySelectorAll('.line'); 


aboutBtnContainer.addEventListener('click', () => {
    history.pushState(null, '', '#about');
    aboutBtnContainer.classList.add('slideOut')
    projectsBtnContainer.classList.add('slideOut');
    messageEl.classList.add('slideOut')
   
    aboutBtnContainer.addEventListener('animationend', () => {
        messageEl.classList.remove('show');
        aboutContent.classList.add('show');
    }, { once: true });
});

projectsBtnContainer.addEventListener('click', () => {
    history.pushState(null, '', '#projects');
    aboutBtnContainer.classList.add('slideOut')
    projectsBtnContainer.classList.add('slideOut');
    messageEl.classList.add('slideOut')
   
    projectsBtnContainer.addEventListener('animationend', () => {
        messageEl.classList.remove('show');
        projectsContainer.classList.add('show');
    }, { once: true });
});

closeBtnAbout.addEventListener('click', () => {  
    history.pushState(null, '', '/');
    aboutContent.classList.add('slideOut');
    
    aboutContent.addEventListener('animationend', () => {
        aboutContent.classList.remove('show');
        aboutContent.classList.remove('slideOut');
        
        aboutBtnContainer.classList.add('slideIn');
        projectsBtnContainer.classList.add('slideIn');

        messageEl.classList.remove('slideOut');
        messageEl.classList.add('show');

        aboutBtnContainer.classList.remove('slideOut');
        projectsBtnContainer.classList.remove('slideOut');
        
        aboutBtnContainer.addEventListener('animationend', () => {
            projectsBtnContainer.classList.remove('slideIn');
            aboutBtnContainer.classList.remove('slideIn');
        }, {once:true});

    }, { once: true });
});

closeBtnProjects.addEventListener('click', () => {  
    history.pushState(null, '', '/');
    projectsContainer.classList.add('slideOut');
    
    projectsContainer.addEventListener('animationend', () => {
        projectsContainer.classList.remove('show');
        projectsContainer.classList.remove('slideOut');
        
        aboutBtnContainer.classList.add('slideIn');
        projectsBtnContainer.classList.add('slideIn');

        messageEl.classList.remove('slideOut');
        messageEl.classList.add('show');

        aboutBtnContainer.classList.remove('slideOut');
        projectsBtnContainer.classList.remove('slideOut');
        
        aboutBtnContainer.addEventListener('animationend', () => {
            projectsBtnContainer.classList.remove('slideIn');
            aboutBtnContainer.classList.remove('slideIn');
        }, {once:true});

    }, { once: true });
});

lines.forEach((line, index) => {
    setTimeout(() => {
        line.classList.add('show'); 
    }, index * 100);
});

if (window.location.hash === '#projects') {
    aboutBtnContainer.classList.add('slideOut');
    projectsBtnContainer.classList.add('slideOut');
    messageEl.classList.remove('show');
    projectsContainer.classList.add('show');
} else if (window.location.hash === '#about') {
    aboutBtnContainer.classList.add('slideOut');
    projectsBtnContainer.classList.add('slideOut');
    messageEl.classList.remove('show');
    aboutContent.classList.add('show');
}