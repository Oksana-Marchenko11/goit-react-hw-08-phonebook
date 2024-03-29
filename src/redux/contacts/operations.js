import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "redux/auth/operations";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await authInstance.get("/contacts");
            return data;
        }
        catch (e) { return thunkAPI.rejectWithValue(e.message) }
    }

);
export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
        try {
            const { data } = await authInstance.post("/contacts", contact);
            return data;
        }
        catch (e) { return thunkAPI.rejectWithValue(e.message) }
    }

)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
            const { data } = await authInstance.delete(`/contacts/${contactId}`);
            return data;
        }
        catch (e) { return thunkAPI.rejectWithValue(e.message) }
    }

)