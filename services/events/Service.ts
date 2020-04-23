const services = require('../../config/services.json');

class Service {
  async list(): Promise<any[]> {
    const response = await fetch(`${services.host}/events`);
    const json = await response.json();
    return json;
  }
}

export default Service;
