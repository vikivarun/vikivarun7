import { actionTypes } from '../constants';

const {
  SET_USER_DATA,
  SET_LOADING,
  SET_USER_ROLE,
  SET_NOTIFICATION,
  SET_FORMS,
  SET_FORM_DATA,
  SET_FORM_FEEDBACK,
  SET_NO_FORM_AVAILABLE
} = actionTypes;

const initialState = {
  user: { uid: '', email: '', admin: false },
  forms: null,
  isAdmin: false,
  loading: true,
  notification: {
    message: '',
    show: false,
    title: 'Notification'
  },
  userFormData: null,
  FormFeedbackData: null,
  noFormAvailable: false
};

export default function friends(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_DATA:
      return { ...state, user: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_USER_ROLE:
      return { ...state, isAdmin: payload };
    case SET_FORMS:
      return { ...state, forms: payload };
    case SET_FORM_DATA:
      return { ...state, userFormData: payload };
    case SET_FORM_FEEDBACK:
      return { ...state, FormFeedbackData: payload };
    case SET_NO_FORM_AVAILABLE:
      return { ...state, noFormAvailable: payload };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: {
          message: payload.message,
          show: payload.show,
          title: payload.title
        }
      };
    default:
      return state;
  }
}
