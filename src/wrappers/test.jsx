import { Navigate, Outlet } from '@umijs/max';

export default (props) => {
  let status = localStorage.getItem('loginStatus');
  if (status == 200) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};
