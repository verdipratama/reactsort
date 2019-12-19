import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SortableGifsContainer from '../src/components/SortableGifsContainer';
import SortableGif from '../src/components/SortableGif';
import arrayMove from 'array-move';
import './styles/index.scss';

const App = () => {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif'
  ]);

  /* add second set */
  const [newGifs, setNewGifs] = useState([
    'https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif',
    'https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif',
    'https://media.giphy.com/media/4ZgLPakqTajjVFOVqw/giphy.gif',
    'https://media.giphy.com/media/3o7btXIelzs8nBnznG/giphy.gif'
  ]);

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    switch (collection) {
      case 'gifs':
        setGifs(arrayMove(gifs, oldIndex, newIndex));
        break;
      case 'newGifs':
        setNewGifs(arrayMove(newGifs, oldIndex, newIndex));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Drag those gift around</h1>
      <h2>Set 1</h2>
      <SortableGifsContainer
        axis="x"
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {gifs.map((gif, i) => (
          <SortableGif index={i} key={gif} gif={gif} collection="gifs" />
        ))}
      </SortableGifsContainer>
      <h2>Set 2</h2>
      <SortableGifsContainer
        axis="x"
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {newGifs.map((gif, i) => (
          <SortableGif index={i} key={gif} gif={gif} collection="newGifs" />
        ))}
      </SortableGifsContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
