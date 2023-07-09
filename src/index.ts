import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

// app.get('/', (req: Request, res: Response) => {
//   res.send(`
//         <div>
//             <h1> Hey</h1>
//         </div>
//         `);
// });

app.use(router);

app.listen(3000, () => {
  console.log('Listening port 3000');
});
