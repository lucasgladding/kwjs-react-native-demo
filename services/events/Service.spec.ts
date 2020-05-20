import Service from './Service';

const fixtures = {
  events: require('../../fixtures/events.json'),
  events_id: require('../../fixtures/events.id.json'),
};

describe('events/Service', () => {
  it('lists the events', async () => {
    mockFetch(fixtures.events);

    const service = new Service();
    const response = await service.list();
    expect(response).toHaveLength(fixtures.events.length);
  });

  it('gets an event', async () => {
    mockFetch(fixtures.events_id);

    const service = new Service();
    const response = await service.get('1');
    expect(response).toEqual(fixtures.events_id);
  });
});

const mockFetch = (data: any) => {
  const response = {
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(data),
  };
  global.fetch = jest.fn(() => Promise.resolve(response));
};
