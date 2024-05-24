// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido. 

export const requestStatuses = async() => {
    let res = await fetch("http://172.16.101.146:5518/requests")
    let data = await res.json();
    let dataUpdate = []

    data.forEach(val => {
        if (!dataUpdate.includes(val.status)) {
            dataUpdate.push(val.status)
        }
    })
    
    return dataUpdate;

}

//9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequestCodeClientDateRequestDateWait = async () => {
    let res = await fetch("http://172.16.101.146:5518/requests");
    let data = await res.json();
    let overdueRequests = [];

    data.forEach(val => {
        // Verifica si el pedido no ha sido entregado
        if (val.status === "Entregado") {
            // Convierte las fechas a objetos Date
            let fechaEsperada = new Date(val.date_wait);
            let fechadelivery = new Date(val.date_delivery);
            console.log(fechaEsperada, fechadelivery)
            // Compara las fechas
            if (fechaEsperada < fechadelivery) {
                // Si la fecha esperada es anterior a la fecha actual, agrega el pedido a la lista
                overdueRequests.push({
                    code_request: val.code_request,
                    code_client: val.code_client,
                    date_wait: val.date_wait,
                    date_delivery: val.date_delivery
                });
            }
        }
    });

    return overdueRequests;
};

//10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
export const getOverdueRequests = async () => {
    let res = await fetch("http://172.16.101.146:5518/requests");
    let data = await res.json();
    let overdueRequests = [];

    data.forEach(val => {
        if (val.status === "Entregado") {
            let fechaEntrega = new Date(val.date_delivery);
            let fechaEspera = new Date(val.date_wait);
            let timeDifference = fechaEspera.getTime() - fechaEntrega.getTime();
            let daysDifference = timeDifference / (1000 * 60 * 60 * 24);

            if (daysDifference >= 3) {
                overdueRequests.push({
                    client: val.code_client,
                    request: val.code_request,
                    fecha_esperada: val.date_wait, 
                    fecha_entrega: val.date_delivery
                });
            }
        }
    });

    return overdueRequests;
};

//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009
export const getAllRejectedOrdersIn2009 = async () => {
    let res = await fetch("http://172.16.101.146:5518/requests")
    let data = await res.json();
    let rejectsorder = []

    data.forEach(order => {
        if (order.status === "Rechazado" && new Date(order.date_request).getFullYear() === 2009){
            rejectsorder.push(order);
        }
        else ("pipipi")

    }
    );
    return rejectsorder;
}

//12.Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier ano
export const getAllDeliveredOrderInJanuary = async () => {
    console.log("djksjdk")
    let res = await fetch("http://172.16.101.146:5518/requests")
    let data = await res.json();
    let DeliveredJanuary = []

    data.forEach(order => {
        if (order.status === "Entregado" && new Date(order.date_request).getMonth() === 0){
            DeliveredJanuary.push(order)
        }
    })
    return DeliveredJanuary
}

export const getAllClientsWhoRequest = async(code)=>{
    let res = await fetch(`http://172.16.101.146:5518/requests?code_client=${code}`)
    let data =await res.json();
    return data;
}

