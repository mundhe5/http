let cl= console.log;

let info=document.getElementById("info");



let apiurl="https://jsonplaceholder.typicode.com/posts";

let object = new XMLHttpRequest();

object.open("GET",apiurl);



object.onload=function(){
    cl(object.response);
    // let data= object.response;
    // cl(data)
let data= JSON.parse(object.response);

    templating(data);

}
object.send()       



function templating(arr){
        let result='';

      arr.forEach(element => {
        result += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.userId}</td>
                    <td>${element.title}</td>
                    <td>${element.body}</td>
                </tr>
        
        `
      }); 
      
      info.innerHTML=result;
}



