import { combineReducers } from 'redux';

import { createReducer } from '../model/ReduxStore';
import GlossaryActions from './GlossaryActions';
import DocumentActions from './DocumentActions';
import DiplomaticActions from './DiplomaticActions';

import diplomaticInitialState from './initialState/diplomaticInitialState';
import glossaryInitialState from './initialState/glossaryInitialState';
import documentInitialState from './initialState/documentInitialState';
import CommentActions from './CommentActions';
import commentInitialState from './initialState/commentInitialState';

export default function rootReducer(config) {
  const { iiifManifest, documentName, commentsURL, glossaryURL, transcriptionTypes } = config;
  return combineReducers({
    diplomatic: createReducer('DiplomaticActions', DiplomaticActions, diplomaticInitialState),
    document: createReducer('DocumentActions', DocumentActions, documentInitialState(iiifManifest, documentName, transcriptionTypes)),
    glossary: createReducer('GlossaryActions', GlossaryActions, glossaryInitialState(glossaryURL)),
    comments: createReducer('CommentActions', CommentActions, commentInitialState(commentsURL)),
  });
}