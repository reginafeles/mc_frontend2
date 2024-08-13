// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Тут что-то интересное:
let change_theme_btn = document.querySelector('.switch-theme-button')
let header = document.querySelector('header')
let header_background = 'url(/uploads/2022/11/bg_mars.png)'

change_theme_btn.addEventListener('click', function() {
    if (header_background == 'url(https://hi-news.ru/wp-content/uploads/2016/07/martian.jpg)') {
        header.style.background = 'url(https://minio.nplus1.ru/app-images/226544/63018ed0a7d63_cover.jpg)'
        header.style.backgroundSize = 'cover'
        header_background = 'url(https://minio.nplus1.ru/app-images/226544/63018ed0a7d63_cover.jpg)'
    } else {
        header.style.background = 'url(https://hi-news.ru/wp-content/uploads/2016/07/martian.jpg)'
        header.style.backgroundSize = 'cover'
        header_background = 'url(https://hi-news.ru/wp-content/uploads/2016/07/martian.jpg)'
    }
})
