// useAxios hook

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.computerspartselectronics.com";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
      fetchData('GET', '/products, null, null');
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, body, headers]);
 
  return { response, error, loading };
};

export default useAxios;


// App Component

const App = () => {
    const { response, loading, error } = useAxios({
        method: 'post',
        url: '/posts',
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            userId: 1,
            id: 19392,
            title: 'title',
            body: 'Sample text',
        }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <div className='App'>
            <h1>Posts</h1>

            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>{data && <p>{data.id}</p>}</div>
                </div>
            )}
        </div>
    );
};

// export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// here is a reviewed code for final solution :

// /**
//  fixed :
//   - no need to JSON.stringify to then immediatly do a JSON.parse
//   - don't use export defaults, because default imports are hard to search for
//   - axios already support generic request in one parameter, no need to call specialized ones
// **/
// export const useAxios = (axiosParams) => {
//   const [response, setResponse] = useState(undefined);
//   const [error, setError] = useState("");
//   const [loading, setloading] = useState(true);

//   const fetchData = async (params) => {
//     try {
//       const result = await axios.request(params);
//       setResponse(result.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(axiosParams);
//   }, []); // execute once only

//   return { response, error, loading };
// };


// and to use it :
// import { useAxios } from 'axioshook';

// const App = () => {
//     const { response, loading, error } = useAxios({
//         method: 'POST',
//         url: '/posts',
//         headers: { // no need to stringify
//           accept: '*/*'
//         },
//         data: {  // no need to stringify
//             userId: 1,
//             id: 19392,
//             title: 'title',
//             body: 'Sample text',
//         },
//     });

//     return (
//         <div className='App'>
//             <h1>Posts</h1>

//             {loading ? (
//                 <p>loading...</p>
//             ) : (
//                 <div>
//                     {error && (
//                         <div>
//                             <p>{error.message}</p>
//                         </div>
//                     )}
//                     <div> {
//                       // no need to use another state to store data, response is sufficient
//                       response && <p>{response.id}</p>
//                     }
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };