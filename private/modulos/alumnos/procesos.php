<? php

include ( '../../Config/config.php' );
$ alumno = nuevo alumno ( $ conexion );

$ proceso = '' ;

if ( isset ( $ _GET [ 'proceso' ]) && strlen ( $ _GET [ 'proceso' ])> 0 ) {
    $ proceso = $ _GET [ 'proceso' ];
}

$ alumno -> $ proceso ( $ _GET [ 'alumno' ]);
print_r ( json_encode ( $ alumno -> respuesta ));

clase alumno {
    privado  $ datos = array (), $ bd ;
    public  $ respuesta = [ 'msg' => 'correcto' ];

     función  pública __construct ( $ bd ) {
        $ this -> bd = $ bd ;
    }

     función  pública recibirDatos ( $ alumno ) {
        $ this -> datos = json_decode ( $ alumno , verdadero );
        $ this -> validar_datos ();
    }

     función  privada validar_datos () {
        if ( empty ( $ this -> datos [ 'codigo' ])) {
            $ this -> respuesta [ 'msg' ] = 'Por favor Ingrese el codigo del estudiante' ;
        
        }
        if ( empty ( $ this -> datos [ 'nombre' ])) {
            $ this -> respuesta [ 'msg' ] = 'Por favor Ingrese el nombre del estudiante' ;

        }
        if ( empty ( $ this -> datos [ 'direccion' ])) {
            $ this -> respuesta [ 'msg' ] = 'Por favor Ingrese la direccion del estudiante' ;

        }
        $ this -> almacen_alumno ();
    }

     función  privada almacena_alumno () {
        if ( $ this -> respuesta [ 'msg' ] === 'correcto' ) {
            if ( $ this -> datos [ 'accion' ] === "nuevo" ) {
                $ this -> bd -> consultas ( '
                INSERTAR EN LOS ALUMNOS (codigo, nombre, direccion, telefono) VALORES (
                    "' . $ this -> datos [ ' codigo ' ]. '",
                    "' . $ this -> datos [ ' nombre ' ]. '",
                    "' . $ this -> datos [ ' direccion ' ]. '",
                    "' . $ this -> datos [ ' telefono ' ]. '"
                    )
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro insertado con exito' ;
            } else  if ( $ this -> datos [ 'accion' ] === 'modificar' ) {
                $ this -> bd -> consultas ( '
                ACTUALIZAR conjunto de alumnos 
                codigo = "' . $ this -> datos [ ' codigo ' ]. '",
                nombre = "' . $ this -> datos [ ' nombre ' ]. '",
                direccion = "' . $ this -> datos [ ' direccion ' ]. '",
                telefono = "' . $ this -> datos [ ' telefono ' ]. '"
                DONDE idAlumno = " ' $ este -> Datos [ 'idAlumno' ]. '"
                ' );
                $ this -> respuesta [ 'msg' ] = 'Registro actualizado con exito' ;
            }
        }
    }

     función  pública buscarAlumno ( $ valor = '' ) {
        $ this -> bd -> consultas ( '
        SELECCIONAR alumnos.idAlumno, alumnos.codigo, alumnos.nombre, alumnos.direccion, alumnos.telefono
        DE alumnos
        DONDE alumnos.codigo ME GUSTA "% ' . $ Valor . '%" O alumnos.nombre ME GUSTA "% ' . $ Valor . '%"
        ' );
        devuelve  $ this -> respuesta = $ this -> bd -> obtener_datos ();
    }

     función  pública eliminarAlumno ( $ idAlumno = '' ) {
        $ this -> bd -> consultas ( '
        BORRAR alumnos 
        DE alumnos
        WHERE alumnos.idAlumno = "' . $ IdAlumno . '"
        ' );
        $ this -> respuesta [ 'msg' ] = "Registro Eliminado con Exito" ;
    }
}

?>