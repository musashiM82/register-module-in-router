const commonGetters = {
    commonCountGetter: (state: any) => {
        return state.countCommon;
    },
    doubleCountGetter: (state: any) => {
        return state.countCommon * 2;
    }
};

export default commonGetters;