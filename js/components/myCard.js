import { 
    getAllClientsFromCityAndCode,  
    getAll,
    getAllClientsAndSalesManagers,
    getAllClientsAndSalesManagerNameAndIfThereIsPayments,
    getAllClientsWithoutPaymentsAndSalesManagerName,
    getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
    getAllclientsNotPayments,
    getAllclientsNotRequests,
    getAllclientsNotRequestsAndNotPayments,
    getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity,
    getAllSpanishClients,
    getAllClientsInFuenlabrada,
    getAllClientsWhoHaveRequestedButHaventPaid,

} from "../module/clients.js";

import {
    getAllEmpleyeesAndBoss,
    getAllEmployeesAndBossOfBoss,
    getEmployeesWithoutOfficeAndClients,
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    getAllEmployeesThatDontHaveOffice,
    getAllEmployeesThatArentAssociatedWithAnyClient,
    getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice,
    getAllEmployeesThatArentAssociatedWithAnyClientOrOffice,
    getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName,
    
    
} from "../module/employees.js";

import {
    getProductsNeverOrdered,
    getProductsNotOrdered,
    getAllProductsOrnamentales100,
} from "../module/product.js";

import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    AllDirectionsWithClientsInFuenlabrada
}   from "../module/offices.js"

import {
    requestStatuses,
    getAllCodeRequestCodeClientDateRequestDateWait,
    getOverdueRequests,
    getAllRejectedOrdersIn2009,
    getAllDeliveredOrderInJanuary,
} from "../module/requests.js"

import {
    getAllPaymentsFromPayPalEachYear,
    getAllFormsPayments,
  
  } from "../module/payment.js"

  
  
  
//PRIMERA PARTE DE LAS CONSULTAS------------------------------------------------------



//
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }


//1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        console.log(await getAllOficceAndCodeCity());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de Oficina: </b>${val.code_office}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil();
        console.log(await getAllOficceCityAndMovil());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de Oficina: </b>${val.code_office}</p>
                            <p><b>Telefono: </b>${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
    async getAllFullNameAndEmailsAndBossDesign(){
        let data = await getAllFullNameAndEmailsAndBoss();
        console.log(await getAllFullNameAndEmailsAndBoss());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b>${val.name}</p>
                            <p><b>Nombre Completo: </b>${val.fullLastname}</p>
                            <p><b>email: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

//4.Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        console.log(await getBossFullNameAndEmail());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>position: </b>${val.position}</p>
                            <p><b>Nombre: </b>${val.name}</p>
                            <p><b>Nombre Completo: </b>${val.fullLastname}</p>
                            <p><b>email: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

//5 Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
    async getAllFullnamePositionDiferentSalesRepresentativeDesign(){
        let data = await getAllFullnamePositionDiferentSalesRepresentative();
        console.log(await getAllFullnamePositionDiferentSalesRepresentative());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>position: </b>${val.position}</p>
                            <p><b>Nombre: </b>${val.name}</p>
                            <p><b>Nombre Completo: </b>${val.fullLastname}</p>

                        </div>
                    </div>
                </div>
            `;
        });
    }

//6. Devuelve un listado con el nombre de los todos los clientes españoles.
    async getAllSpanishClientsDesign(){
        let data = await getAllSpanishClients();
        console.log( await getAllSpanishClients())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b>${val.client_name}</p>
                            <p><b>Pais: </b>${val.region}</p>

                        </div>
                    </div>
                </div>
            `;
        });
    }

// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido. 
    async requestStatusesDesign(){
        let data = await requestStatuses();
        console.log(await requestStatuses())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Estados</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Estados: </b>Entregado, Rechazado, Pendiente</p>


                        </div>
                    </div>
                </div>
            `;
        });
    }
//8
//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
    async getAllCodeRequestCodeClientDateRequestDateWaitDesign(){
        let data = await getAllCodeRequestCodeClientDateRequestDateWait();
        console.log(await getAllCodeRequestCodeClientDateRequestDateWait());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo de pedido: </b>${val.code_request}</p>
                            <p><b>codigo de cliente: </b>${val.code_client}</p>
                            <p><b>fecha de espera: </b>${val.date_wait}</p>
                            <p><b>fecha de entrega: </b>${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
//10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
    async getOverdueRequestsDesign(){
        let data = await getOverdueRequests();
        console.log(await getOverdueRequests());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.client}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo de pedido: </b>${val.client}</p>
                            <p><b>codigo de cliente: </b>${val.request}</p>
                            <p><b>fecha de espera: </b>${val.fecha_esperada}</p>
                            <p><b>fecha de entrega: </b>${val.fecha_entrega}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.
    async getAllRejectedOrdersIn2009Design(){
        let data = await getAllRejectedOrdersIn2009();
        console.log(await getAllRejectedOrdersIn2009());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo de pedido: </b>${val.code_request}</p>
                            <p><b>codigo de cliente: </b>${val.code_client}</p>
                            <p><b>fecha de espera: </b>${val.date_wait}</p>
                            <p><b>fecha de entrega: </b>${val.date_delivery}</p>
                            <p><b>Estatus: </b>${val.status}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

//12.Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier ano
    async getAllDeliveredOrderInJanuaryDesign(){
        let data = await getAllDeliveredOrderInJanuary();
        console.log(await getAllDeliveredOrderInJanuary())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo de pedido: </b>${val.code_request}</p>
                            <p><b>fecha de espera: </b>${val.date_wait}</p>
                            <p><b>fecha de entrega: </b>${val.date_delivery}</p>
                            <p><b>Estatus: </b>${val.status}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
// 13 Devuelve un listado con todos los pagos que se realizaron en el  año 2008 mediante Paypal. Ordene el resultado de mayor a menor.
    async getAllPaymentsFromPayPalEachYearDesign(){
        let data = await getAllPaymentsFromPayPalEachYear();
        console.log(await getAllPaymentsFromPayPalEachYear())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.code_client}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo de cliente: </b>${val.code_client}</p>
                            <p><b>Metodo de pago: </b>${val.payment}</p>
                            <p><b>fecha de pago: </b>${val.date_payment}</p>
                            <p><b>Valor: </b>${val.total}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

//14.Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. tenga en cuantta que no deben aparecer formas de pago repetidas
    async getAllFormsPaymentsDesign(){
        let data = await getAllFormsPayments()
        console.log(await getAllFormsPayments());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Metodos de pago</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Metodos de pago: </b>Paypal, Transferencia, Cheque</p>


                        </div>
                    </div>
                </div>
            `;
        });
    
    }

//15.Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
    async getAllProductsOrnamentales100Design(){
        let data = await getAllProductsOrnamentales100();
        console.log(await getAllProductsOrnamentales100())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>codigo : ${val.code_product}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b>${val.name}</p>
                            <p><b>Gama: </b>${val.gama}</p>
                            <p><b>Stock: </b>${val.stock}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


//16
    async getClientsEmployDesign(){
        let data = await getAllClientsFromCityAndCode();
        console.log(await getAllClientsFromCityAndCode())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


//SEGUNDA PARTE DE LAS MULTITABLA------------------------------------------------------------------------------------------------------------------------------------------------------
//2.1 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
    async getAllClientsAndSalesManagersDesign(){
        let data = await getAllClientsAndSalesManagers();
        console.log(await getAllClientsAndSalesManagers())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Representante de Ventas: </b>${val.sales_manager_name}</p>

                        </div>
                    </div>
                </div>
            `
        });

    }
//2.2 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPayments();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });
    }

//2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsWithoutPaymentsAndSalesManagerNameDesign(){
        let data = await getAllClientsWithoutPaymentsAndSalesManagerName();
        console.log(await getAllClientsWithoutPaymentsAndSalesManagerName())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });

    }
//2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.ClientsName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.ClientsName}</p>
                            <p><b>Representante de Ventas: </b>${val.manager}</p>
                            <p><b>Ciudad de Oficina </b>${val.cityoffice}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }


//2.5 Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    async getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCityDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.ClientsName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.ClientsName}</p>
                            <p><b>Representante de Ventas: </b>${val.manager}</p>
                            <p><b>Ciudad de Oficina </b>${val.cityoffice}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }
//2.6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
    async getAllClientsInFuenlabradaDesign(){
        let data = await getAllClientsInFuenlabrada();
        console.log( await getAllClientsInFuenlabrada());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.client_name}</p>
                            <p><b>Direccion: </b>${val.address1}</p>
                            <p><b>Ciudad de Oficina </b>${val.city}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }

//2.7

//2.8 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
    async getAllEmpleyeesAndBossDesign(){
        let data = await getAllEmpleyeesAndBoss();
        console.log(await getAllEmpleyeesAndBoss());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Empleado: </b>${val.name}<p>
                            <p><b>Boss </b>${val.boss}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    
    }

    //2.9
    async getAllEmployeesAndBossOfBossDesign(){
        let data = await getAllEmployeesAndBossOfBoss();
        console.log(await getAllEmployeesAndBossOfBoss());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.employee}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Empleado: </b>${val.employee}</p>
                            <p><b>Boss: </b>${val.boss}</p>
                            <p><b>bossOfBoss: </b>${val.bossOfBoss}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    //2.10
    async getEmployeesWithoutOfficeAndClientsDesign(){
        let data = await getEmployeesWithoutOfficeAndClients();
        console.log(await getEmployeesWithoutOfficeAndClients());
        
    }

//TERCERA PARTE DE LAS MULTITTABLAS---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3.1  Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago. 
    async getAllclientsNotPaymentsDesign(){
        let data = await getAllclientsNotPayments();
        console.log(await getAllclientsNotPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });
    }

// 3.2 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
    async getAllclientsNotRequestsDesign(){
        let data = await getAllclientsNotRequests();
        console.log(await getAllclientsNotRequests());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">getAllEmployeesAndBossOfBoss
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });

    }

// 3.3 Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
    async getAllclientsNotRequestsAndNotPaymentsDesign(){
        let data = await getAllclientsNotRequestsAndNotPayments();
        console.log( await getAllclientsNotRequestsAndNotPayments());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago ni pedido : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>


                        </div>
                    </div>
                </div>
        `
        });

    }


//3.4  Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
    async getAllEmployeesThatDontHaveOfficeDesign(){
        let data = await getAllEmployeesThatDontHaveOffice();
        console.log(await getAllEmployeesThatDontHaveOffice());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Empleado:  ${val.name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.employee_code}</p>
                            <p><b>Nombre:  ${val.name }</p>


                        </div>
                    </div>
                </div>
        `
        });
    }
//3.5 Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

    async getAllEmployeesThatArentAssociatedWithAnyClientDesign(){
        let data = await getAllEmployeesThatArentAssociatedWithAnyClient();
        console.log(await getAllEmployeesThatArentAssociatedWithAnyClient());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Empleado:  ${val.name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.employee_code}</p>
                            <p><b>Nombre:  ${val.name }</p>


                        </div>
                    </div>
                </div>
        `
        });
    }
//3.6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.

    async getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOfficeDesign(){
        let data = await getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice();
        console.log(await getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Empleado:  ${val.name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.employee_code}</p>
                            <p><b>Nombre:  ${val.name }</p>


                        </div>
                    </div>
                </div>
        `
        });
    
    }
//3.7 Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
async getAllEmployeesThatArentAssociatedWithAnyClientOrOfficeDesign(){
    let data = await getAllEmployeesThatArentAssociatedWithAnyClientOrOffice();
    console.log(await getAllEmployeesThatArentAssociatedWithAnyClientOrOffice());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> SIn oficina : </p>

                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Empleado: </b>${val.name}</p>
                        <p><b>Codigo: </b>${val.employee_code}</p>

                    </div>
                </div>
            </div>
`
});

}


//3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido.
async getProductsNeverOrderedDesign(){
    let data = await getProductsNeverOrdered();
    console.log(await getProductsNeverOrdered());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> Productos nunca pedidos : </p>
                    <div>${val.code_product }</div> 
                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del pedido: </b>${val.name}</p>
                        
                    </div>
                </div>
            </div>
`
});
}

//3.9
async getProductsNotOrderedDesign(){
    let data = await getProductsNotOrdered();
    console.log(await getProductsNotOrdered());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> Productos nunca pedidos : </p>

                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del pedido: </b>${val.name}</p>
                        <p><b>description: </b>${val.description}</p>
                        <p><b>Image: </b>${val.image}</p>
                        
                    </div>
                </div>
            </div>
`
});
}

//3.10 Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama Frutales.
    async getEmployeesWithoutOfficeAndClientsDesign(){
        let data = await getEmployeesWithoutOfficeAndClients();
        console.log(await getEmployeesWithoutOfficeAndClients())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Oficinas : </p>
    
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Oficinas: </b>${val.name_office}</p>

                            
                        </div>
                    </div>
                </div>
    `
    });

    }
//3.11 Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.

    async getAllClientsWhoHaveRequestedButHaventPaidDesign(){
        let data = await getAllClientsWhoHaveRequestedButHaventPaid();
        console.log(await getAllClientsWhoHaveRequestedButHaventPaid())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p>No han pagado: </p>
    
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del pedido: </b>${val.name}</p>
                            <p><b>description: </b>${val.description}</p>
                            <p><b>Clientes </b>${val.description}</p>
                            
                        </div>
                    </div>
                </div>
    `
    });
    }

//3.12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.
    async getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossNameDesign(){
        let data = await getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName();
        console.log(await getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p>informacion:  </p>
    
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Empleado: </b>${val.name}</p>
                            <p><b>LastName de Empleado: </b>${val.lastname1}</p>
                            <p><b>Codigo empleado: </b>${val.employee_code}</p>
                            <p><b>Jefe Asociado </b>${val.name_boss}</p>
                            
                        </div>
                    </div>
                </div>
    `
    });
    }



    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        /*PARTE DE CLIENTES*/
        if(name=="logic" && now=="office_1") this.getAllOficceAndCodeCityDesign()
        if(name=="logic" && now=="office_2") this.getAllOficceCityAndMovilDesign()


        if(name=="logic" && now=="client_16") this.getClientsEmployDesign()
        if(name=="logic" && now=="client_6") this.getAllSpanishClientsDesign()
            
        if(name=="logic" && now=="requests_7") this.requestStatusesDesign()
        if(name=="logic" && now=="requests_9") this.getAllCodeRequestCodeClientDateRequestDateWaitDesign()
        if(name=="logic" && now=="requests_10") this.getOverdueRequestsDesign()
        if(name=="logic" && now=="requests_11") this.getAllRejectedOrdersIn2009Design()
        if(name=="logic" && now=="requests_12") this.getAllDeliveredOrderInJanuaryDesign()


        if(name=="logic" && now=="payments_13") this.getAllPaymentsFromPayPalEachYearDesign()
        if(name=="logic" && now=="payments_14") this.getAllFormsPaymentsDesign()

            


        if(name=="logic" && now=="client_2.1") this.getAllClientsAndSalesManagersDesign()
        if(name=="logic" && now=="client_2.2") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign()
        if(name=="logic" && now=="client_2.3") this.getAllClientsWithoutPaymentsAndSalesManagerNameDesign()
        if(name=="logic" && now=="client_2.4") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign()
        if(name=="logic" && now=="client_2.5") this.getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCityDesign()
        if(name=="logic" && now=="client_2.6") this.getAllClientsInFuenlabradaDesign()
        // if(name=="logic" && now=="client_2.7") this.

        
        if(name=="logic" && now=="employ_3") this.getAllFullNameAndEmailsAndBossDesign()
        if(name=="logic" && now=="employ_4") this.getBossFullNameAndEmailDesign()
        if(name=="logic" && now=="employ_5") this.getAllFullnamePositionDiferentSalesRepresentativeDesign()
        if(name=="logic" && now=="employ_2.8") this.getAllEmpleyeesAndBossDesign()
        if(name=="logic" && now=="employ_2.9") this.getAllEmployeesAndBossOfBossDesign()
        if(name=="logic" && now=="employ_3.4") this.getAllEmployeesThatDontHaveOfficeDesign()
        if(name=="logic" && now=="employ_3.5") this.getAllEmployeesThatArentAssociatedWithAnyClientDesign()
        if(name=="logic" && now=="employ_3.6") this.getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOfficeDesign()
        if(name=="logic" && now=="employ_3.7") this.getAllEmployeesThatArentAssociatedWithAnyClientOrOfficeDesign()
        if(name=="logic" && now=="employ_3.10") this.getEmployeesWithoutOfficeAndClientsDesign()
        if(name=="logic" && now=="employ_3.12") this.getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossNameDesign()

            




            

        if(name=="logic" && now=="client_3.1") this.getAllclientsNotPaymentsDesign()
        if(name=="logic" && now=="client_3.2") this.getAllclientsNotRequestsDesign()
        if(name=="logic" && now=="client_3.3") this.getAllclientsNotRequestsAndNotPaymentsDesign()
        if(name=="logic" && now=="client_3.11") this.getAllClientsWhoHaveRequestedButHaventPaidDesign()

            

            
        /*PARTE DE EMPLEADOS*/ 
        if(name=="logic" && now=="employe_2.8") this.getAllEmpleyeesAndBossDesign()

        /*PARTE DE PRODUCTOS*/
        if(name=="logic" && now=="product_3.8") this.getProductsNeverOrderedDesign()
        if(name=="logic" && now=="product_3.9") this.getProductsNotOrderedDesign()
        if(name=="logic" && now=="product_15") this.getAllProductsOrnamentales100Design()

            




        
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}