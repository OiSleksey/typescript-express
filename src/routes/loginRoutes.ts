import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(` Hey Tgere`);
});

export { router };
