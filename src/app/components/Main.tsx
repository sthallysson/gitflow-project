import Section from './Section/Section';

function Main() {
  return (
    <div
      className="main"
      style={{
        width: '100%',
        border: '4px solid green',
      }}
    >
      <h1>&lt;Main&gt;</h1>
      <Section />
    </div>
  );
}

export default Main;
