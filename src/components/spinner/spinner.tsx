import './spinner.css';

export default function Spinner(): JSX.Element {
  return (
    <div className="spinner-overlay" role="alert" aria-busy="true">
      <div className="spinner">
        <div className="spinner__ring" aria-hidden />
        <span className="spinner__text">Загрузка...</span>
      </div>
    </div>
  );
}
