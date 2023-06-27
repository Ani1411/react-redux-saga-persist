
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
// import { axiosInstance } from './axiosConfig';
import { getTaskRequest } from './redux/actions'

function App() {
  const {isloading, message, data} = useSelector((state) => state);

  let dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTaskRequest())
    // axiosInstance.get('/task')
    //   .then(response => {
    //     console.log(response.data)
    //     setTasks(response.data.data)
    //   })
    //   .catch(err => console.log(err.response))

  }, []);
  let tasks = data
  console.log('message: ' + message)
  return (
    <div className="App">
      <header className="App-header">
        Todo App
      </header>
      {
        isloading && <h3>LOADING...</h3>
      }
      <button onClick={() => dispatch(getTaskRequest())}>
        GET TASK
      </button>
      <div className='container'>
        <div className='tasks'>
          <div className='incomplete'>
            {
              tasks.length > 0 && tasks.filter(task => task.is_done !== true).map(item => {
                return <span key={item.id}>
                  {item.task}
                </span>
              })
            }
          </div>
          <div className='completed'>
            {
              tasks.length > 0 && tasks.filter(task => task.is_done === true).map(item => {
                return <span key={item.id}>
                  {item.task}
                </span>
              })
            }
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
