import React from "react";
import styled from "styled-components/macro";
import {margins} from "../../utils/variables";

const Select = (props) => {
  const {sortType, sortValues, selected, onChangeOption} = props;

  const handleChangeOption = (e) => {
    const {value} = e.target;
    onChangeOption(value);
  };

  return (
  <StyledSelect name={sortType} onChange={e => handleChangeOption(e)}>
    <option disabled>Choose {sortType}</option>
    {sortValues.map(e => <option defaultValue={e === selected} key={e} value={e}>{e}</option>)}
  </StyledSelect>
  )
};

export default Select;

const StyledSelect = styled.select`
  margin-right: ${margins.medium};
`;
