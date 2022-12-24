import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 16px 28px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  background-color: #faebd7;
  border: 1px solid #e1d3c1;
  font-size: 16px;
  color: black;
  font-weight: 500;
  :hover {
    color: #c27ba0;
  }
`;

export const AddInfo = styled.div`
  margin-top: 16px;
`;

export const AddInfoTitle = styled.p`
  font-size: 16px;
`;

export const AddInfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px;
`;

export const AddInfoItemLink = styled(Link)`
  color: blue;
  :hover {
    color: #c27ba0;
  }
`;