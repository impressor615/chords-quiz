import React from 'react';

export const NotesContext = React.createContext({ notes: [], count: 4 });
const withNotesContext = Component => props => (
  <NotesContext.Consumer>
    { (contexts) => <Component {...contexts} {...props} /> }
  </NotesContext.Consumer>
);

export default withNotesContext;
