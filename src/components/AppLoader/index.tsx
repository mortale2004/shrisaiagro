import './loader.css';
const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader-spin">
        <span className="vms-dot vms-dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  );
};

export default AppLoader;
