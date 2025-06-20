import { useState } from 'react'
import Education from './education';
import General from './general'
import Work from './practical';
import '../styles/App.css'


function App() {
  const [editMode, setEditMode] = useState(true);

  function editButtonHandler() {
    setEditMode(true);
  }

  function submitFormHandler(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <>
      <h1>CV Application</h1>
      <form onSubmit={submitFormHandler}>
        <General edit={editMode} />
        <Education edit={editMode} />
        <Work edit={editMode} />
        <button type="submit">Save</button>
        <button type="button" onClick={editButtonHandler}>Edit</button>
      </form>
    </>
  )
}

export default App
