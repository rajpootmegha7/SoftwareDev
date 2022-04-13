import React, { useState, useEffect } from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";
  
  const GridItemWrapper = styled.div`
    background: #FFEDD1; 
  `;
  
  const GridItemContent = styled.div`
    padding: 8px;
  `;
  
  const Root = styled.div`
    padding: 16px;
  `;
  
  export const Grid = () => {
    const [names, setNames] = useState([]); 
    const [grid, setGrid] = useState([]); 
    const [loading, setLoading] = useState(true); 


    const getLayouts = () => {
        if (!loading){
            const savedLayouts = localStorage.getItem("grid-layout");
            return savedLayouts ? JSON.parse(savedLayouts) : { grid };
        }
        
    };

    useEffect(() => {
        fetch('http://localhost:4000/planner', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          },
        })
        .then(response => response.json())
        .then(data => {
            const jsonReceived = JSON.parse(data.planner_json); 
            //console.log(data); 
            setNames(jsonReceived.plants); 
            setGrid(jsonReceived.grid); 
            localStorage.setItem("grid-layout", JSON.stringify(jsonReceived.grid))
            setLoading(false);
        })
    }, []); 

    const handleLayoutChange = (grid) => {
        localStorage.setItem("grid-layout", JSON.stringify(grid));

        // Rebuild JSON here 
        console.log(names); 
        var responseJson = {
            planner_json: {
                'plants': names, 
                'grid': JSON.parse(localStorage.getItem('grid-layout'))
            }
        }
        var stringJSON = JSON.stringify(responseJson); 
        //console.log(JSON.stringify(responseJson)); 
        // Post here 
        //console.log(JSON.stringify(responseJson)); 
        console.log(stringJSON); 
        fetch('http://localhost:4000/planner', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          },
          body: stringJSON
        })
        .then(response => response.json())
        .then(data => {
            console.log("Hi"); 
            //console.log(data); 
        })
    };

    return (
      <Root>
        <GridLayout layout={getLayouts()} cols={4} rowHeight={125} width={500} onLayoutChange={handleLayoutChange}>
            {names.map(item => (
                <GridItemWrapper key={item.name}>
                    <GridItemContent>{item.name}</GridItemContent>
                </GridItemWrapper>
            ))}
        </GridLayout>
      </Root>
    );
  };