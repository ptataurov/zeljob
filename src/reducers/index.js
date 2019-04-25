import { handleActions } from 'redux-actions'
import * as actions from '../actions'
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

const rootReducer = handleActions(
  {
    [actions.fetchRequest]: state => ({
      ...state,
      loading: true,
      error: null
    }),

    [actions.fetchSuccess]: state => ({
      ...state,
      loading: false,
      error: null
    }),

    [actions.fetchFailure]: state => ({
      ...state,
      loading: false,
      error: true
    }),

    [actions.vacancyListLoaded]: (state, { payload }) => ({
      ...state,
      vacancyList: payload
    }),

    [actions.setListLoaded]: (state, { payload }) => ({
      ...state,
      listLoaded: payload
    }),

    [actions.updateVacancyList]: (state, { payload }) => ({
      ...state,
      vacancyList: [...state.vacancyList, ...payload]
    }),

    [actions.updateScrollTopListPosition]: (state, { payload }) => ({
      ...state,
      scrollTopListPosition: payload
    }),

    [actions.updateCurrentPage]: (state, { payload }) => ({
      ...state,
      currentPage: payload
    }),

    [actions.setVacancyCount]: (state, { payload }) => ({
      ...state,
      vacancyCount: payload
    }),

    [actions.setSearchInput]: (state, { payload }) => ({
      ...state,
      searchInput: payload
    }),

    [actions.updateTotalPages]: (state, { payload }) => ({
      ...state,
      totalPages: payload
    })
  },
  initialState
)

export default rootReducer
