let timeBtn = document.querySelector('#tabs__time')
let timerBtn = document.querySelector('#tabs__timer')
let stopwatchBtn = document.querySelector('#tabs__stopwatch')

let timeBlock = document.querySelector('.time')
let timerBlock = document.querySelector('.timer')
let stopwatchBlock = document.querySelector('.stopwatch')

/* Настройки вкладок */
timeBtn.onclick=function(){
    timeBlock.style.display='flex'
     timerBlock.style.display='none'
    stopwatchBlock.style.display='none'

    timeBtn.style.backgroundColor='rgb(0, 0, 0,.8)'
    timerBtn.style.backgroundColor='rgb(0, 0, 0,.5)'
    stopwatchBtn.style.backgroundColor='rgb(0, 0, 0,.5)'

}
timerBtn.onclick=function(){
    timerBlock.style.display='flex'
    timeBlock.style.display='none'
    stopwatchBlock.style.display='none'

    timeBtn.style.backgroundColor='rgb(0, 0, 0,.5)'
    timerBtn.style.backgroundColor='rgb(0, 0, 0,.8)'
    stopwatchBtn.style.backgroundColor='rgb(0, 0, 0,.5)'
}
stopwatchBtn.onclick=function(){
    stopwatchBlock.style.display='flex'
    timerBlock.style.display='none'
    timeBlock.style.display='none'
    
    timeBtn.style.backgroundColor='rgb(0, 0, 0,.5)'
    timerBtn.style.backgroundColor='rgb(0, 0, 0,.5)'
    stopwatchBtn.style.backgroundColor='rgb(0, 0, 0,.8)'
}

/* Классические часы */

let kalin = document.querySelector('#kalin')
let msk = document.querySelector('#msk')
let sam = document.querySelector('#sam')
let ekb = document.querySelector('#ekb')

let h = document.querySelector('.date')
var intervalId;






kalin.onclick = function () {
    clearInterval(intervalId);
    intervalId=window.setInterval(() => {
         dateTime = new Date()

        h.innerHTML = dateTime.getHours()-2 + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds()
    })

}

msk.onclick = function () {
    clearInterval(intervalId);
    intervalId=window.setInterval(() => {
        dateTime = new Date()

        h.innerHTML = dateTime.getHours() -1 + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds()
    })

}

sam.onclick = function () {
    clearInterval(intervalId);
    intervalId=window.setInterval(() => {
        dateTime = new Date()

        h.innerHTML = dateTime.getHours() +0+ ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds()
    })

}

ekb.onclick = function () {
    clearInterval(intervalId);
    intervalId=window.setInterval(() => {
       dateTime = new Date()

        h.innerHTML = dateTime.getHours() +1+ ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds()
    })

}

/* Таймер */

let interval_timer
let timer = document.querySelector('.timer_date')


let inpBtn = document.querySelector('#timer_input-btn')
let timerStart = document.querySelector('#timer_start')
let timerStop = document.querySelector('#timer_stop')
let timerReboot = document.querySelector('#timer_reset')
let timerDel = document.querySelector('#timer_del')

let modal = document.querySelector('.timer__inp')
let timerInpHours = document.querySelector('#timer__inp-hours')
let timerInpMin = document.querySelector('#timer__inp-min')
let timerInpSec = document.querySelector('#timer__inp-sec')

var dateTimer=new Date()


/*Секундомер  */
let stopwatch = document.querySelector('.stopwatch__date') /*заголовок с таймером*/
let stopwatchStart = document.querySelector('#stopwatch__start')/*кнопка старта*/
let stopwatchSave = document.querySelector('#stopwatch__save')/*кнорка сохранения*/
let stopwatchStop = document.querySelector('#stopwatch__stop')/*кнопка остановки*/
let stopwatchDelete = document.querySelector('#stopwatch__delete')/*кнопка очистки таймера*/





/* onload для всех  */
window.onload = function () {
    /* для часов */
    intervalId= window.setInterval(() => {
        var dateTime = new Date()
        h.innerHTML = dateTime.toLocaleTimeString()
    })






   /* для таймера */
    dateTimer.setHours(0, 0, 0)
    timer.innerHTML = dateTimer.toLocaleTimeString()


    inpBtn.onclick = function () {
        if ((timerInpHours.value == '' || timerInpHours.value == 0) && (timerInpMin.value == '' || timerInpMin.value == 0) && (timerInpSec.value == '' || timerInpSec.value == 0)) {
            alert('INPUT NUMBER')
        }
        else {
            modal.style.display = 'none'
            timer.style.display = 'block'
            timerStart.style.display = 'block'
            timerStop.style.display = 'block'
            timerReboot.style.display = 'block'
            timerDel.style.display = 'block'

            dateTimer.setHours(timerInpHours.value, timerInpMin.value, timerInpSec.value)


            timer.innerHTML = dateTimer.toLocaleTimeString()

        }
    }

    timerStart.onclick = function () {
        /* создаю переменные */
        var seconds = dateTimer.getSeconds()
        var minutes = dateTimer.getMinutes()
        var hours = dateTimer.getHours()

        interval_timer = window.setInterval(() => {
            /* переопределяю */
            seconds = dateTimer.getSeconds()
            minutes = dateTimer.getMinutes()
            hours = dateTimer.getHours()


            if (seconds == 0 && minutes == 0 && hours != 0) {
                hours--
                minutes = 59
                seconds = 59
            }
            else if (seconds == 0 && minutes != 0 && hours != 0) {
                minutes--
                seconds = 59
            }



            else if (seconds == 0 && minutes == 0 && hours == 0) {
                clearInterval(interval_timer)
            }
            else {
                seconds--
            }
            dateTimer.setHours(hours, minutes, seconds)
            timer.innerHTML = dateTimer.toLocaleTimeString()



        }, 1000)

    }   
    timerStop.onclick = function () {
        clearInterval(interval_timer)
    }

    timerReboot.onclick = function () {
        
        clearInterval(interval_timer)
        dateTimer.setHours(timerInpHours.value, timerInpMin.value, timerInpSec.value)

        timer.innerHTML = dateTimer.toLocaleTimeString()
  

    }
    timerDel.onclick = function () {
        clearInterval(interval_timer)
        modal.style.display = 'flex'
        timer.style.display = 'none'
        timerStart.style.display = 'none'
        timerStop.style.display =  'none'
        timerReboot.style.display ='none'
        timerDel.style.display =   'none'
    }



    /* для секундомера */

    let count_saves=0/*количество сохранений */
    let interval_stopwatch/*создание интервала*/
    var date_stopwatch = new Date()
    date_stopwatch.setHours(0, 0, 0, 0)
   

    stopwatch.innerHTML = date_stopwatch.toLocaleTimeString() + '.0' + date_stopwatch.getMilliseconds()



    stopwatchStart.onclick = function () {
        let hours = date_stopwatch.getHours()
        let min = date_stopwatch.getMinutes()
        let sec = date_stopwatch.getSeconds()
        let msc = date_stopwatch.getMilliseconds()

        interval_stopwatch = window.setInterval(() => {
            msc++
            if (msc < 10) {
                msc='0'+msc
            }
             
            if (msc == 100) {
                sec++
                msc = 0
            }
             

            if (sec == 60) {
                min++
                sec = 0
            }
            if (min == 60) {
                hours++
                min = 0
            }
            date_stopwatch.setHours(hours, min, sec, msc)
            if (msc < 10) {
                stopwatch.innerHTML = date_stopwatch.toLocaleTimeString() + '.0' + date_stopwatch.getMilliseconds()

            }
            else{
                stopwatch.innerHTML = date_stopwatch.toLocaleTimeString() + '.' + date_stopwatch.getMilliseconds()

            }
             
        }, 10)
        stopwatchSave.style.display = 'block'
        stopwatchStart.style.display = 'none'
        stopwatchStop.style.display = 'block'
        stopwatchDelete.style.display = 'block'
    }


    stopwatchStop.onclick = function () {
        clearInterval(interval_stopwatch)
    }

    stopwatchSave.onclick = function () {
        count_saves++
        let elem = document.createElement('h3')
        elem.innerHTML =count_saves+': '+ date_stopwatch.toLocaleTimeString() + '.' + date_stopwatch.getMilliseconds()
        document.querySelector('.saves').style.display='flex'
        document.querySelector('.saves').append(elem)


    }

    stopwatchDelete.onclick = function () {
        count_saves=0
        clearInterval(interval_stopwatch)
        date_stopwatch.setHours(0, 0, 0, 0)
        stopwatch.innerHTML = date_stopwatch.toLocaleTimeString() + '.' + date_stopwatch.getMilliseconds()

        stopwatchSave.style.display = 'none'
        stopwatchStart.style.display = 'block'
        stopwatchStop.style.display = 'none'
        stopwatchDelete.style.display = 'none'
        while( document.querySelector('.saves').firstChild){
            document.querySelector('.saves').removeChild(document.querySelector('.saves').firstChild)
        }
        document.querySelector('.saves').style.display='none'
    }




}
