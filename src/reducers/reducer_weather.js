import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //We can't mutate the actual state, only return a new instance of it
      //return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
