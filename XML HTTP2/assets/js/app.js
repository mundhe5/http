let cl=console.log;


let httpinfo=document.getElementById("info");

let apiurl="https://jsonplaceholder.typicode.com/todos";


let object2= new XMLHttpRequest();


object2.open("GET",apiurl);

object2.onload =function(){
    cl(object2.response);
        let data=JSON.parse(object2.response);
        templating(data);

}
object2.send();

function templating(arr){
    let result ="";

    arr.forEach(element => {
        result +=`
        <tr>
            <td>${element.id}</td>
            <td>${element.userId}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
        </tr>
        
        `
    });
    httpinfo.innerHTML=result;
}