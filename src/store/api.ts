import { API_TOURNAMENTS_URL } from '../constants/api';

export const fetchTournaments = async (query: string) => {
  try {
    let response = await fetch(`${API_TOURNAMENTS_URL}?q=${query}`);
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const createTournament = async (name: string) => {
  try {
    let response = await fetch(API_TOURNAMENTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
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
