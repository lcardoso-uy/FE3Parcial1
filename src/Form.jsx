import { useState } from "react";

function Form({onAddMascota}){

    const[mascotaNombre,setMascotaNombre] = useState("");
    const[mascotaOwner,setMascotaOwner] = useState("");
    const[mascotaRaza,setMascotaRaza] = useState("");

    const[validaOk,setValidaOk] = useState("");

    const validarNombre = (nombre) => {
        if (!nombre) return false; // Rechaza cadenas vacías
        const primerCaracter = nombre[0];
        return !/\s/.test(primerCaracter);  // Verifica que el primer carácter no sea cualquier tipo de espacio en blanco (ASCII o no ASCII)
      }

    const validarOwner = (owner) => {
        return owner.length() >= 6
    }

    const handleSubmit = (e) => {
        e.preventDefault();

/*        onAddMascota({mascotaNombre,mascotaOwner,mascotaRaza})*/

        const nombreValido = validarNombre(mascotaNombre);
        const ownerValido = validarOwner(mascotaOwner);

        if (nombreValido && ownerValido) {
            setValidaOk("S")
        }else{
            setValidaOk("N")
        }

        setMascotaNombre("");
        setMascotaOwner("");
        setMascotaRaza("");

    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese el nombre de la mascota " value={mascotaNombre} onChange={(e)=>setMascotaNombre(e.target.value)}/>
            <input type="text" placeholder="Ingrese el nombre del dueño " value={mascotaOwner} onChange={(e)=>setMascotaOwner(e.target.value)}/>
            <input type="text" placeholder="Ingrese la raza de la mascota " value={mascotaRaza} onChange={(e)=>setMascotaRaza(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>

    )
}

export default Form;