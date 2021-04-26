import './App.css';
import axios from 'axios';

function App() {

  const login = 'https://reqres.in/api/login';
  const users = 'https://reqres.in/api/users';

  // axios.get(login)
  // .then(res=> console.log(res.data.data))
  // .catch(e => console.error(e))

  // fetch(users)
  // .then(res => res.json())
  // .then(res => console.log(res.data))
  // .catch(e => console.error(e))

  // -----------timeout------------

  // axios.get(login, {
  //   timeout:1
  // })
  // .then(res => console.log(res.data.data))
  // .catch(e => console.error(e))

  // const controller = new AbortController();
  // const signal = controller.signal;
  // setTimeout(() => controller.abort(), 1);

  // fetch(users, { signal })
  // .then(res => res.json())
  // .then(res => console.log(res.data))
  // .catch(e => console.error(e))

  // --------------HTTP interceptors--------
  // axios.interceptors.request.use(config => {
  //   console.log('Axios request was processed.')
  //   return config;
  // })
  // axios.get(login)
  // .then(res => console.log(res.data.data))
  // .catch(e => console.error(e))

  // fetch = (originalFetch => {
  //   return (...a) => {
  //     const result = originalFetch.apply(this, a)
  //     return result.then(console.log('request from fetch is here'))
  //   }
  // })(fetch)

  // fetch(users)
  // .then(res => res.json())
  // .then(res => console.log(res.data))
  // .catch(e => console.error(e))

  // --------------.all/multiple calls-----------

  // ------fetch version----
  // Promise.all([
  //   fetch(users),
  //   fetch(login)
  // ])
  // .then(async ([ res1, res2 ]) => {
  //   const a = await res1.json();
  //   const b = await res2.json();
  //   const c = a.data.concat(b.data)
  //   console.log('Res is: ', c)
  // })
  // .catch(e => console.error(e))


  // -----axios version----
  axios.all([
    axios.get(login),
    axios.get(users)
  ])
  .then(axios.spread((res1, res2) => {
    const a = res1.data.data;
    const b = res2.data.data;
    const c = a.concat(b)
    console.log('Res from axios is: ', c)
  }))
  .catch(e => console.error(e))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
