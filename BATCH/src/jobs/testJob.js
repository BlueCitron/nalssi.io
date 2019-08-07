import Job from './Job';

class testJob extends Job {
  constructor () {
    super('key');
    this.sample = 'Hello';
  }

  run () {
    console.log('Implement Job..!!');
  }
}

export default testJob;
