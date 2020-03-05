
document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir');
  
        let monedas = {
            "dolar":1,
            "Colones (SV)":8.75,
            "Yenes":111.27,
            "Rupia":69.75,
            "lempira":24.9,
            "Peso (MX) ":19.36,
            "Bitcoin":0.00026},


            almacenamiento = {
            "megabyte":1,
            "bit": 8388608,
            "byte": 1048576,
            "kilobyte": 1024,
            "gigabyte":0.000000001,
            "Terabyte":0.00000095367431660625},

            longitud = {
            "Metro": 1,
            "cm": 100,
            "Pulgada": 39.3701,
            "Pie":3.28084,
            "Varas":1.1963081929167,
            "Yardas":1.09361,
            "Km": 0.001,
            "milla": 0.000621371};

            let $res = document.querySelector("#lblRespuesta");
            if(opcion.value == "moneda"){
            $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
            } else if(opcion.value == "almacenamiento"){
            $res.innerHTML = `Respuesta: ${ (almacenamiento[a]/almacenamiento[de]*cantidad) }`;
            } else if(opcion.value == "longitud"){
            $res.innerHTML = `Respuesta: ${ (longitud[a]/longitud[de]*cantidad).toFixed(2) }`;
            };
        });
      });
      
      function seleccionar() {
        let opcion = document.getElementById('cboConvertir'),
        de1 = document.getElementById('cboDe'),
        a1 = document.getElementById('cboA');
        de1.value="";
        a1.value="";
        de1.innerHTML="";
        a1.innerHTML="";
      
        if(opcion.value == "moneda"){
          var  array = ["dolar!Dolar","colones (sv)!Colones(SV) ","yenes!Yenes","rupia!Rupia","lempiras!Lempiras"," peso (mx)! Peso (MX)","bitcoin!Bitcoin"];
        } else if(opcion.value == "almacenamiento"){
            var array = ["megabyte!Megabyte","bit!Bit","byte!Byte","kilobyte!Kilobyte","terabyte!Terabyte","gigabyte!Gigabyte"]; 
        } else if(opcion.value == "longitud"){
          var array = ["metros!Metros","cm!Centimetros","pulgada!Pulgada","pie!Pie","varas!Varas","yardas!Yardas","km!Kilometros","millas!Millas"];
        };
      
        for(var i=0;i<array.length;i++){ 
          var repair = array[i].split("!");
          var newop = document.createElement("option");
          newop.value = repair[0]
          newop.innerHTML = repair[1];
          de1.options.add(newop);
        };
        for(var i=0;i<array.length;i++){ 
          var repair = array[i].split("!");
          var newop = document.createElement("option");
          newop.value = repair[0]
          newop.innerHTML = repair[1];
          a1.options.add(newop);
        };
       }
    