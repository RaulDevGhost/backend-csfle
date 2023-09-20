// import { Router } from 'express'
// import { MovieController } from '../controllers/movies.js'

// export const createMovieRouter = ({ movieModel }) => {
//   const moviesRouter = Router()

//   const movieController = new MovieController({ movieModel })

//   moviesRouter.get('/', movieController.getAll)
//   moviesRouter.post('/', movieController.create)

//   moviesRouter.get('/:id', movieController.getById)
//   moviesRouter.delete('/:id', movieController.delete)
//   moviesRouter.patch('/:id', movieController.update)

//   return moviesRouter
// }

import { Router } from 'express';

import { MovieController } from '../controllers/movies.js';

export const moviesRouter = Router();

moviesRouter.get('/', MovieController.getAll);
moviesRouter.post('/', MovieController.create);

moviesRouter.get('/:id', MovieController.getById);
moviesRouter.delete('/:id', MovieController.delete);
moviesRouter.patch('/:id', MovieController.update);
