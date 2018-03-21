const database = require('../database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  listRunners() {
    return database('runnertracking');
  },
  readRunners(id) {
    return database('runnertracking').where('id', id).then(this.returnFirstItem);
  },
  createRunners(runner) {
    return database('runnertracking')
      .insert(runner)
      .returning('*')
      .then(this.returnFirstItem);
  },
  updateRunners(id, runner) {
    return database('runnertracking')
      .update(runner)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  deleteRunners(id) {
    return database('runnertracking').delete().where('id', id);
  },
};
