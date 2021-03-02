    const firebaseConfig = {
    apiKey: "AIzaSyBFtqYG8OVlI4E8VdBEMW9mLCBhfeUHHeI",
    authDomain: "stimeforone.firebaseapp.com",
    projectId: "stimeforone",
    storageBucket: "stimeforone.appspot.com",
    messagingSenderId: "302327929792",
    appId: "1:302327929792:web:7f6a874a88fc988fc28625",
    measurementId: "G-WF2R2WM1Y6"
    };
     // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();


//name 0     Tile  1              ID    2              timeStar 3      Dur 4 Full 5    Brak 6    Commit 7
const data = [
    ["Сергей",'Давай поженимся','19DP0662TA_1' ,"2021-03-02T14:10:00"    ,33      ,false     ,''     ,''],
    ["Сергей","Пусть говорят" ,'19PG0777TF1' ,"2021-03-02T14:47:00"    ,5      ,false     ,''     ,''],
    ["Сергей","На самом деле" ,'19sd0653tf1' ,"2021-03-02T15:50:00"    ,35      ,false     ,''     ,''],
]

    const facts = datafromText(data)
    //console.log('change text')



// facts = data.map(fact => {
//     ///console.log(fact)
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
        Title = fact[1].toUpperCase()
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
            // data,
            addFrom
        }

    })


facts.map (fact => {
    textToDisplay(fact)
})
///console.log(facts)
return facts

}



function textToDisplay (fact) {
    let my = fact
    ///console.log('my', my)
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
//    
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


console.log(facts)

document.getElementById('addToBase').addEventListener('click', function() {
//можно ли стазу все facts записать массивом??????
//или нужно по одному??????????




facts.map(fact => {
    db.collection("users").add(fact)
    .then((docRef) => {
        alert(`Все хорошо!!!\nDocument written with ID: \n${docRef.id}`);
    })
    .catch((error) => {
        alert(`ничего не получилось...\n свяжитесь с разработчиком`)
        console.error("Error adding document: ", error);
    });

})

})