import * as fb from 'firebase/app'
import 'firebase/firestore'
import algoliasearch from 'algoliasearch'
import { createAction } from 'redux-actions'

const client = algoliasearch('NVB3R0X6NL', '99ae420fbacd7e181b846392989eee03')

const initAlgolia = () => client.initIndex('zeljob_vacancies')

export const fetchRequest = createAction('FETCH_REQUEST')

export const fetchSuccess = createAction('FETCH_SUCCESS')

export const fetchFailure = createAction('FETCH_FAILURE')

export const onSearch = (e, str) => async dispatch => {
  e.preventDefault()
  dispatch(fetchRequest())
  try {
    const index = initAlgolia()
    const res = await index.search({
      query: str
    })

    const vacancyList = await res.hits

    dispatch(vacancyListLoaded(vacancyList))
    dispatch(setVacancyCount(res.nbHits))
    dispatch(updateCurrentPage(1))
    dispatch(updateTotalPages(res.nbPages))
    dispatch(setSearchInput(str))
    dispatch(fetchSuccess())
  } catch (e) {
    dispatch(fetchFailure())
  }
}

export const updateCurrentPage = createAction('UPDATE_CURRENT_PAGE')
export const updateScrollTopListPosition = createAction(
  'UPDATE_SCROLL_TOP_LIST_POSITION'
)
export const updateTotalPages = createAction('UPDATE_TOTAL_PAGES')
export const updateVacancyList = createAction('UPDATE_VACANCY_LIST')
export const setVacancyCount = createAction('SET_VACANCY_COUNT')
export const setSearchInput = createAction('SET_SEARCH_INPUT')
export const setListLoaded = createAction('SET_LIST_LOADED')

export const fetchNextPage = (str, page) => async dispatch => {
  dispatch(fetchRequest())
  try {
    const index = initAlgolia()
    const res = await index.search({
      query: str,
      page
    })

    const vacancyList = await res.hits
    dispatch(updateCurrentPage(page + 1))
    dispatch(updateVacancyList(vacancyList))
    dispatch(fetchSuccess())
  } catch (e) {
    dispatch(fetchFailure())
  }
}

export const vacancyListLoaded = createAction('VACANCY_LIST_LOADED')

export const fetchVacancyList = () => async dispatch => {
  dispatch(fetchRequest())

  try {
    const index = initAlgolia()
    const res = await index.search()
    const vacancyList = await res.hits

    dispatch(setVacancyCount(res.nbHits))
    dispatch(vacancyListLoaded(vacancyList))
    dispatch(updateCurrentPage(1))
    dispatch(updateTotalPages(res.nbPages))
    dispatch(fetchSuccess())
  } catch (e) {
    dispatch(fetchFailure())
  }
}

export const fetchVacancyPublish = vacancy => async dispatch => {
  dispatch(fetchRequest())
  try {
    const db = fb.firestore()
    await db
      .collection('vacancies')
      .doc(vacancy.id)
      .set(vacancy)
    dispatch(setListLoaded(false))
    dispatch(fetchSuccess())
  } catch (e) {
    dispatch(fetchFailure())
  }
}

export const fetchVacancy = id => async dispatch => {
  dispatch(fetchRequest())
  try {
    const db = fb.firestore()
    const doc = await db
      .collection('vacancies')
      .doc(id)
      .get()
    const vacancy = doc.data()

    dispatch(vacancyListLoaded([vacancy]))
    dispatch(fetchSuccess())
  } catch (e) {
    dispatch(fetchFailure())
  }
}
