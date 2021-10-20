import classes from './Layout.module.css';
import MainLayout from './MainLayout';

function Layout(props) {
  return (
    <div>
      <MainLayout />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
