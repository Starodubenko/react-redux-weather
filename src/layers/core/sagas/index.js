import { citySaga } from './citySaga';

export const sagaRunner = middleware => {
    middleware.run(citySaga);
}