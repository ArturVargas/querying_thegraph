import React from 'react';
import { gql, useQuery } from 'urql';

const DododexQuery = gql`
    query{
        dodoZoos(first: 5) {
        id
        pairCount
        tokenCount
        crowdpoolingCount
        }
    }
`;
    
const Dododex = () => {
    const [result, reexecuteQuery] = useQuery({
        query: DododexQuery,
      });
    
      const { data, fetching, error } = result;
    
      if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;
    
      console.log('Data --> ', data);

    return (
        <div>
           <ul>
                {data.dodoZoos.map((dodo: any) => (
                    <li key={dodo.id}>
                      Pair Count {dodo.pairCount} - Token Count {dodo.tokenCount} - Crowd pooling count {dodo.crowdpoolingCount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dododex;