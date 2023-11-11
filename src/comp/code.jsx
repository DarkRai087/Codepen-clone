import { useContext } from 'react';
import Editor from "./Editor";
import {Box,styled} from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color:#060606;
    display: flex;
`
const Code = () => {
    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
    
    return (
        <Container>
        <Editor
        heading='HTML'
        icon='/'
        color='#FF0000'
        value={html}
        onChange={setHtml}
        />
        <Editor
        heading='CSS'
        icon='*'
        color='#11FF00'
        value={css}
        onChange={setCss}
        />
        <Editor
        heading='JS'
        icon='{}'
        color='#FF00F2'
        value={js}
        onChange={setJs}
        />
        </Container>
    )
}
export default Code;