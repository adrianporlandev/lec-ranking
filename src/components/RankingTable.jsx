import React, { useState } from 'react';

const RankingTable = ({ ranking }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedRanking = [...ranking].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key].toLowerCase();
      const bValue = b[sortConfig.key].toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th onClick={() => requestSort('realname')}>Jugador</th>
          <th onClick={() => requestSort('team')}>Rol</th>
          <th>Nombre de Invocador</th>
          <th>ELO</th>
          <th>WR</th>
          <th>Games</th>
          <th onClick={() => requestSort('team')}>Equipo</th>
        </tr>
      </thead>
      <tbody>
        {sortedRanking.length > 0 ? (
          sortedRanking.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.realname}</td>
              <td>
                <img
                  src={`https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/pos/${player.role}.png`}
                  alt={player.role}
                  style={{ width: '40px', marginRight: '10px' }}
                />
              </td>
              <td>{player.name}</td>
              <td>
                <img 
                  src={`https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868748/lol-project/elo/${player.elo.tier}.png`} 
                  alt={player.elo.tier} 
                  style={{ width: '40px', marginRight: '10px' }} 
                  />
                {player.elo.tier} 
                {['CHALLENGER', 'GRANDMASTER', 'MASTER'].includes(player.elo.tier) ? '' : ` ${player.elo.rank}`} 
                {' '}{player.elo.leaguePoints} LP
              </td>
              <td>{player.elo.winrate.toFixed(0)}%</td>
              <td>{player.elo.totalGames}</td>
              <td>
                <img
                  src={`https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/${player.team}.webp`}
                  alt={player.team}
                  style={{ width: '40px', marginRight: '10px' }}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Cargando datos...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RankingTable;