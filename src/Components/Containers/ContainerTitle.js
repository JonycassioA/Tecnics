import './ContainerStyle.css'

function Container({ title }) {
  return (
    <>
      <div className="container-title">
        <p>{title}</p>
      </div>
    </>
  );
}

export default Container;
