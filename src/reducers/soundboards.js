import {createReducer} from 'redux-act'
import {generateString} from '../util'
import omit from 'lodash.omit'

import {
  addSoundboard,
  deleteSoundboard,
  updateSoundboard,
  renameSoundboard,
  addSoundToSoundboard
} from '../actions'

const soundboardTemplate = {
  name: 'New Soundboard',
  sounds: [],
  locked: false
}

const initialState = {
  '35c517b86f86c421da2a72c41f0e6b95': {...soundboardTemplate, name: 'Default'}
}

export default createReducer({
  [addSoundboard]: (state, {soundboard = {}, id} = {}) => ({
    ...state,
    [id || generateString(16)(32)]: {...soundboardTemplate, ...soundboard}
  }),

  [deleteSoundboard]: (state, id) => omit(state, id),

  [addSoundToSoundboard]: (state, {sound, soundboard}) => ({
    ...state,
    [soundboard]: {
      ...state[soundboard],
      sounds: [...state[soundboard].sounds, sound]
    }
  }),

  [updateSoundboard]: (state, {id, update}) => ({
    ...state,
    [id]: {...state[id], ...update}
  }),

  [renameSoundboard]: (state, {id, newId}) => {
    const soundboard = state[id]
    return {[newId]: soundboard, ...omit(state, id)}
  }
}, initialState)
