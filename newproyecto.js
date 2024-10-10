// Definición de la clase Alumno que incluye los atributos nombre, apellido, edad, materia y calificación.
class Alumno{
    
    // Constructor de la clase Alumno que inicializa los atributos del alumno.
    constructor(nombre, apellido, edad, materia, calificacion){
        
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.materia=materia;
        this.calificacion=calificacion;
        
    }
    
    // Método para agregar un alumno a la tabla correspondiente según la materia que esté cursando.
    agregaralumno(){
        
        let mat1=document.getElementById("materia1").textContent;
        let mat2=document.getElementById("materia2").textContent;
        let mat3=document.getElementById("materia3").textContent;
        let mat4=document.getElementById("materia4").textContent;
        
        if (this.materia==mat1){
            
            let tableBody = document.getElementById('tbody');
            tableBody.innerHTML += `<tr>${`<td>${this.nombre} ${this.apellido}</td>` + `<td>${this.apellido}</td>` + `<td>${this.edad}</td>`+ `<td>${this.materia}</td>`+ `<td>${this.calificacion}</td>`}</tr>`;
            
        }else if (this.materia==mat2){
            
            let tableBody = document.getElementById('tbody2');
            tableBody.innerHTML += `<tr>${`<td>${this.nombre} ${this.apellido}</td>` + `<td>${this.apellido}</td>` + `<td>${this.edad}</td>`+ `<td>${this.materia}</td>`+ `<td>${this.calificacion}</td>`}</tr>`;
            
        }else if (this.materia==mat3){
            
            let tableBody = document.getElementById('tbody3');
            tableBody.innerHTML += `<tr>${`<td>${this.nombre} ${this.apellido}</td>` + `<td>${this.apellido}</td>` + `<td>${this.edad}</td>`+ `<td>${this.materia}</td>`+ `<td>${this.calificacion}</td>`}</tr>`;
            
        }else if (this.materia==mat4){
            
            let tableBody = document.getElementById('tbody4');
            tableBody.innerHTML += `<tr>${`<td>${this.nombre} ${this.apellido}</td>` + `<td>${this.apellido}</td>` + `<td>${this.edad}</td>`+ `<td>${this.materia}</td>`+ `<td>${this.calificacion}</td>`}</tr>`;
            
        }else{
            alert("Materia no impartida este semestre");
        }
        updateAlumnoAndMateriaOptions();
        
    }
}

// Lista para almacenar los objetos de tipo Alumno.
const listaPersonas = [];

// Función para crear un nuevo alumno y agregarlo a la lista de alumnos y a la tabla.
function agregar(){
    const alumno1= new Alumno(document.getElementById("Nombre").value,document.getElementById("Apellido").value,document.getElementById("Edad").value,document.getElementById("Materia").value,"Pendiente");
    
    listaPersonas.push(alumno1);
    console.log(listaPersonas);
    
    alumno1.agregaralumno();
    
}  


const listaMaterias = [];
// Función para establecer el nombre de una materia a partir de la entrada del usuario.
function altademateria1(){
    document.getElementById("materia1").textContent=document.getElementById("Materia1").value;
    listaMaterias.push(document.getElementById("Materia1").value);
    console.log(listaMaterias);
}
function altademateria2(){
    document.getElementById("materia2").textContent=document.getElementById("Materia2").value;
    listaMaterias.push(document.getElementById("Materia2").value);
    console.log(listaMaterias);
}
function altademateria3(){
    document.getElementById("materia3").textContent=document.getElementById("Materia3").value;
    listaMaterias.push(document.getElementById("Materia3").value);
    console.log(listaMaterias);
}
function altademateria4(){
    document.getElementById("materia4").textContent=document.getElementById("Materia4").value;
    listaMaterias.push(document.getElementById("Materia4").value);
    console.log(listaMaterias);
}

const listacalificaciones = []

function buscaralumno() { 

   

  function hacer (obj) {

    if ("nombre" in obj && obj.nombre == document.getElementById("Alumnobuscado").value) {
        return true
     }else{return false}}

     var nuevoarray=listacalificaciones.filter(hacer)

  console.log(nuevoarray);
  console.log(nuevoarray.length);
  console.log(nuevoarray[0].materia)
  if(nuevoarray.length==1){
  document.getElementById("mat1").textContent=nuevoarray[0].materia;
  document.getElementById("calif1").textContent=nuevoarray[0].calificacion;
  document.getElementById("mat2").textContent=" ";
  document.getElementById("calif2").textContent=" ";
  document.getElementById("mat3").textContent=" ";
  document.getElementById("calif3").textContent=" ";
  document.getElementById("mat4").textContent=" ";
  document.getElementById("calif4").textContent=" ";
  document.getElementById("promedioalumno").textContent=" PROMEDIO: "+ nuevoarray[0].calificacion;
  
  


  }
  if(nuevoarray.length==2){
    document.getElementById("mat1").textContent=nuevoarray[0].materia;
    document.getElementById("calif1").textContent=nuevoarray[0].calificacion;
    document.getElementById("mat2").textContent=nuevoarray[1].materia;
    document.getElementById("calif2").textContent=nuevoarray[1].calificacion;
    document.getElementById("mat3").textContent=" ";
    document.getElementById("calif3").textContent=" ";
    document.getElementById("mat4").textContent=" ";
    document.getElementById("calif4").textContent=" ";
    let media= (Number(nuevoarray[0].calificacion)+Number(nuevoarray[1].calificacion))/2;
    document.getElementById("promedioalumno").textContent=" PROMEDIO: "+ media;

    }

    if(nuevoarray.length==3){
        document.getElementById("mat1").textContent=nuevoarray[0].materia;
        document.getElementById("calif1").textContent=nuevoarray[0].calificacion;
        document.getElementById("mat2").textContent=nuevoarray[1].materia;
        document.getElementById("calif2").textContent=nuevoarray[1].calificacion;
        document.getElementById("mat3").textContent=nuevoarray[2].materia;;
        document.getElementById("calif3").textContent=nuevoarray[2].calificacion;
        document.getElementById("mat4").textContent=" ";
        document.getElementById("calif4").textContent=" ";
        let media= (Number(nuevoarray[0].calificacion)+Number(nuevoarray[1].calificacion)+Number(nuevoarray[2].calificacion))/3;
        document.getElementById("promedioalumno").textContent=" PROMEDIO: "+ media;
        }

      if(nuevoarray.length==4){
    document.getElementById("mat1").textContent=nuevoarray[0].materia;
    document.getElementById("calif1").textContent=nuevoarray[0].calificacion;
    document.getElementById("mat2").textContent=nuevoarray[1].materia;
    document.getElementById("calif2").textContent=nuevoarray[1].calificacion;
    document.getElementById("mat3").textContent=nuevoarray[2].materia;;
    document.getElementById("calif3").textContent=nuevoarray[2].calificacion;;
    document.getElementById("mat4").textContent=nuevoarray[3].materia;;
    document.getElementById("calif4").textContent=nuevoarray[3].calificacion;
    let media= (Number(nuevoarray[0].calificacion)+Number(nuevoarray[1].calificacion)+Number(nuevoarray[2].calificacion)+Number(nuevoarray[3].calificacion))/4;
    document.getElementById("promedioalumno").textContent=" PROMEDIO: "+ media;
    }

    





  //for(let ind=0; ind=nuevoarray.length;ind++){
  //let tableBodyAlum = document.getElementById('tbodyAlum')
  //et todo=nuevoarray.join
  //tableBodyAlum.innerHTML += `<tr>${`<td>${nuevoarray.join} </td>`}</tr>`

    
  }

 //for(let ind=0; ind=nuevoarray.length;ind++){
  //let tableBodyAlum = document.getElementById('tbodyAlum')
  //et todo=nuevoarray.join
  //tableBodyAlum.innerHTML += `<tr>${`<td>${nuevoarray.join} </td>`}</tr>`

//function encontrado(student){
//return student.nombre==document.getElementById("Alumnobuscado").value
//}

   // for (let i = 0; i = copia.length; i++) {
    //   if(document.getElementById("Alumnobuscado")==listacalificaciones[i].nombre){
      //  let tableBodyAlum = document.getElementById('tbodyAlum');
       //let subject=listacalificaciones[i].materia
    //let score=listacalificaciones[i].calificacion
    //tableBodyAlum.innerHTML += `<tr>${`<td>${subject} </td>` + `<td>${score}</td>`}</tr>`;
      // }else{}  
 
//}

// Función para asignar una calificación a un alumno para una materia específica.
function asignarCalificacion() {
    const alumno = document.getElementById("AlumnoCalificacion").value;
    const materia = document.getElementById("MateriaCalificacion").value;
    const calificacion = document.getElementById("Calificacion").value;
    
    let tablas = ["tbody", "tbody2", "tbody3", "tbody4"];
    let encontrado = false;
    
    // Itera sobre cada una de las tablas para buscar al alumno y la materia especificada.
    tablas.forEach((tablaId) => {
        let tabla = document.getElementById(tablaId);
        let filas = tabla.getElementsByTagName("tr");
        for (let i = 0; i < filas.length; i++) {
            let celdas = filas[i].getElementsByTagName("td");
            if (celdas.length > 0 && celdas[0].textContent === alumno && celdas[3].textContent === materia) {
                celdas[4].textContent = calificacion;
                encontrado = true;
                listacalificaciones.push({nombre:alumno,materia:materia,calificacion:calificacion})
                console.log(listacalificaciones)
                //ely: 
               
            }
        }
    });
    
    if (!encontrado) {
        alert("Alumno o materia no encontrados. Por favor, verifica los datos ingresados.");
    }
}


// Función para actualizar las opciones del desplegable de alumnos y materias al asignar calificaciones.
function updateAlumnoAndMateriaOptions() {
    let alumnoSelect = document.getElementById("AlumnoCalificacion");
    let materiaSelect = document.getElementById("MateriaCalificacion");

    // Limpia las opciones anteriores
    alumnoSelect.innerHTML = "";
    materiaSelect.innerHTML = "";

    let alumnos = new Set();
    let tablas = ["tbody", "tbody2", "tbody3", "tbody4"];
    //let alumnoMateriasMap = {};

    // Recopila alumnos únicos y sus respectivas materias
    tablas.forEach((tablaId) => {
        let tabla = document.getElementById(tablaId);
        let filas = tabla.getElementsByTagName("tr");
        for (let i = 0; i < filas.length; i++) {
            let celdas = filas[i].getElementsByTagName("td");
            if (celdas.length > 0 && celdas[0].textContent !== "") {
                const fullName = `${celdas[0].textContent}`;
                alumnos.add(fullName);
                //if (!alumnoMateriasMap[fullName]) {
                //    alumnoMateriasMap[fullName] = new Set();
                //}
                //alumnoMateriasMap[fullName].add(celdas[3].textContent);
             
            }
        }
    });

    // Agrega las opciones al desplegable de alumnos
    alumnos.forEach((alumno) => {
        let option = document.createElement("option");
        option.value = alumno;
        option.textContent = alumno;
        alumnoSelect.appendChild(option);
    });

    // Actualiza el desplegable de materias según el alumno seleccionado
    listaMaterias.forEach((mat) =>{
       // materiaSelect.innerHTML = ""; // Limpia las opciones anteriores
       let option = document.createElement("option");
  
                option.value = mat;
                option.textContent = mat;
                materiaSelect.appendChild(option);
            });
        
    ;

        }

