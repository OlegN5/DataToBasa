    // const firebaseConfig = {
    // apiKey: "AIzaSyBFtqYG8OVlI4E8VdBEMW9mLCBhfeUHHeI",
    // authDomain: "stimeforone.firebaseapp.com",
    // projectId: "stimeforone",
    // storageBucket: "stimeforone.appspot.com",
    // messagingSenderId: "302327929792",
    // appId: "1:302327929792:web:7f6a874a88fc988fc28625",
    // measurementId: "G-WF2R2WM1Y6"
    // };
    //  // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // let db = firebase.firestore();


   

    // "2021-02-19T21:35:00" для теста
    // "2021-02-19T22:27:00"
    // "2021-02-19T23:20:00"
    // "2021-02-20T00:03:00"
    // "2021-02-20T01:10:00"
    // "2021-02-20T01:21:00"
    // "2021-02-20T01:42:00"
    // "2021-02-20T02:35:00"
    // "2021-02-20T03:20:00"
//name 0     Tile  1              ID    2              timeStar 3      Dur 4 Full 5    Brak 6    Commit 7
const data = [
["Марк"   ,'Часовой'           ,'03CA0190E'      ,"2021-02-19T21:15:00" ,20,  false,     '',       ''],
["Марк"   ,'Новости'           ,''               ,"2021-02-19T22:22:00" ,05,  false,     '',       ''],
["Марк"   ,'Мужское и женское' ,'14MJ1513T'      ,"2021-02-19T22:37:00" ,65,  false,     '',       ''],
["Марк"   ,'Мужское и женское' ,'14MJ1170T_v01'  ,"2021-02-19T23:55:00" ,23,  false,     '',       ''],
["Марк"   ,'Давай поженимся'   ,'19DP0733TF'     ,"2021-02-20T00:40:00" ,30,  false,     '',       ''],
["Марк"   ,'Крепкая броня'     ,'01K130028EAV01' ,"2021-02-20T01:16:00" ,05,  false,     '',       ''],
["Марк"   ,'Мужское и женское' ,'14MJ1504T_2'    ,"2021-02-20T01:32:00" ,10,  false,     '',       ''],
["Марк"   ,'Модный приговор'   ,'19MP0815TF'     ,"2021-02-20T02:15:00" ,20,  false,     '',       ''],
["Марк"   ,'Здоровье'          ,'11ZD0875T'      ,"2021-02-20T02:50:00" ,30,  false,     '',       ''],
["Сергей" ,'Калашников'        ,'01KA0067efv01'  ,"2021-02-20T13:00:00" ,150,  true,     '',       ''],
["Сергей" ,'Прерванный полет'  ,'12PP0006KFV01'  ,"2021-02-20T16:30:00" ,100,  true,     '',       ''],
["Саша"     ,'Сегодня вечером'      ,'19SV0274TA_1'       ,'2021-02-24T11:00:00'    ,50      ,false     ,''     ,''],
["Саша"     ,'Анонсы (6 штук)'      ,'S0242_133_01A...'   ,'2021-02-24T12:20:00'    ,15      ,false     ,''     ,''],
["Саша"     ,'Анне Вески'           ,'11AV0004LAV01'      ,'2021-02-24T13:45:00'    ,75      ,false     ,''     ,''],
["Саша"     ,'Пусть говорят'        ,'19PG00074TF_1'      ,'2021-02-24T14:55:00'    ,20      ,false     ,''     ,'']
]  





document.getElementById('text').addEventListener('change', function() {
    data = document.getElementById('text').textContent 
    datafromText(data)
    console.log('change text')



} )


// facts = data.map(fact => {
//     console.log(fact[3])
// })


// TEST
// facts = data.map(fact => {
// })

function datafromText() {
    const facts = data.map(fact => {
        const data = fact
        const myName = fact[0]
        const timeStart = new Date (`${fact[3]}`)
            const date0 = new Date (0)
            const duration = date0.setMinutes(fact[4])
        const timeStop = new Date(Date.parse(timeStart) + duration)



        ID = fact[2].toUpperCase()
        Title = fact[1]
        Brak = fact[6]
        Commit = fact[7]
        Full = fact[5]
        Dur = new Date(duration).toISOString().substr(11, 8)
        addFrom = 'sTimeTextToBase'
        
        return {
            name: myName,
            timeStart,
            timeStop,
            ID,
            Title,
            Brak,
            Commit,
            Full,
            Dur,
            data,
            addFrom
        }

    })


facts.map (fact => {
    textToDisplay(fact)
})

return facts
}

function textToDisplay (fact) {
    let my = fact
    console.log('my', my)
    const Title = my.Title
    const commit = my.Commit
    const brak = my.Brak
    const full = my.Full
    const id = my.ID
    const myName = my.name
    const timeStart = my.timeStart
    const timeStop = my.timeStop
    const Dur = my.Dur
    const data = my.data
    const addFrom = my.addFrom
   
    let text = `<dl class="row">
    <dt class="">${data}</dt>

    <dt class="col-sm-3">ID</dt>
    <dd class="col-sm-9">${id}</dd>
    <dt class="col-sm-3">Название</dt>
    <dd class="col-sm-9">${Title}</dd>
    <dt class="col-sm-3">Звукорежиссер</dt>
    <dd class="col-sm-9">${myName} </dd>
    <dt class="col-sm-3">Начал</dt>
    <dd class="col-sm-9">${timeStart}</dd>
    <dt class="col-sm-3">Закончил</dt>
    <dd class="col-sm-9">${timeStop}</dd>
    <dt class="col-sm-3">Длительность</dt>
    <dd class="col-sm-9">${Dur}</dd>
    <dt class="col-sm-3">Целиком</dt>
    <dd class="col-sm-9">${full}</dd>
    <dt class="col-sm-3">Брак</dt>
    <dd class="col-sm-9">${brak}</dd>
    <dt class="col-sm-3">Комментарий</dt>
    <dd class="col-sm-9">${commit}</dd>
    <dt class="col-sm-3">Способ добавления в базу</dt>
    <dd class="col-sm-9">${addFrom}</dd>
    </dl>
    <p>--------------------------------------------------------------</p>`
    document.querySelector('#addTextToBase').insertAdjacentHTML('afterbegin', `${text}`)

    ///console.log(facts)
}


//document.getElementById('text').textContent = facts[0]




document.getElementById('addToBase').addEventListener('click', function() {
//можно ли стазу все facts записать массивом??????
//или нужно по одному??????????




facts.map(fact => {
    db.collection("Mark").add(fact)
    .then((docRef) => {
        alert(`Все хорошо!!!\nDocument written with ID: \n${docRef.id}`);
    })
    .catch((error) => {
        alert(`ничего не получилось...\n свяжитесь с разработчиком`)
        console.error("Error adding document: ", error);
    });

})

})