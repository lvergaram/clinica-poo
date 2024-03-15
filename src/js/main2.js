const STATUS = [
    {index:0,name:'Ingreso',btnClass:''},
    {index:1,name:'Diag',btnClass:'btn-warning'},
    {index:2,name:'Alta',btnClass:'btn-success'}
] 

const cardContainer = document.getElementById("cardContainer")

//1. Crear una función constructora para cada objeto.
//2. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.


// CLASS CLINICA

class Clinica{
    #name
    #pacientes

    constructor(name="nombre clinicaclinica"){
        this.#name=name
        this.#pacientes=[]
    }

    get getName(){ return this.#name}
    get getPacientes(){ return this.#pacientes}

    set setName(name){ this.#name = name}
    set setPacientes(pacientes=[]){ this.#pacientes = pacientes}

    // metodos

    addPacient(paciente){
        this.setPacientes = [...this.getPacientes, paciente]
    }
}


class Paciente{

    #rut
    #name
    #age
    #diagnosis
    #clinica
    #status

    constructor(rut="1-9",name="",age=1,diagnosis="s/d", clinica = null){
        this.#rut = rut
        this.#name = name
        this.#age = age
        this.#diagnosis = diagnosis
        this.#clinica = clinica
        this.#status = 0 // 0:sin diagnostico 1: en diag, 2: de alta

        if(clinica) clinica.setPacientes = [...clinica.getPacientes, this]

        
        
    }

    get getName(){ return this.#name}
    get getRut(){ return this.#rut}
    get getAge(){ return this.#age}
    get getDiagnosis(){ return this.#diagnosis}
    get getClinica(){ return this.#clinica}
    get getStatus(){ return this.#status}
    

    set setName(name){ this.#name = name}
    set setRut(rut){ this.#rut = rut}
    set setAge(age){ this.#age = age}
    set setDiagnosis(diagnosis){ this.#diagnosis = diagnosis}
    set setClinica(clinica){ this.#clinica = clinica}
    set setStatus(status){ this.#status = status}

    
    
}


/*3. Crear un método mediante la propiedad prototype que permita buscar los datos de
los usuarios por nombre y otro método que permita mostrar todos los datos de los
usuarios registrados*/


// findByName
Clinica.prototype.findPacientByName = function(name){
    return this.getPacientes.filter( pacient => pacient.getName.toUpperCase().includes( name.toUpperCase() )  ) 
}


// print todos los pacientes
Clinica.prototype.printAllPacients = function(){
    this.getPacientes.forEach( paciente => console.log(`Paciente: ${paciente.getName} Rut:${paciente.getRut}` ) )
}



//4. Instanciar cada objeto utilizando la instrucción new.
const clinicaMishu = new Clinica("clinica de mishu")


const paciente1 = new Paciente("17333333-4","luis Vergara", 70,"",clinicaMishu  )
const paciente2 = new Paciente("17222222-4","Fanny G", 34,"Esta chiquita",clinicaMishu )
const paciente3 = new Paciente("1111111-6","Gato Mishu", 7,"Esta un poco sobrealimentado, es gordito y peludo y no hace nada en todo el dia, duerme como si chambiara",clinicaMishu )
paciente2.setStatus = 1
paciente3.setStatus = 2


// DOM
const addPacientModal = document.getElementById("addPacientModal")
const newPatientBtn = document.getElementById("newPatientBtn")

newPatientBtn.addEventListener("click", () => {addPacientModal.classList.toggle("hidden")})


function renderPacients(clinica){
    cardContainer.innerHTML = ''
    clinica.getPacientes.forEach( paciente => {
        cardContainer.innerHTML +=
        `<article class="card">
            <p class="card-rut">${paciente.getRut}</p>
            <p class="card-name">${paciente.getName}</p>
            <p class="card-age">${paciente.getAge} Años</p>
            <p class="card-diagnosis">${paciente.getDiagnosis}</p>
            <button class="card-button ${STATUS[paciente.getStatus].btnClass} ">${STATUS[paciente.getStatus].name}</button>
        </article>`
    }

    )
}




renderPacients(clinicaMishu) 







