import Event from './Event';

const services = require('../../config/services.json');

class Service {
  async list(): Promise<Event[]> {
    const response = await fetch(`${services.host}/events`);
    const json = await response.json();
    return json;
  }
}

export default Service;
