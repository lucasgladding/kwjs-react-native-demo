import Service from './Service';

const fixtures = {
  events: require('../../fixtures/events.json'),
};

describe('events/Service', () => {
  it('lists the events', async () => {
    mockFetch(fixtures.events);

    const service = new Service();
    const response = await service.list();
    expect(response).toHaveLength(fixtures.events.length);
  });
});

const mockFetch = (data: any) => {
  const response = {
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(data),
  };
  global.fetch = jest.fn(() => Promise.resolve(response));
};
