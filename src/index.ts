import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {envConfig} from './config/envConfig';
import {extendContextWithDb} from './db';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(extendContextWithDb);
app.get('/favicon.ico', (_, res) => res.status(204));

app.listen(envConfig.PORT, () => {
  console.log(`Strarted on port ${envConfig.PORT}`);
});
