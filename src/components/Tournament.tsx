import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Button from './Button';
import H6 from './H6';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing(6)};
  margin-top: ${theme.spacing(6)};
`;
const Item = styled.div`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.palette.background.base};
  padding: ${theme.spacing(3)};
`;
const Info = styled.div`
  text-align: left;
`;

const Actions = styled.div`
  text-align: left;
  margin-top: ${theme.spacing(2)};
`;

const EditButton = styled(Button)`
  margin-right: ${theme.spacing(2)};
`;

// formating date
const d = new Date('2015-03-25').toLocaleString('en-GB');

const Tournament = () => {
  return (
    <Wrapper>
      <Item>
        <H6>Tournamet Name</H6>
        <Info>Organizer: Sed Auten</Info>
        <Info>Game: Sed Auten</Info>
        <Info>Participants: Sed Auten</Info>
        <Info>Start: {d}</Info>
        <Actions>
          <EditButton>EDIT</EditButton>
          <Button>DELETE</Button>{' '}
        </Actions>
      </Item>
      <Item>
        <H6>Tournamet Name</H6>
        <Info>Organizer: Sed Auten</Info>
        <Info>Game: Sed Auten</Info>
        <Info>Participants: Sed Auten</Info>
        <Info>Start: {d}</Info>
        <Actions>
          <EditButton>EDIT</EditButton>
          <Button>DELETE</Button>{' '}
        </Actions>
      </Item>
      <Item>
        <H6>Tournamet Name</H6>
        <Info>Organizer: Sed Auten</Info>
        <Info>Game: Sed Auten</Info>
        <Info>Participants: Sed Auten</Info>
        <Info>Start: {d}</Info>
        <Actions>
          <EditButton>EDIT</EditButton>
          <Button>DELETE</Button>{' '}
        </Actions>
      </Item>
      <Item>
        <H6>Tournamet Name</H6>
        <Info>Organizer: Sed Auten</Info>
        <Info>Game: Sed Auten</Info>
        <Info>Participants: Sed Auten</Info>
        <Info>Start: {d}</Info>
        <Actions>
          <EditButton>EDIT</EditButton>
          <Button>DELETE</Button>{' '}
        </Actions>
      </Item>
      <Item>
        <H6>Tournamet Name</H6>
        <Info>Organizer: Sed Auten</Info>
        <Info>Game: Sed Auten</Info>
        <Info>Participants: Sed Auten</Info>
        <Info>Start: {d}</Info>
        <Actions>
          <EditButton>EDIT</EditButton>
          <Button>DELETE</Button>{' '}
        </Actions>
      </Item>
    </Wrapper>
  );
};

export default Tournament;
