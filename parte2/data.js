var countryarray = [];
        fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(json => {
        json.forEach( element => { 
            countryarray.push(element); 
          });
data(countryarray);
      })


function data(array){

    var div = document.getElementsByTagName("div")[1];


    // Crea un elemento <table> y un elemento <tbody>
    var table = document.createElement("table");
    table.id = "tableResponse";
    
    var tblBody = document.createElement("tbody");
    var image = document.createElement("img");
    
    array.forEach(element => {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        var cell = document.createElement("td");
       var urlimage = image.src = element.flag;
       // hilera.style.height = '80px'; 
      //  hilera.style.width = '80%'; 
        
        var cellText = document.createTextNode("Nombre Pais:"+element.name);
        cell.appendChild(cellText);
        hilera.appendChild(cell);
        tblBody.appendChild(hilera);

        cell = document.createElement("td");
        cellText = document.createTextNode("Region: "+element.region);
        cell.appendChild(cellText);
        hilera.appendChild(cell);
        tblBody.appendChild(hilera);

        cell = document.createElement("td");
        cellText = document.createTextNode("Subregion: "+element.subregion);
        cell.appendChild(cellText);
        hilera.appendChild(cell);
        tblBody.appendChild(hilera);

        
        cell = document.createElement("td");
        cell.innerHTML="<img src='"+urlimage+"'"+"width='80' height='50'"+"/>";
        hilera.appendChild(cell);
        tblBody.appendChild(hilera);

    });

    // posiciona el <tbody> debajo del elemento <table>
    table.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(table);
    // modifica el atributo "border" de la tabla y lo fija a "1";
    table.setAttribute("border", "1");

  
   

    
}