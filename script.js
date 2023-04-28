const container = document.querySelector(".container");
const mainDiv = document.querySelector(".main");
const cityInput = document.querySelector(".city");
const searchIcon = document.querySelector(".search");
const cityResult = document.querySelector(".cityResult");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const image = document.querySelector('.img')



searchIcon.addEventListener('click',()=> {
    let url = `https://api.weatherapi.com/v1/current.json?key=1bbbe481addd454fa40150903231302&q=${cityInput.value}&aqi=no`
    container.style.height = '500px'
    mainDiv.style.display = 'block'

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let location = data['location']
        let current = data['current']
        let condition = current['condition']
        console.log(current);
        console.log(location);
        console.log(condition);
        

        cityResult.textContent = location['name']
        temp.textContent = `${current['temp_c']}°`
        condition.textContent = condition['text']
        image.src = `https:${condition['icon']}`
    })

})