import {createAction} from 'redux-act'

export const addSoundboard = createAction('add a soundboard')
export const deleteSoundboard = createAction('delete a soundboard')
export const updateSoundboard = createAction('update a soundboard')
export const addSound = createAction('add a sound')
export const deleteSound = createAction('delete a sound')
export const addSoundToSoundboard = createAction('add a sound to a soundboard')
export const setShowShare = createAction('set share popup show state')
export const setShowImport = createAction('set import popup show state')
export const setShareUrl = createAction('set share popup url')
export const resetShare = createAction('reset the share state')
export const setImporting = createAction('set if currently importing')
