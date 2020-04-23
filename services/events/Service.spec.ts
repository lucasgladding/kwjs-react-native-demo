import Service from './Service';

const fixture = require('../../fixtures/events.json');

describe('events/Service', () => {
  it('lists the events', async () => {
    mockFetch(fixture);

    const service = new Service();
    const response = await service.list();
    expect(response).toHaveLength(fixture.length);
  })
});

const mockFetch = (data: any) => {
  const response = {
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(data),
  };
  global.fetch = jest.fn(() => Promise.resolve(response));
};
