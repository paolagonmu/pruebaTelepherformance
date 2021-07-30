

//codigo agregado

function calcular(){
 var fechain = document.getElementById("fecha").value;
 var fechasplit = fechain.split("/");
 if(fechasplit.length===3){
  var fecha = fechasplit[2]+"-"+fechasplit[1]+"-"+fechasplit[0];
 }else{
  var fecha = fechasplit[0];
 }
 
 console.log(fecha);

  
        var startdate = new Date(fecha);
         var enddate = new Date('2021-12-31');
          
          var diff = enddate.getTime() - startdate.getTime();
            todaydate = Math.round(diff / (1000 * 60 * 60 * 24));
            console.log("today is"+todaydate);
          var  calculodate = 365 - todaydate;
            document.getElementById("diastrans").innerHTML="dias transcurridos: "+calculodate;
  
}
