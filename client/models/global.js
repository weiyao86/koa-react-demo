
/**
 * global model
 */
const model = {
  namespace: 'global',
  state: {
    stateName: 'this is a global var'
  },

  //change state only there
  reducers: {
    set(state, { payload }) {
      return { ...state, ...payload };
    },

    reset(state) {
      return { ...state, ...model.state };
    }
  },

  //action async
  effects: {
    // test data
    * getGlobalData(state, { call, put, select }) {
      return yield call(() => {
        new Promise((r, j) => {
          setTimeout(() => {
            r('success');
          }, 1000);
        })
      });
    }
  }
}

export default model;