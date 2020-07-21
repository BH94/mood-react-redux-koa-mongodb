require('dotenv').config();
import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import cors from '@koa/cors';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new koa();
const router = new Router();

router.use('/api', api.routes());

const staticPath = path.join(__dirname, '../', '../client', 'deploy');
app.use(serve(staticPath));

app.use(serve('./uploads'));

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 5000;

app.listen(port, () => {
  console.log(staticPath);
  console.log('Port %d is working', port);
});
