do{
    userName = prompt('Пожалуйста введите Имя чтобы продолжить')
} while(userName === null);
userName = userName.trim()

do{
    userLastName = prompt(userName+', введите Фамилию чтобы продолжить')
} while(userLastName === null)
userLastName = userLastName.trim()


do{
    userEmeil = prompt(userName+' '+userLastName+ ', Укажите актуальную електронную почту', '.....@.....')
    if (userEmeil !== null){
        userEmeil = userEmeil.replaceAll(' ', '')
        userEmeil = userEmeil.toLowerCase()
    if (userEmeil.indexOf('@')== -1){
        emeil = 'not valid email:  ' + userEmeil + ' (symbol @ not exist)'
        alert(emeil)
    }
    else if(userEmeil.charAt(0) == '@'){
        emeil = 'not valid email:  ' + userEmeil + ' (symbol @ find in first place)'
        alert(emeil)
    }
    else if(userEmeil.charAt(userEmeil.length-1) == '@'){
        emeil = 'not valid email:  ' + userEmeil + ' (symbol @ find in last place)'
        alert(emeil)
    }
    else{
        emeil = userEmeil
}}} while(userEmeil === null ||(userEmeil.charAt(userEmeil.length-1) == '@') || (userEmeil.charAt(0) == '@')|| (userEmeil.indexOf('@')== -1))


do{
    userYear = prompt(userName+' '+userLastName+', укажите год рождения в формате', 'xxxx')
    if (userYear !== null){
        userYear = userYear.replaceAll(' ', '')
        year = new Date().getFullYear() 
    }
    if(userYear.length !==4){
        alert('Введите 4 символа')
    }
    else if(!/^[0-9]+$/.test(userYear)){
        alert('Введите только числа')
    }
    else if(userYear > year){
        alert('Продолжишь когда родишся')
    }
    else if(userYear == year){
        alert('С днем рождения, позови маму продолжить')
    }
} while(userYear === null || userYear.length !==4 || (!/^[0-9]+$/.test(userYear) || userYear >=year ));


console.log('Здравствуйте ' + userName + " " + userLastName)
console.log('Ваш возраст: ' + (year-userYear))
console.log('Данные вашей почты: ' + emeil)

