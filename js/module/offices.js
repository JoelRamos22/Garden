// 1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://172.16.101.146:5514/offices?city")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://172.16.101.146:5514/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    })
    return dataUpdate
}


//obtener el nombre de la ciudad de la oficina
export const getAllOffices = async(codeOffice)=>{
    let res = await fetch(`http://172.16.101.146:5514/offices?code_office=${codeOffice}`)
    let data = await res.json();
    return data;
}

//2.6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const AllDirectionsWithClientsInFuenlabrada = async()=>{
    let clients = await fetch("http://172.16.101.146:5511/clients?city=Fuenlabrada").then(response => response.json())
    let offices = await fetch("http://172.16.101.146:5514/offices").then(response => response.json())
    let dataUpdate = []

    clients.forEach(client => {
        offices.forEach(office => {
            if (client.code_office == office.code_office)
            dataUpdate.push({
                office_address: `${office.address1} ${office.address2}`
            }
                
            );
        }

            
            );
      
    })


    return dataUpdate;
}
