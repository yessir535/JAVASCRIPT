 var licznik = 1;
function generuj(id){
     if(id =="jeden"){
        document.getElementById("jeden").innerHTML = licznik
          document.getElementById("jeden").style.backgroundColor = "lightblue";
     }

      if(id =="dwa"){
        document.getElementById("dwa").innerHTML = licznik
          document.getElementById("dwa").style.backgroundColor = "red";
     }

      if(id =="trzy"){
        document.getElementById("trzy").innerHTML = licznik
          document.getElementById("trzy").style.backgroundColor = "yellow"; 
     }
     if(id =="cztery"){
        document.getElementById("cztery").innerHTML = licznik
          document.getElementById("cztery").style.backgroundColor = "green";        
     }
     if(id =="piec"){
        document.getElementById("piec").innerHTML = licznik
        document.getElementById("piec").style.backgroundColor = "orange";
     }
     if(id =="szesc"){
        document.getElementById("szesc").innerHTML = licznik
        document.getElementById("szesc").style.backgroundColor = "pink";
     }
      if(id =="siedem"){
        document.getElementById("siedem").innerHTML = licznik
         document.getElementById("siedem").style.backgroundColor = "purple";
     }
      if(id =="osiem"){
        document.getElementById("osiem").innerHTML = licznik
            document.getElementById("osiem").style.backgroundColor = "gray";
     }
      if(id =="dziewiec"){
        document.getElementById("dziewiec").innerHTML = licznik
            document.getElementById("dziewiec").style.backgroundColor = "brown";
     }
    licznik++;

   

}