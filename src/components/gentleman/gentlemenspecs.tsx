import { gentlemenArray } from '../data/gentlemen';

const AllGentlemenSpecs = gentlemenArray.map((item) => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={item.picture}
          alt={item.alternativeText}
        />
        <span className="gentleman__initial">{item.name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{item.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {item.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {item.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{' '}
            {item.twitter}
          </li>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </ul>
      </div>
    </li>
  );
});

export function Gentlemen() {
  return (
    <main className="main">
      <ul className="gentlemen">{AllGentlemenSpecs}</ul>
    </main>
  );
}
