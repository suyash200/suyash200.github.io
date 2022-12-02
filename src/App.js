 import qr from './images/qr.png'
import './App.css';
import {Box, Center, Paper,MantineProvider, Space, Text} from '@mantine/core'
import { Image } from '@mantine/core';
function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    > 
    <Center>
     
     <body className='body'> 
      <Paper shadow="md" sx={{margin:'50px',}} radius='lg'>
        <Box style={{width:255,height:425}} className='box1'id='box1'>
           <Center> 
           <Box  style={{width:200,height:5,paddingTop:25}}  > 
           <Center> 
          <Image src={qr} radius='lg' style={{width:200,height:180}}/></Center>
            <Space h='xl'/>
          <Box style={{height:50}}>
          <text><b>Improve your front-end skills by building projects</b></text>
          </Box>
          <Space h='sm'/>
          <Box >
            <Text style={{width:230,fontWeight:25}} > Scan the QR code to visit Frontend Mentor and take your coding  skills to next level</Text>
          </Box>
          </Box>
          </Center>
           
        </Box>

      </Paper></body>
      </Center>
      </MantineProvider>
  );
}

export default App;
