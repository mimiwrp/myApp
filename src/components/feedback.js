import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import Test from '@Add';
import FavoriteIcon from '@mui/icons-material/ThumbUp';
import Delete from '@mui/icons-material/ThumbDown';


function FloatingActionButtons() {
  return (
    <Box className="fb" sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab disabled color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <Delete />
      </Fab>
      <Fab color='primary' aria-label="like">
        <FavoriteIcon />
      </Fab>

    </Box>
  );
}

// import React from 'react';

// import Button from '@mui/material/Button';
// import './style.css';

// function feedback() {

//   return (
//     <nav>
//         <Button variant="contained" id="register">dislike</Button>
//         <Button variant="contained" id="register">like</Button>
//     </nav>

//   );
// }

export default FloatingActionButtons;