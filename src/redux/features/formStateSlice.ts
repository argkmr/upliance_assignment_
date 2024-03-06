import { createSlice } from "@reduxjs/toolkit";

interface FormState {
    formData: {
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        gender: string;
        overallExp: string,
        reactExp: string,
        city: string;
        concent: string;
    };

    userArray: Array<string>;
}

const array: any = window.localStorage.getItem('USER_ARRAY');
const data: any = window.localStorage.getItem('USER_INFO');

const initialState: FormState = {
    formData: data ? JSON.parse(data) : {
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        overallExp: "",
        reactExp: "",
        city: "",
        concent: "",
    },
    userArray: array ? JSON.parse(array) : []
}

const formStateSlice = createSlice({
    name: "formStateManager",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        setUserArray: (state, action) => {
            state.userArray = action.payload;
        }
    }
});

export const {
    setFormData,
    setUserArray,
} = formStateSlice.actions;
export default formStateSlice.reducer;