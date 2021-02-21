// const firebaseConfig = {
//     apiKey: "AIzaSyBFtqYG8OVlI4E8VdBEMW9mLCBhfeUHHeI",
//     authDomain: "stimeforone.firebaseapp.com",
//     projectId: "stimeforone",
//     storageBucket: "stimeforone.appspot.com",
//     messagingSenderId: "302327929792",
//     appId: "1:302327929792:web:7f6a874a88fc988fc28625",
//     measurementId: "G-WF2R2WM1Y6"
//     };
//      // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     let db = firebase.firestore();


   

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
["Сергей" ,'Прерванный полет'  ,'12PP0006KFV01'  ,"2021-02-20T16:30:00" ,100,  true,     '',       '']
]  



// facts = data.map(fact => {
//     console.log(fact[3])
// })


// TEST
// facts = data.map(fact => {
// })




const facts = data.map(fact => {
    const myName = fact[0]
    const timeStart = new Date (`${fact[3]}`)
        const date0 = new Date (0)
        const duration = date0.setMinutes(fact[4])
    const timeStop = new Date(Date.parse(timeStart) + duration)

    ID = fact[2]
    Title = fact[1]
    Brak = fact[6]
    Commit = fact[7]
    Full = fact[5]
    Dur = new Date(duration).toISOString().substr(11, 8)
    
    return {
        name: myName,
        timeStart,
        timeStop,
        ID,
        Title,
        Brak,
        Commit,
        Full,
        Dur
    }




})


console.log(facts)
//можно ли стазу все facts записать массивом??????
//или нужно по одному??????????
facts.map(fact => {
    // db.collection("Mark").add(fact)
    // .then((docRef) => {
    //     alert(`Все хорошо!!!\nDocument written with ID: \n${docRef.id}`);
    // })
    // .catch((error) => {
    //     alert(`ничего не получилось...\n свяжитесь с разработчиком`)
    //     console.error("Error adding document: ", error);
    // });

})

