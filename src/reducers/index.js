import {
  VACANCY_LIST_LOADED,
  SET_LIST_LOADED,
  UPDATE_SCROLL_TOP_LIST_POSITION,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_CURRENT_PAGE,
  UPDATE_VACANCY_LIST,
  SET_VACANCY_COUNT,
  SET_SEARCH_INPUT,
  UPDATE_TOTAL_PAGES
} from '../actions'

const initialState = {
  vacancyList: [],
  listLoaded: false,
  loading: false,
  error: null,
  vacancyCount: 0,
  totalPages: 0,
  currentPage: 1,
  searchInput: '',
  scrollTopListPosition: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    case VACANCY_LIST_LOADED:
      return {
        ...state,
        vacancyList: action.payload
      }

    case SET_LIST_LOADED:
      return {
        ...state,
        listLoaded: action.payload
      }

    case UPDATE_VACANCY_LIST:
      return {
        ...state,
        vacancyList: [...state.vacancyList, ...action.payload]
      }

    case UPDATE_SCROLL_TOP_LIST_POSITION:
      return {
        ...state,
        scrollTopListPosition: action.payload
      }

    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case SET_VACANCY_COUNT:
      return {
        ...state,
        vacancyCount: action.payload
      }

    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload
      }

    case UPDATE_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
