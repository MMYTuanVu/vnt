import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import NullPage from './Pages/NullPage';
import { RouterQTV } from './Routers/RouterQTV';
function App() {
  return (
    <>
      <Routes>
        {RouterQTV.map((route, index) => {
          let Element = route.component;
          let Layout = route.layout;
          if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<NullPage />} />
      </Routes>
    </>
  );
}
export default App;
