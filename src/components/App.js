import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;`

const Wrap = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2em 20em;
`

function App() {
  return (
    <div>
      <Wrap>
        <Button>
          Button
        </Button>
      </Wrap>
      <Wrap>
        <Button>
          Button
        </Button>
      </Wrap>
      
    </div>
    
  );
}

export default App;