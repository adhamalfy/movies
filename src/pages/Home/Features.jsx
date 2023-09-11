/*
Page: Features for the homepage
This page sets filters before fetching.
Created by Sunil Park
*/

import React from "react";
import {
  StyledSectionHeader,
  StyledFeature,
} from "../../components/styles/Page.styled";
import { sortBy } from "../../data/data";

const Features = ({ sortByURL, setSortByURL, viewBy, setViewBy }) => {
  return (
    <StyledSectionHeader>
      <StyledFeature>
    
      </StyledFeature>
      <StyledFeature>
      
      </StyledFeature>
      <span />
    </StyledSectionHeader>
  );
};

export default Features;
