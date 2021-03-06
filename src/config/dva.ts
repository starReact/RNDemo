import { create } from 'dva-core-ts';
import models from '../models';
import createLoading from 'dva-loading-ts';

const app = create();

models.forEach(model => {
    app.model(model);
});

app.use(createLoading())
app.start();

export default app._store;