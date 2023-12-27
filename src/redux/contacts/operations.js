import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
