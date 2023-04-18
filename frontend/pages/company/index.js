import {gql} from '@apollo/client'
import client from '../../helpers/apollo-client'
import Link from 'next/link'


export default function Companies({data}){
    console.log(data)
    return (
        <div>
            <h1>List of companies shown here</h1>
            <div className='flex flex-col gap-3' >
                {
                    data.map((company)=>(
                        <h1 className='text-lg font-semibold' key={company.id} >
                        <Link href={`/company/${company.id}`} >{company?.name}</Link>
                    </h1>
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
            companies {
                name
                id
              }
         }
        `
    })
 
    return {
        props:{
            data:data?.companies
        }
    }
}