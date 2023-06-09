import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './reducers/userLogin';
import modalLoginReducer from './reducers/modalLogin';
import modalDeleteReducer from './reducers/modalDelete';
import messagesReducer from './reducers/messages';
import createUserReducer from './reducers/createUser';
import errorReducer from './reducers/error';
import createEventReducer from './reducers/createEvent';
import eventReducer from './reducers/event';
import sportsReducer from './reducers/sports';
import notificationReducer from './reducers/notification';
import userDetailsReducer from './reducers/userDetails';
import userProfilReducer from './reducers/userProfil';
import eventParticipantsReducer from './reducers/eventParticipants';
import eventDetailsReducer from './reducers/eventDetails';
import myEventReducer from './reducers/myEvent';




const store = configureStore({
  reducer: {
    user: userLoginReducer,
    userDetails: userDetailsReducer,
    otherUser: userProfilReducer,
    createUser: createUserReducer,
    messages: messagesReducer,
    modalLogin: modalLoginReducer,
    modalDelete: modalDeleteReducer,
    error: errorReducer,
    event: eventReducer,
    eventDetails: eventDetailsReducer,
    eventParticipants: eventParticipantsReducer,
    createEvent: createEventReducer,
    sports: sportsReducer,
    notification: notificationReducer,
    myEvent: myEventReducer,

  },
});

export default store;
