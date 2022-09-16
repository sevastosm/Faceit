export const fetchTournaments = (query: string) =>
  fetch(`http://localhost:4000/tournaments?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

export const createTournament = async (name: string) => {
  await fetch('http://localhost:4000/tournaments', {
    method: 'POST', // or 'PUT'
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
  await fetch(`http://localhost:4000/tournaments/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  }).catch((error) => error);
};

export const deleteTournament = async (id: string) => {
  await fetch(`http://localhost:4000/tournaments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((error) => error);
};