import React from 'react';
import ConfirmationDialog from './ConfirmationDialog/ConfirmationDialog';
import logo from './logo.svg';


function App() {
  return (
    <div >
      <ConfirmationDialog text="Click to Open Confirm Modal" title="Are you sure?" description="Do you really want to delete these records? This process cannot be undone." ></ConfirmationDialog>
    </div>
  );
}

export default App;
