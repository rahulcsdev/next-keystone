import { gql } from '@apollo/client'
import client from '../../helpers/apollo-client'
import Link from 'next/link';

export default function Phones({data}){
    console.log(data);
    return (
        <div className='h-screen px-5 py-4' >
            <h1 className='text-2xl' >Here is the all phone lists</h1>

            <div className='flex items-center justify-start gap-4 mt-5 px-6'>
                {
                    data.map((item)=>(
                        <div key={item.id} className='bg-gray-50 rounded-md shadow-md px-4 py-3'>
                            <h1>
                                <Link href={`/phone/${item.id}`} >{item.name}</Link>
                            </h1>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}


export async function getStaticProps(){
    const {data}=await client.query({
        query:gql`
        query{
            phones {
                id
                name
              }
        }
        `
    });

    return {
        props:{
            data:data.phones
        }
    }
}