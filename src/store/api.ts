import { API_TOURNAMENTS_URL } from '../constants/api';
export const fetchTournaments = async (query: string) =>
  fetch(`${API_TOURNAMENTS_URL}?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

export const createTournament = async (name: string) => {
  await fetch(API_TOURNAMENTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const editTournament = async (id: string, name: string) => {
  await fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  }).catch((error) => error);
};

export const deleteTournament = async (id: string) => {
  await fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((error) => error);
};
