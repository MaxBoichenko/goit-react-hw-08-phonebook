import { Box, Button, Typography } from '@mui/material';

export const Contact = ({ name, phone, id, onDeleteContact }) => {
  return (
    <Box
      component="li"
      sx={{
        mb: '10px',
      }}
    >
      <Typography>
        <strong>Name: </strong>
        {name}
      </Typography>
      <Typography>
        <strong>Phone: </strong>
        {phone}
      </Typography>
      <Button size="small" onClick={() => onDeleteContact(id)}>
        Delete contact
      </Button>
    </Box>
  );
};
