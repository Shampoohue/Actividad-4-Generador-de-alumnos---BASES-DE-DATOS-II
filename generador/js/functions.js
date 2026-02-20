var salida;

const nombres = [
        "Juan", "José", "Luis", "Carlos", "Jesús", "Miguel", "Pedro", "Manuel", "Jorge", "Francisco",
        "Alejandro", "Fernando", "Ricardo", "Daniel", "Roberto", "Eduardo", "Raúl", "Antonio", "Mario", "Óscar",
        "Sergio", "Enrique", "Héctor", "Arturo", "Guillermo", "Ramón", "Andrés", "Rafael", "Felipe", "Víctor",
        "Alberto", "Pablo", "Iván", "Diego", "Emilio", "Adrián", "Hugo", "Ángel", "Marco", "Julio",
        "María", "Guadalupe", "Juana", "Margarita", "Rosa", "Verónica", "Leticia", "Patricia", "Carmen", "Ana",
        "Laura", "Silvia", "Claudia", "Teresa", "Beatriz", "Gabriela", "Alejandra", "Sofía", "Isabel", "Diana",
        "Lucía", "Monserrat", "Yolanda", "Paola", "Karla", "Daniela", "Adriana", "Lorena", "Natalia", "Vanessa",
        "Fernanda", "Marisol", "Rebeca", "Sandra", "Elizabeth", "Araceli", "Lourdes", "Norma", "Berenice", "Ximena"
];
const nombresArmenios = [
        "Aram", "Tigran", "Vardan", "Hayk", "Ashot", "Gagik", "Levon", "Karen", "Suren", "Artur",
        "Narek", "Gevorg", "Hovhannes", "Arsen", "Ruben", "Vahe", "Samvel", "Davyd", "Edgar", "Gor",
        "Sergey", "Mher", "Arman", "Vahan", "Aren", "Sargis", "Hakob", "Stepan", "Petros", "Grigor",
        "Mariam", "Ani", "Anahit", "Lilit", "Narine", "Sona", "Tatev", "Hasmik", "Gohar", "Karine",
        "Ruzan", "Silva", "Emma", "Marine", "Meline", "Nvard", "Zaruhi", "Armine", "Kristine", "Susanna",
        "Elina", "Gayane", "Margarita", "Liana", "Milena", "Siranush", "Varduhi", "Yeranuhi", "Astghik", "Naira",
        "Arpi", "Lusine", "Manushak", "Shushanik", "Anush", "Hripsime", "Taguhi", "Satenik", "Arevik", "Nazeli",
        "Yeghishe", "Movses", "Mkrtich", "Hrach", "Hrant", "Kamo", "Garnik", "Norayr", "Zaven", "Smbat"
];

const apellidos1 = [
                "Hernández", "García", "Martínez", "López", "González",
        "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
        "Flores", "Gómez", "Morales", "Vázquez", "Reyes",
        "Jiménez", "Torres", "Díaz", "Gutiérrez", "Ruiz",
        "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
        "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
        "Juárez", "Ramos", "Domínguez", "Herrera", "Medina",
        "Castro", "Vargas", "Guzmán", "Velázquez", "Rojas",
        "De la Cruz", "Contreras", "Salazar", "Luna", "Ortega",
        "Santiago", "Guerrero", "Estrada", "Bautista", "Cortés",
        "Soto", "Alvarado", "Espinoza", "Lara", "Ávila",
        "Ríos", "Cervantes", "Silva", "Delgado", "Vega",
        "Márquez", "Sandoval", "Carrillo", "Fernández", "León",
        "Mejía", "Solís", "Rosas", "Ibarra", "Valdez",
        "Campos", "Santos", "Camacho", "Navarro", "Maldonado",
        "Rosales", "Acosta", "Peña", "Miranda", "Cabrera",
        "Trejo", "Valencia", "Nava", "Pacheco", "Robles",
        "Molina", "Fuentes", "Hidalgo", "Córdova", "Salgado",
        "Pineda", "Benítez", "Cruzado", "Bravo", "Villarreal",
        "Macias", "De Jesús", "Quintero", "Padilla", "Castañeda",
        "Gallegos", "Carrasco", "Montoya", "Bonilla", "Ojeda"
];
const apellidos2 = [
        "NULL", "Alhassan", "Alkhalil", "Alsaeed", "Almansour", "Aldosari", "Almutairi", "Alotaibi", "Alharbi", "Alzahrani",
        "Abdallah", "Abdulaziz", "Abdulrahman", "Abbas", "Ali", "Hassan", "Hussein", "Mahmoud", "Khalil", "Salman",
        "Fahd", "Nasser", "Omar", "Yousef", "Ibrahim", "Ismail", "Hamdan", "Farah", "Saleh", "Suleiman",
        "Najjar", "Haddad", "Khoury", "Mansour", "Qasem", "Rahman", "Sadiq", "Sharif", "Tariq", "Zayed",
        "Bakri", "Darwish", "Ghazali", "Hakim", "Jabbar", "Latif", "Masri", "Naim", "Qadir", "Rashid",
        "Sabah", "Samir", "Shami", "Tawfiq", "Wahbi", "Yahya", "Zaki", "Amin", "Basri", "Kanaan",
        "Fares", "Habib", "Jaber", "Kamel", "Khatib", "Malik", "Matar", "Nouri", "Saad", "Zein"
];

    function generar(){
        var opcion = document.getElementById("opcion").value;
        switch(opcion){
            case "1": generarSQL(); break;
            case "2": generarPostgres(); break;
            case "3": generarCSV(); break;
            case "4": generarJSON(); break;
        }
        // alert(opcion);
    }

    function generarSQL(){
        salida = "INSERT INTO alumnos VALUES <br>";
        let matricula = 224200000;
        const probabilidadDosNombres = 0.3; // 30%
        var registros = document.getElementById('registros').value;

        for(let i = 0; i < registros; i++){
            const apellido1 = apellidos1[Math.floor(Math.random() * apellidos1.length)];
            const apellido2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];
            const nombreBase = nombres[Math.floor(Math.random() * nombres.length)];
            const nombreArmenio = nombresArmenios[Math.floor(Math.random() * nombresArmenios.length)];

            let apellido2SQL;
            if (apellido2 === "NULL") {
                apellido2SQL = "NULL";
            } else {
                apellido2SQL = `UPPER('${apellido2}')`;
            }

            let nombreFinal;
            if (Math.random() < probabilidadDosNombres) {
                nombreFinal = `${nombreBase} ${nombreArmenio}`;
            } else {
                nombreFinal = nombreBase;
            }

            salida += `(${matricula + i},UPPER('${apellido1}'), ${apellido2SQL},UPPER('${nombreFinal}'),'a${matricula + i}@unison.mx'),<br>`;
        }
        salida = salida.slice(0,-5) + ";";

        document.getElementById("salida").innerHTML = salida;
    }

    function generarPostgres(){
        salida = "INSERT INTO alumnos (expediente, app1, app2, nombres, correo)<br>VALUES<br>";
        let matricula = 224200000;
        const probabilidadDosNombres = 0.3; // 30%
        var registros = document.getElementById('registros').value;

        for(let i = 0; i < registros; i++){
            const apellido1 = apellidos1[Math.floor(Math.random() * apellidos1.length)];
            const apellido2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];
            const nombreBase = nombres[Math.floor(Math.random() * nombres.length)];
            const nombreArmenio = nombresArmenios[Math.floor(Math.random() * nombresArmenios.length)];

            let apellido2SQL;
            if (apellido2 === "NULL") {
                apellido2SQL = "NULL";
            } else {
                apellido2SQL = `UPPER('${apellido2}')`;
            }

            let nombreFinal;
            if (Math.random() < probabilidadDosNombres) {
                nombreFinal = `${nombreBase} ${nombreArmenio}`;
            } else {
                nombreFinal = nombreBase;
            }

            salida += `(${matricula + i},UPPER('${apellido1}'),${apellido2SQL},UPPER('${nombreFinal}'),'a${matricula + i}@unison.mx'),<br>`;
        }
        salida = salida.slice(0,-5) + ";";

        document.getElementById("salida").innerHTML = salida;
    }

    function generarCSV(){
        salida = "expediente, app1, app2, nombres, correo\n";
        let matricula = 224200000;
        const probabilidadDosNombres = 0.3; // 30%
        var registros = document.getElementById('registros').value;

        for(let i = 0; i < registros; i++){
            const apellido1 = apellidos1[Math.floor(Math.random() * apellidos1.length)];
            const apellido2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];
            const nombreBase = nombres[Math.floor(Math.random() * nombres.length)];
            const nombreArmenio = nombresArmenios[Math.floor(Math.random() * nombresArmenios.length)];

            let apellido2SQL;
            if (apellido2 === "NULL") {
                apellido2SQL = "NULL";
            } else {
                apellido2SQL = `${apellido2}`;
            }

            let nombreFinal;
            if (Math.random() < probabilidadDosNombres) {
                nombreFinal = `${nombreBase} ${nombreArmenio}`;
            } else {
                nombreFinal = nombreBase;
            }

            salida += `<br>${matricula + i},${apellido1},${apellido2SQL},${nombreFinal},a${matricula + i}@unison.mx`;
        }
        // salida = salida.slice(0,-5) + ";";

        document.getElementById("salida").innerHTML = salida;
    }
    
    function generarJSON(){
        salida = "[";
        let matricula = 224200000;
        const probabilidadDosNombres = 0.3; // 30%
        var registros = document.getElementById('registros').value;

        for(let i = 0; i < registros; i++){
            const apellido1 = apellidos1[Math.floor(Math.random() * apellidos1.length)];
            const apellido2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];
            const nombreBase = nombres[Math.floor(Math.random() * nombres.length)];
            const nombreArmenio = nombresArmenios[Math.floor(Math.random() * nombresArmenios.length)];

            let apellido2SQL;
            if (apellido2 === "NULL") {
                apellido2SQL = "NULL";
            } else {
                apellido2SQL = `${apellido2}`;
            }

            let nombreFinal;
            if (Math.random() < probabilidadDosNombres) {
                nombreFinal = `${nombreBase} ${nombreArmenio}`;
            } else {
                nombreFinal = nombreBase;
            }

            salida += `<br>{<br>"expediente":${matricula + i},<br>"app1":"${apellido1}",<br>"app2":"${apellido2SQL}",<br>"nombres":"${nombreFinal}",<br>"correo":"a${matricula + i}@unison.mx"<br>},`;
        }
        salida = salida.slice(0,-1) +"<br>]";

        document.getElementById("salida").innerHTML = salida;
    }

    function guardar(){
    var var1 = document.createElement("a");
    
    salida = salida.replaceAll("<br>", "\r\n");
    var1.setAttribute("href","data:text/plain;charset=UTF-8," + encodeURIComponent(salida));
    var1.setAttribute("download", "sistema_escolar.sql");
    
    
    
    var1.style.display = "none";

    var opcion = document.getElementById("opcion").value;
        switch(opcion){
            case "1": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo SQL"); break;
            case "2": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo PSQL"); break;
            case "3": var1.setAttribute("download", "sistema_escolar.csv"); alert("Generando archivo CSV"); break;
            case "4": var1.setAttribute("download", "sistema_escolar.json"); 
            break;
        }

        // alert(opcion);

    document.body.appendChild(var1);
    var1.click();
    document.body.removeChild(var1);
    }
