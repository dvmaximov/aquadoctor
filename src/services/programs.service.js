// import { getAll } from './api/rest.api';

//import { Programs } from 'src/models/programs.model';

class ProgramsService {
  async getAll() {
    const programs = window.DB.getTable("programs");
    // const programs = await getAll('programs');
    //  const programs = responce as Programs;
    return programs;
  }
}

export default new ProgramsService();
