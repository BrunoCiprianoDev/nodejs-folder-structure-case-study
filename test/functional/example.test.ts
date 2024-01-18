describe('Test example', () => {
  it('should return empty object', async () => {
    const { body, status } = await global.testRequest.get('/example');

    expect(status).toBe(200);
    expect(body).toEqual({});
  });
});
