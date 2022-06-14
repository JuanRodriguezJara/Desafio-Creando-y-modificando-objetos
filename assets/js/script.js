//Primero el constructor de Consultorio con método Getter y Setter
function Consultorio(nombre, paciente){
    var _nombre = nombre;
    var _paciente = paciente || [];

    Object.defineProperty(this, "_getNombre", {
        get: function (){
            return _nombre;
        },
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre){
            _nombre = nombre;
        },
    });
    Object.defineProperty(this, "_getPaciente", {
        get: function (){
            return _paciente;
        },
    });
    Object.defineProperty(this, "_setPaciente", {
        set: function (paciente){
            _paciente = paciente;
        },
    });
};

//Luego el constructor de Paciente con método Getter y Setter
function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico || [];

    Object.defineProperty(this, "_getNombre", {
        get: function (){
            return _nombre;
        },
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre){
            _nombre = nombre;
        },
    });
    Object.defineProperty(this, "_getEdad", {
        get: function (){
            return _edad;
        },
    });
    Object.defineProperty(this, "_setEdad", {
        set: function (edad){
            _edad = edad;
        },
    });
    Object.defineProperty(this, "_getRut", {
        get: function (){
            return _rut;
        },
    });
    Object.defineProperty(this, "_setRut", {
        set: function (rut){
            _nombre = rut;
        },
    });   
    Object.defineProperty(this, "_getDiagnostico", {
        get: function (){
            return _diagnostico;
        },
    });
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico){
            _diagnostico = diagnostico;
        },
    });         
};

//Ahora crear método prototype
// Prototype para consuntorio**
Consultorio.prototype.getNombre = function (){
    return this._getNombre;
};
Consultorio.prototype.setNombre = function (nombre){
    this._setNombre = nombre;
};
Consultorio.prototype.getPaciente = function (){
    return this._getPaciente;
};
Consultorio.prototype.setNombre = function (paciente){
    this._setPaciente = nombre;
};

// Prototype para Paciente**
Paciente.prototype.getNombre = function (){
    return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre){
    this._setNombre = nombre;
};
Paciente.prototype.getEdad = function (){
    return this._getEdad;
};
Paciente.prototype.setEdad = function (edad){
    this._setEdad = edad;
};
Paciente.prototype.getRut = function (){
    return this._getRut;
};
Paciente.prototype.setRut = function (rut){
    this._setRut = rut;
};
Paciente.prototype.getDiagnostico = function (){
    return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico){
    this._setDiagnostico = diagnostico;
};

//Instanciando Pacientes con instrucción new
var paciente1 = new Paciente("Claudio", 38, "15372635-3", "diagnostico A");
var paciente2 = new Paciente("María", 28, "18746251-9", "diagnostico B");
var paciente3 = new Paciente("Eliana", 49, "13827412-8", "diagnostico C");
var paciente4 = new Paciente("Gabriel", 54, "11928881-0", "diagnostico D");
// console.log(paciente1);

//Instanciando Centro Médito
var consulta1 = new Consultorio("Las Condes", [paciente1, paciente2, paciente3, paciente4]);

//Mostrar pacientes en Consola        
Consultorio.prototype.filterPacientePorNombre = function(name){
    this._getPaciente
    .filter((paciente) => paciente._getNombre = name)
    .map((paciente) => {
        console.log("Nombre: " + paciente._getNombre);
        console.log("Edad: " + paciente._getEdad);
        console.log("Rut: " + paciente._getRut);
        console.log("Diagnóstico: " + paciente._getDiagnostico);
        console.log("*********************************************");
    });
};

consulta1.filterPacientePorNombre("María");