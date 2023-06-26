import { getClientes, nuevoCliente } from "./API.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})


async function cargaClientes(){
    const clientes = await getClientes();
    const tablaClientes = document.querySelector('#datosClientes');
    clientes.forEach(element => {
        const {id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto } = element
        tablaClientes.innerHTML += `
        <tr>
            <th scope="row">${id_constructora}</th>
            <td>${nombre_constructora}</td>
            <td>${nit_constructora}</td>
            <td>${nombre_representante}</td>
            <td>${email_contacto}</td>
            <td>${telefono_contacto}</td>
        </tr>
        `
    });
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',newCliente)
function newCliente(e){
    e.preventDefault();
    const constructora = document.getElementById('constructora').value;
    const nitConstructora = document.getElementById('nitConstructora').value;
    const nombreRepre = document.getElementById('nombreRepre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const registro = {
        constructora,
        nitConstructora,
        nombreRepre,
        email,
        telefono
    }
    console.log(registro);
    nuevoCliente(registro)
}