const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o argumento count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se o argumento names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se o argumento averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se o argumento location retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se o argumento popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se o argumento availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se a função não receber argumentos retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se o tipo do parâmetro for diferente de string retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se o argumento id retorna o id do elefante', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Testa se o parâmetro passado for diferente do esperado retorna null', () => {
    expect(handlerElephants('diferente')).toBe(null);
  });
});
