const express = require('express');

const router = express.Router();

const runnerTracking = require('../queries/runnertracking');


function isValidId(request, response, next) {
  if (!isNaN(request.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/runners', (request, response, next) => {
  runnerTracking
    .listRunners()
    .then((runners) => {
      response.json({ runners });
    })
    .catch(next);
});

router.get('/runners/:id', isValidId, (request, response, next) => {
  runnerTracking
    .readRunners(request.params.id)
    .then((runner) => {
      runner
        ? response.json({ runner })
        : response.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/runners', (request, response, next) => {
  runnerTracking
    .createRunners(request.body)
    .then((runner) => {
      response.status(201).json({ runner });
    })
    .catch(next);
});

router.delete('/runners/:id', isValidId, (request, response, next) => {
  runnerTracking
    .deleteRunners(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/runners/:id', isValidId, (request, response, next) => {
  runnerTracking
    .updateRunners(request.params.id, request.body)
    .then((runner) => {
      response.json({ runner });
    })
    .catch(next);
});

module.exports = router;
