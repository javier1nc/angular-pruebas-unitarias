// describe('Pruebas de String');
// it('Deve de regresar un string');

import { mensaje } from "./string";

describe ('Pruebas de string', () => {
    it('Debe de regresar un string', () => {

        const resp = mensaje('Fernando');

        expect(typeof resp).toBe('string');
    })

    it('Debe de retornar un saludo con el nombre enviado', () => {

        const resp = mensaje('Fernando');

        expect( resp ).toContain('Fernando');
    })

})