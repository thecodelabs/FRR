import { takeEvery } from 'redux-saga'
import { fork, call, put } from 'redux-saga/effects'
import { getRecentRecipes } from '../services/api'
// import { browserHistory } from 'react-router'


function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type: "RECENT_RECIPES_SUCCEEDED", recipes});
}

function* recentRecipesSaga(feathersApp) {
  yield* takeEvery("RECENT_RECIPES_REQUESTED", fetchRecentRecipes, feathersApp);
}

export default function* root(feathersApp) {
  yield [
    fork(recentRecipesSaga , feathersApp)
  ]
}
