var $ = el =>document.querySelector(el);
document.addEventListener("DOMContentLoaded", event=>{
    let mostrarVista = document.getElementsByName('opciones'); 

    
    mostrarVista.forEach(element => {   
        element.addEventListener('click', e=>{
            e.stopPropagation();
            let modulo = e.toElement.dataset.modulo;
         verVistas(modulo);
        });
    });
});

function verVistas(modulo) {
    let ruta;
    if(modulo=='alumnos'){
        ruta = 'public/vistas/alumnos/alumnos.html';
    }else{
        ruta = 'public/vistas/docentes/docentes.html';
    }
    fetch(ruta).then(resp => resp.text()).then(resp => {
        $(`#vistas-${modulo}`).innerHTML = resp;
        let btnCerrar = $(".close");
        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });
        let cuerpo = $("body"), script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
    });
}
