async function getData() {
    const data = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital",
    );
    const data_json = await data.json();
 
    console.log(data_json);
 
    const country = data_json[0];
    const div = document.createElement("div");
    div.className = "cell";
    const img = document.createElement("img");
    img.className = "flag";
    const h2 = document.createElement("h2");
 
    const input = document.createElement("input");
    input.type = "text";
    input.name = "Stolica";
    input.placeholder = "Nazwa stolicy";
 
    const button = document.createElement("button");
    button.onclick = sprawdz;
    button.innerHTML = "Sprawdź";
 
    const inpDiv = document.createElement("div");
    inpDiv.className = "inpDiv";
 
    img.src = country.flags.png;
    h2.innerHTML = country.name.common;
 
    div.appendChild(img);
    div.appendChild(h2);
    document.body.appendChild(div);
    document.body.appendChild(inpDiv);
    inpDiv.appendChild(input);
    inpDiv.append(button);
}
 
getData();
 
function sprawdz() {
   
}
 