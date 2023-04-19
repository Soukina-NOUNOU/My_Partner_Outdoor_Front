import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {

  loading: true,

  event: [{
    id: 1,
    title: "",
    description: "",
    start_date: "",
    finish_date: "",
    start_hour: "",
    finish_hour: "",
    nb_participant: 2,
    equipement: "",
    price: 5,
    picture: "/images/basket",

    organizer_id: 3,

    sport_id: 3,
    level_id: 1,
    address_id: 10,
    number: 24,
    street: "",
    zip_code: "",
    city: "",
    sport: "",
    level: ""
  }],

  selectedLevel: "",

};

export const getRandomEvents = createAction('event/getRandomEvents');
export const getFilteredEvents = createAction('event/getFilteredEvents');

export const changeField = createAction('event/changeField');
export const saveEvent = createAction('event/saveEvent');


const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRandomEvents, (state, action) => {

      state.event = action.payload;
      state.loading = false;
    })
    .addCase(getFilteredEvents, (state, action) => {
      state.loading = false;
      state.selectedLevel = action.payload;
    })
    .addCase(changeField, (state, action) => {
      const { value, name } = action.payload;
      state.event[name] = value;
    })
    .addCase(saveEvent, (state, action) => {

      state.event = action.payload;
      state.loading = false;

    })

});

export default eventReducer;
