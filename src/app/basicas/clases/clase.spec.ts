import { Jugador } from "./clase";

describe('Pruba de clase', () => {

    let jugador = new Jugador();

    beforeAll(() => {
        //console.log('beforeAll');
        
    });

    afterAll(() => {
        //console.log('afterAll');
    });

    beforeEach(() => {
        //console.log('beforeEach');
        //jugador.hp = 100;
        jugador = new Jugador();

    });

    afterEach(() => {
        //console.log('afterEach');
    });

     
    it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
        //const jugador = new Jugador();

        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);
    });

    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        //const jugador = new Jugador();

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    it('Debe de retornar 100 de hp, si recibe 100 de daño o mas', () => {
        //const jugador = new Jugador();

        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);
    });
});