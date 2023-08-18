function Mascotas({mascotas}){

    return(
        <div>
            <h3>Lista de mascotas que ha registrado</h3>
            {mascotas.map((mascota,index) =>(
                <div key={index} className="card">
                    <p>{mascota.mascotaNombre}{mascota.mascotaOwner}{mascota.mascotaRaza}</p>
                </div>

            ))}
        </div>
    )
}

export default Mascotas;