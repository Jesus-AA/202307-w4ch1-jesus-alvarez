export function Info() {
  const numberOfGentlemen: number = 0;

  return (
    <section className="controls">
      <p className="info">{numberOfGentlemen} gentlemen pointing at you</p>
      <button className="button button--select">Select all</button>
    </section>
  );
}
