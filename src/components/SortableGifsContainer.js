import React from 'react';
// @ts-ignore
import { sortableContainer } from 'react-sortable-hoc';

const SortableGifsContainer = sortableContainer(({ children }) => {
  return (
    <div className="gifs">
      {/* testing */}
      {children}
    </div>
  );
});

export default SortableGifsContainer;
