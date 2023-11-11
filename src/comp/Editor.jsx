import { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'; 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import '../App.css';
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #AAAEBC;
  font-weight: 700;
`;
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Editor = ({heading,icon,color,value,onChange}) => {
       
   const[open,setOpen]=useState(true);


  const handleChange= (editor, data, value)=>{
            onChange(value);
  }
  
  return (
    <Container  style={open ? null : {flexGrow: 0} }>
      <Header>
        <Heading>
          <Box
            component="span"
            sx={{
              backgroundColor: color,
              height: 20,
              width: 20,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color:'#000'
            }}
        >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          onClick={() => setOpen(prevState => !prevState)}
          fontSize="small"
          style={{ alignSelf: 'center'}}
          
        />
      </Header>
       <ControlledEditor
       className='Controlled-editor'
       value={value}
      onBeforeChange={handleChange}
       options={{
        
        Theme: 'material',
        lineNumbers: true
       }}
       />
    </Container>
  );
};

export default Editor;
