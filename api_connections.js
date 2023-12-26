const BASE_URL = 'https://randomuser.me/api/';

async function getTodoItems() {
    // alert( 'Merhaba millet!' );
  try {
    await fetch(
        BASE_URL).then(res =>
            res.json()).then(d => {
                console.log("veri alındı");
                isimVer(d?.results[0]?.name.first, d?.results[0]?.name.last);
            })
  } catch (errors) {
    console.error(errors);
  }
};

function isimVer(firstName, lastName) {
    var isim = document.getElementById("isim");
    isim.innerText = (firstName + " " + lastName);
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

console.log("created uuid: ", create_UUID());  

fetch('https://mocki.io/v1/7fd73540-aeaa-4f52-8dbb-6895da237309').then((data)=>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData =""
    objectData.map((values)=>{
        tableData += ` <li>
        ${values.title}
        </li>`
    });
    document.getElementById("projects").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})