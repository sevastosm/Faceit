export const fetchTournaments = (query: string) =>
  fetch(`http://localhost:4000/tournaments?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const err: any = `somethink went wong`;
      throw new Error(err);
      return data;
    })
    .catch((error) => {
      return error;
    });

export const createTournament = async (name: string) => {
  await fetch('http://localhost:4000', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const editTournament = async (id: string, name: string) => {
  await fetch(`http://localhost:4000/tournaments/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const deleteTournament = async (id: string) => {
  await fetch(`http://localhost:4000/tournaments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
