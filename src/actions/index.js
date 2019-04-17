import * as fb from 'firebase/app'
import 'firebase/firestore'
import algoliasearch from 'algoliasearch'

const client = algoliasearch('NVB3R0X6NL', '99ae420fbacd7e181b846392989eee03')
const index = client.initIndex('zeljob_vacancies')

export const VACANCY_LIST_REQUEST = 'VACANCY_LIST_REQUEST'
const vacancyListRequest = () => ({
  type: VACANCY_LIST_REQUEST
})

export const VACANCY_LIST_SUCCESS = 'VACANCY_LIST_SUCCESS'
const vacancyListSuccess = vacancyList => ({
  type: VACANCY_LIST_SUCCESS,
  payload: vacancyList
})

export const VACANCY_PUBLISH_SUCCESS = 'VACANCY_PUBLISH_SUCCESS'
const vacancyPublishSuccess = () => ({
  type: VACANCY_PUBLISH_SUCCESS
})

export const VACANCY_LIST_FAILURE = 'VACANCY_LIST_FAILURE'
const vacancyListFailure = () => ({
  type: VACANCY_LIST_FAILURE
})

export const onSearch = (e, str) => async dispatch => {
  e.preventDefault()
  dispatch(vacancyListRequest())
  try {
    const res = await index.search({
      query: str
    })

    const vacancyList = await res.hits

    dispatch(vacancyListSuccess(vacancyList))
    dispatch(setVacancyCount(res.nbHits))
    dispatch(updateCurrentPage(1))
    dispatch(updateTotalPages(res.nbPages))
    dispatch(setSearchInput(str))
  } catch (e) {
    dispatch(vacancyListFailure())
  }
}

export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'
const updateCurrentPage = page => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page
})

export const UPDATE_SCROLL_TOP_LIST_POSITION = 'UPDATE_SCROLL_TOP_LIST_POSITION'
export const updateScrollTopListPosition = top => ({
  type: UPDATE_SCROLL_TOP_LIST_POSITION,
  payload: top
})

export const UPDATE_TOTAL_PAGES = 'UPDATE_TOTAL_PAGES'
const updateTotalPages = page => ({
  type: UPDATE_TOTAL_PAGES,
  payload: page
})

export const UPDATE_VACANCY_LIST = 'UPDATE_VACANCY_LIST'
const updateVacancyList = vacancyList => ({
  type: UPDATE_VACANCY_LIST,
  payload: vacancyList
})

export const SET_VACANCY_COUNT = 'SET_VACANCY_COUNT'
const setVacancyCount = count => ({
  type: SET_VACANCY_COUNT,
  payload: count
})

export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
const setSearchInput = str => ({
  type: SET_SEARCH_INPUT,
  payload: str
})

export const SET_LIST_LOADED = 'SET_LIST_LOADED'
export const setListLoaded = () => ({
  type: SET_LIST_LOADED
})

export const fetchNextPage = (str, page) => async dispatch => {
  dispatch(vacancyListRequest())
  try {
    const res = await index.search({
      query: str,
      page
    })

    const vacancyList = await res.hits
    dispatch(updateCurrentPage(page + 1))

    dispatch(updateVacancyList(vacancyList))
  } catch (e) {
    dispatch(vacancyListFailure())
  }
}

export const fetchVacancyList = () => async dispatch => {
  dispatch(vacancyListRequest())

  try {
    const res = await index.search()
    const vacancyList = await res.hits

    dispatch(setVacancyCount(res.nbHits))
    dispatch(vacancyListSuccess(vacancyList))
    dispatch(updateCurrentPage(1))
    dispatch(updateTotalPages(res.nbPages))
  } catch (e) {
    dispatch(vacancyListFailure())
  }
}

export const fetchVacancyPublish = vacancy => async dispatch => {
  dispatch(vacancyListRequest())
  try {
    const db = fb.firestore()
    await db
      .collection('vacancies')
      .doc(vacancy.id)
      .set(vacancy)

    dispatch(vacancyPublishSuccess())
  } catch (e) {
    dispatch(vacancyListFailure())
  }
}

export const fetchVacancy = id => async dispatch => {
  dispatch(vacancyListRequest())
  try {
    const db = fb.firestore()
    const doc = await db
      .collection('vacancies')
      .doc(id)
      .get()
    const vacancy = doc.data()

    dispatch(updateVacancyList([vacancy]))
  } catch (e) {
    dispatch(vacancyListFailure())
  }
}
