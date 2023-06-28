const urlClientes = "http://localhost/restApi-con-js-y-php/clase2/backend/controllers/clientes.php?op=GetAll";
const urlNew = "http://localhost/restApi-con-js-y-php/clase2/backend/controllers/clientes.php?op=insert";
const urlDelete = "http://localhost/restApi-con-js-y-php/clase2/backend/controllers/clientes.php?op=delete";

export const getClientes = async ()=>{
    try {
        const clientes = await fetch(urlClientes);
        const datoClientes = await clientes.json();
        return datoClientes;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoCliente = async(registro)=>{
    try {
        await fetch(urlNew,{
            method: "POST",
            body:JSON.stringify(registro),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}


export const deleteCliente = async idcliente =>{
    try {
        await fetch(`${urlDelete}&id=${idcliente}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}