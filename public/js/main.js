const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');



const getInfo = async(event) => {
    event.preventDefault();
    
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6f8181dd31e83a12c93ffa9a3b534597`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;

{/* <i class="fa-solid fa-cloud"></i> */}

            if (tempStatus == "Sunny") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: rgb(255, 255, 255);'></i>"; 
            } 
            else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: rgb(255, 255, 255);'></i>";
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: rgb(255, 255, 255);'></i>";
            } else if (tempStatus == "Smoke") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-sun' style='color: rgb(255, 255, 255);'></i>";
            } else {
                temp_status.innerHTML = "<i class='fa-brands fa-skyatlas' style='color: rgb(255, 255, 255);'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);

