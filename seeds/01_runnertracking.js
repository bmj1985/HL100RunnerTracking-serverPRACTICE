
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('runnertracking').del()
    .then(() =>
      // Inserts seed entries
      knex('runnertracking').insert([
        {
          id: 9,
          name: 'Caleb Efta',
          Started: false,
          RasberryOneIn: '00:00',
          RasberryOneOut: '00:00',
          AnteroIn: '00:00',
          AnteroOut: '00:00',
          StElmoOneIn: '00:00',
          StElmoOneOut: '00:00',
          CottonwoodIn: '00:00',
          CottonwoodOut: '00:00',
          StElmoTwoIn: '00:00',
          StElmoTwoOut: '00:00',
          HancockIn: '00:00',
          HancockOut: '00:00',
          LostWonderIn: '00:00',
          LostWonderOut: '00:00',
          PurgatoryIn: '00:00',
          PurgatoryOut: '00:00',
          MonarchIn: '00:00',
          MonarchOut: '00:00',
          FoosesIn: '00:00',
          FoosesOut: '00:00',
          BlanksIn: '00:00',
          BlanksOut: '00:00',
          RasberryTwoIn: '00:00',
          RasberryTwoOut: '00:00',
          Finish: '00:00',
        },

      ]))
    .then(() => knex.raw('ALTER SEQUENCE runnertracking_id_seq RESTART WITH 10;'));
};
