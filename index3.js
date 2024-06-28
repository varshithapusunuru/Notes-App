let useruid=localStorage.getItem("uid")



let addNote = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");
let today = new Date();
var date = today.getDate();
var month = today.getMonth() +1;
var year = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();



addNote.addEventListener("click", (e) => {
if (addTitle.value == "" || addTxt.value == ""){
    return alert("Please add note title and details");
}

let usernotes = localStorage.getItem("notes");
if (usernotes == null){
    unotesObj = [];

}else {
    unotesObj = JSON.parse(usernotes);
}


let userObj = {
   useruidd:useruid, 
    title: addTitle.value,
    text: addTxt.value,
    date : date,
    month : month,
    year : year,
    hour : hour,
    minute : minute,
}
unotesObj.push(userObj);
localStorage.setItem("notes" ,JSON.stringify(unotesObj));
addTxt.value = "";
addTitle.value = "";

shownotes();
})

function shownotes(){
    let usernotes = localStorage.getItem("notes");
    if (usernotes==null){
    unotesObj = []

    }else{
        unotesObj = JSON.parse(usernotes);
    }

    let html = "";
    unotesObj.forEach(function(element,index){
        if(useruid==unotesObj[index].useruidd){
        html += `
        <div id="note">
      <h3 class="note-tittle">TITTLE :${element.title}</h3>
      <p class="note-text">NOTE :${element.text}</p>
      <p class="date">DATE :${element.date}/${element.month}/${element.year}</p>
        <p class="time">TIME :${element.hour}:${element.minute}</p>
      <button id="${index}" onclick ="deleteNote(this.id)" class="note-btn">Delete Note</button>
      <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit note</button>
    
    </div> 
    ` ;}
        
        });

        let noteHtml = document.getElementById("notes");
        if (unotesObj.length != 0){
            noteHtml.innerHTML = html;
        } else{
            noteHtml.innerHTML = "No Notes !!";
        }
       }
 function deleteNote(index){
       let confirmDel = confirm("You are about to delete this note!!");
       if (confirmDel == true){
        let usernotes = localStorage.getItem("notes");
        if (usernotes == null){
            unotesObj = [];
        
        }else {
           unotesObj = JSON.parse(usernotes);
        }

       unotesObj.splice(index, 1);
       localStorage.setItem("notes",JSON.stringify(unotesObj));
       shownotes();
     }

 }


function editNote(index){
    let saveindex= document.getElementById("saveindex"); 
    let savenote = document.getElementById("save-btn");
    saveindex.value = index;
    let usernotes= localStorage.getItem("notes");
    let unotesObj = JSON.parse(usernotes);
    let addTitle=document.getElementById("note-title");
    let addTxt=document.getElementById("note-text");
   addTxt.value = unotesObj[index].text;
   addTitle.value=unotesObj[index].title;
    savenote.style.display="block";
    addNote.style.display="none";
}
function saveNote(){
    let usernotes= localStorage.getItem("notes");
    let unotesObj = JSON.parse(usernotes);
    let saveindex= document.getElementById("saveindex").value;
    if(addTxt.value!=0 && addTitle!=0){
        unotesObj[saveindex].title=addTitle.value;
        unotesObj[saveindex].text=addTxt.value;
        unotesObj[saveindex].date=date;
        unotesObj[saveindex].month=month;
        unotesObj[saveindex].year=year;
        unotesObj[saveindex].hour=hour;
        unotesObj[saveindex].minute=minute;

    }
    localStorage.setItem("notes",JSON.stringify(unotesObj));
    
    savenote.style.display="none";
    shownotes();

}
 shownotes();