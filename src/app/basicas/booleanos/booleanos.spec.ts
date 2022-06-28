import { usuarioIngresacon } from "./booleanos";

describe('Pruebas de booleanos', () => {
  it('Deve de retornar true', () => {
    const resp = usuarioIngresacon();
    expect(resp).toBeTruthy();
  });
});