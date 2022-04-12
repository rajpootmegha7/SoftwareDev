// import { Responsive, WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
    { i: "plant1", x: 0, y: 0, w: 1, h: 1 },
    { i: "plant2", x: 1, y: 0, w: 1, h: 1 },
    { i: "plant3", x: 2, y: 0, w: 1, h: 1 },
    { i: "plant4", x: 3, y: 0, w: 1, h: 1 },
    { i: "plant5", x: 0, y: 1, w: 1, h: 1 }, 
  ];
  
  const GridItemWrapper = styled.div`
    background: #f5f5f5;
  `;
  
  const GridItemContent = styled.div`
    padding: 8px;
  `;
  
  const Root = styled.div`
    padding: 16px;
  `;

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");
    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
  };
  
  export const Grid = () => {

    const handleLayoutChange = (layout) => {
        localStorage.setItem("grid-layout", JSON.stringify(layout));
    };
    return (
      <Root>
        <GridLayout layout={getLayouts()} cols={4} rowHeight={125} width={500} onLayoutChange={handleLayoutChange}>
            <GridItemWrapper key="plant1">
                <GridItemContent>Plant1</GridItemContent>
            </GridItemWrapper>
            <GridItemWrapper key="plant2">
                <GridItemContent>Plant2</GridItemContent>
            </GridItemWrapper>
            <GridItemWrapper key="plant3">
                <GridItemContent>Plant3</GridItemContent>
            </GridItemWrapper>
            <GridItemWrapper key="plant4">
                <GridItemContent>Plant4</GridItemContent>
            </GridItemWrapper>
            <GridItemWrapper key="plant5">
                <GridItemContent>Plant5</GridItemContent>
            </GridItemWrapper>
        </GridLayout>
      </Root>
    );
  };