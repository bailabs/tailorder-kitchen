import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const FilterText = styled.div`
  font-weight: bold;
  color: #777;
`;

const FilterContent = styled.div`
  padding: 0 15px 15px;
`;

@observer
class Filter extends React.Component {
  render() {
    return (
      <FilterContent>
        <FilterText>Filter: {this.props.store.orderFilter}</FilterText>
      </FilterContent>
    );
  }
}

export default Filter;
