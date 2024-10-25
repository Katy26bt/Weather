var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');


async function changeWeatherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q= ${capitalSearch} &appid=3389811b849152e16dac548754049b6b`    
    let data = await fetch(apiURL).then(res=> res.json())

    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = value.innerText = Math.round(data.main.temp -273.15)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        let date = new Date((data.dt)*1000)
        time.innerText = date.toString()


        
        
        body.setAttribute('class', 'spring')
        if(temp <=25){
            body.setAttribute('class', 'spring')
        }

        if(temp <=32){
            body.setAttribute('class', 'summer')
        }

        if(temp <= 28){
            body.setAttribute('class', 'autumn')
        }

        if(temp <= 20){
            body.setAttribute('class', 'winter')
        }

    }else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('vung tau')