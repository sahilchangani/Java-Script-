document.querySelector("form").addEventListener("submit",todoFun)
function todoFun(){

event.preventDefault()
let name =  document.getElementById("task").value
let id =  document.getElementById("priority").value

let tr = document.createElement("tr")
let td1 = document.createElement("td")
td1.innerHTML =name

let  td2 = document.createElement("td")
td2.innerHTML=id
if(id === "High"){
    td2.style.backgroundColor = "red"
    }else{
        td2.style.backgroundColor = "green"
    }



tr.append(td1,td2)

document.querySelector("tbody").append(tr)



} 