const infor = localStorage.getItem("userData");

export const nameInfor = infor ? JSON.parse(infor) : null;


export const payloadCreate = asynFunc => async(arg ,thunkApi) => {
    try {
        const res = await asynFunc(arg);
        return res;
    } catch (err) {
        return thunkApi.rejectWithValue(err);
    }
}