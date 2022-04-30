import { DvaLoadingState } from 'dva-loading-ts';
import homeModel from './Home';

const models = [homeModel];

export type RootState = {
    home: typeof homeModel.state;
    loading: DvaLoadingState
}

export default models;