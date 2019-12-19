import React from 'react';
// @ts-ignore
import { sortableElement } from 'react-sortable-hoc';
import Gif from './Gif';

const SortableGif = sortableElement(({ gif }) => {
  return <Gif key={gif} gif={gif} />;
});

export default SortableGif;
