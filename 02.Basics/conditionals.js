var temperature;

temperature = 0;
if(temperature<=20){
    console.log('its very cold outside')
} else if(temperature<=40 & temperature>=20){
    console.log('its humid')
} else if(temperature>=40 & temperature<=50){
    console.log('its too hot')
} else{
    console.log('enter valid tempreture')
}