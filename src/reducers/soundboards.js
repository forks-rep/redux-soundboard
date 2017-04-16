import {createReducer} from 'redux-act'
import {getHighestKey} from './util'
import omit from 'lodash.omit'

import {
  addSoundboard,
  deleteSoundboard,
  addSoundToSoundboard
} from '../actions'

const soundboardTemplate = {
  name: 'Unnamed',
  sounds: [],
  locked: false
}

const initialState = {
  0: {...soundboardTemplate, name: 'Default'}
}

export default createReducer({
  [addSoundboard]: (state, soundboard) => ({
    ...state,
    [getHighestKey(state) + 1]: {...soundboardTemplate, ...soundboard}
  }),

  [deleteSoundboard]: (state, key) => omit(state, key),

  [addSoundToSoundboard]: (state, {sound, soundboard}) => ({
    ...state,
    [soundboard]: {
      ...state[soundboard],
      sounds: [...state[soundboard].sounds, sound]
    }
  })
}, initialState)
