<html>
<head>
</head>
<body>


    <script language="JavaScript"> 
       

        //valores
        var alumnos = parseInt(prompt('Ingresar el numero total de alumnos',''));
        var materias = parseInt(prompt('Ingresar el numero de materias',''));
        var globalArray = new Array();
        var cont = 0;

        //crea la tabla
        createTabla(alumnos, materias);


        function createTabla(alumnos, materias){
            var body = document.getElementsByTagName("body")[0];
            var tabla = document.createElement("table");

            for(var i = 0; i <= (alumnos+1); i++){//filas
                filas = document.createElement("tr");
                filas.setAttribute("placeholder", "Materia");
                
                for(var j = 0; j <= (materias+1); j++){//columnas
                    titulos = document.createElement("th");
                    columnas = document.createElement("td");

                    //titulo de la fila de materias
                    if(i==0 && j==0){
                        titulos.innerHTML = "Alumnos";
                        filas.appendChild(titulos);
                    }
                    else if(i==0 && j!=(materias+1)){
                        titulos.innerHTML = "Materia "+j;
                        titulos.setAttribute("coldspan",""+alumnos);
                        filas.appendChild(titulos);
                    }
                    else if (i==0 && j==(materias+1)) {
                        titulos.innerHTML = "Promedio";
                        filas.appendChild(titulos);
                    }
                    else if(i>=1 && j==0 && i <(alumnos+1)){
                        columnas.innerHTML = "Alumno "+i;
                        filas.appendChild(columnas);
                    }
                    else if(i>=1 && j!=(materias+1) && i <(alumnos+1)){//calificaiones
                        columnas.innerHTML = "<input type='number' value='0' id='cal"+i+""+j+"' min='0' max='100' onchange='mostrarPromedio("+i+","+materias+","+alumnos+")'>";
                        filas.appendChild(columnas);
                    }
                    else if(j == (materias+1) && i <(alumnos+1)){//pormedios
                        
                        columnas.innerHTML = "<input type='number' value='0' readonly id='promedio"+i+"' >";
                        filas.appendChild(columnas);
                    }
                    else if(i == (alumnos+1) && j == (materias+1)){//boton
                        columnas.innerHTML = "<input type='button' value='Promedio Grupal'  id='boton' onclick='operaciones("+alumnos+")'>";
                        filas.appendChild(columnas);
                    }
                    else if(i == (alumnos+1) && j < (materias+1)){
                        columnas.innerHTML = "";
                        filas.appendChild(columnas);
                    }
                    
                    
                }
                tabla.appendChild(filas);
                
            }

            //CSS de la tabla
            tabla.setAttribute("border", "5");
            tabla.setAttribute("text-align", "center");
            tabla.setAttribute("align","center");
            tabla.setAttribute("border-collapse", "collapse");
            body.appendChild(tabla);
            
        }
        
        //calcular promedio 
        function mostrarPromedio(posicionAlumno, materias, alumnos){
            
            var prom = document.getElementById("promedio"+posicionAlumno);
            var promedioArray = new Array(materias);
            var i = 0; cont++;
            var sumaTotal = 0;
            var promedio = 0;
            

            for (var j = 1; j <= materias; j++) {
                promedioArray[i] = parseInt(document.getElementById("cal"+posicionAlumno+j).value);
                i++
            }

            for (var k = 0; k < promedioArray.length; k++) {
                sumaTotal = sumaTotal + promedioArray[k];
            }
            
            promedio = sumaTotal / materias;
            prom.setAttribute("value",""+promedio);
            
            if(cont == materias){
                cont=0;
                globalArray.push(promedio);
            }
            
        }
        
        function operaciones(alumnos){
            
            var body = document.getElementsByTagName("body")[0];
            var parrafo = document.createElement("P");
            var promediosAlumno = new Array(alumnos);
            var promGrupal = 0, promAprobado = 0, promReprobado = 0;
            var totalReprobado = 0, totalAprobado = 0;
            var porcentajeAprobado = 0, porcentajeReprobado = 0;
            
            //Calcular Promedio grupal
            for (var i = 0; i < globalArray.length; i++) {
                promGrupal += globalArray[i];
                
                if (globalArray[i] >= 70) {//promedio de los aprobados 
                    promAprobado += globalArray[i];
                    totalAprobado++;
                }
                else{//promedio de los reprobados
                    promReprobado += globalArray[i];
                    totalReprobado++;
                }
            }
            promGrupal = promGrupal/alumnos;//Promedio grupal
            promAprobado = promAprobado/alumnos;//promedio de los aprobados
            promReprobado = promReprobado/alumnos;//promedio de los reprobados
            porcentajeAprobado = (totalAprobado*100)/alumnos;//porcentaje de aprobados
            porcentajeReprobado = (totalReprobado*100)/alumnos;//porcentaje de reprobados    
            
            parrafo.innerHTML += "Promedio Total: "+promGrupal+"<br>";
            parrafo.innerHTML += "<br>";
            parrafo.innerHTML += "Total de Aprobados:  "+totalAprobado+"<br>";
            parrafo.innerHTML += "Promedio de Aprobados:  "+promAprobado+"<br>";
            parrafo.innerHTML += "Total de Reprobados: "+totalReprobado+"<br>";
            parrafo.innerHTML += "Promedio de Reprobados: "+promReprobado+"<br>";
            parrafo.innerHTML += "<br>";
            parrafo.innerHTML += "Porcentaje de aprobación:  "+porcentajeAprobado+"<br>";
            parrafo.innerHTML += "Procentaje de reprobación: "+porcentajeReprobado+"<br>";
            body.appendChild(parrafo);
            
        }
        

    </script>
</body>
</html>