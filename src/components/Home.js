import React from 'react'
import styled from 'styled-components';
import Section from"./Section"

function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        LeftButtonText="Custom order"
        RightButtonText="Existing inventory"

        />
        
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        LeftButtonText="Custom order"
        RightButtonText="Existing inventory"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        LeftButtonText="Custom order"
        RightButtonText="Existing inventory"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        LeftButtonText="Custom order"
        RightButtonText="Existing inventory"
        />
        <Section 
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        LeftButtonText="Order now"
        RightButtonText="Learn More"
        />

        <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        LeftButtonText="Order now"
        RightButtonText="Learn More"
        />
        <Section 
        title="Accessories"
        backgroundImg="accessories.jpg"
        LeftButtonText="Shop now"
        />
        
    </Container>
  )
}

export default Home

const Container= styled.div`
    height: 100hv;
`