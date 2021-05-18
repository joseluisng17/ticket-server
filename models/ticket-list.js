const Ticket = require('./ticket');

class TicketList{

    constructor() {
        this.ultimoNumero = 0;

        this.pendientes = [];
        this.asignados = [];

    }

    get siguienteNumero() {
        this.ultimoNumero ++;
        return this.ultimoNumero;
    }

    // 3 que se verán en las tarjetas y 10 en el historial
    get ultimos13(){
        return this.asignados.slice(0,13);
    }

    crearTicket(){
        const nuevoTicker = new Ticket( this.siguienteNumero );
        this.pendientes.push( nuevoTicker );
        return nuevoTicker;
    }

    asignarTicket(agente, escritorio){

        if( this.pendientes.length == 0 ){
            return null;
        }

        // la funcion shift() remueve el primer elemento del arreglo
        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        // la función unshift() inster un elemento al inicio del arreglo
        this.asignados.unshift( siguienteTicket );

        return siguienteTicket;
    }

}

module.exports = TicketList;