

let request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    let data = JSON.parse(request.response);
    console.log(data);
      data.forEach((element) =>{
      const div=document.createElement("div");
        div.classList.add("container","row-1","card","inner","col-3","bg-light" ,"border");
        div.setAttribute("style","height:600px;width:335px");
        div.style.padding = "20px 10px 20px 10px";
        document.querySelector("body").appendChild(div);
        const title=document.createElement("h6");
        title.classList.add("card-title");
        title.innerHTML=element.name;
        div.appendChild(title);
    const image=document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("style","width:320; height:220px;margin-bottom:2px;");
    image.setAttribute("src",element.flag);
    div.appendChild(image);
 
    const h5=document.createElement("p");
    h5.classList.add("card-text");
    h5.innerText="Capital : ";
    div.appendChild(h5);
    const span=document.createElement("span");
    span.classList.add("badge" ,"bg-success");
    span.setAttribute("style","width:150px;height:20px");
    span.innerHTML=element.capital;
    h5.appendChild(span);
    const h51=document.createElement("p");
    h51.classList.add("card-text");
    h51.innerHTML="Capital Code : ";
    div.appendChild(h51);
    const span1=document.createElement("span");
    span1.innerText=element.alpha2Code;
    const span2=document.createElement("span");
    span2.innerText=",";
    span1.appendChild(span2);
    const span3=document.createElement("span");
    span3.innerText=element.alpha3Code;
    span2.appendChild(span3);
    h51.appendChild(span1);

    const h52=document.createElement("p");
    h52.classList.add("card-text");
    h52.innerHTML="Region : ";
    div.appendChild(h52);
    const span4=document.createElement("span");
    span4.innerText=element.region;
    h52.appendChild(span4);
    const h53=document.createElement("p");
    h53.classList.add("card-text");
    h53.innerHTML="Lat,Long : ";
    div.appendChild(h53);
    const span5=document.createElement("span");
    span5.innerText=element.latlng;
    h53.appendChild(span5);
    const h54=document.createElement("p");
    h54.classList.add("card-text");
    h54.innerText="Currency Code : ";
    div.appendChild(h54);
    const span6=document.createElement("span");
    span6.innerText=element.currencies[0].code;
    h54.appendChild(span6);
    const h55=document.createElement("p");
    h55.classList.add("card-text");
    h55.innerText="Currency Name : ";
    div.appendChild(h55);
    const span7=document.createElement("span");
    span7.innerText=element.currencies[0].name;
    h55.appendChild(span7);
    const h56=document.createElement("p");
    h56.classList.add("card-text");
    h56.innerText="Currency Symbol : ";
    div.appendChild(h56);
    const span8=document.createElement("span");
    span8.innerText=element.currencies[0].symbol;
    h56.appendChild(span8);
    


       
    
   
       
            
        
   });
  
};
