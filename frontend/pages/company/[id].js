import { gql } from "@apollo/client"
import client from "../../helpers/apollo-client"
import Link from "next/link";

export default function Company({data}){
    console.log(data)
    return (
        <div className="px-5 py-6 h-screen">
            <h1>List of  {data.name} phones</h1>
    <div className='flex items-center justify-start gap-4'>
        {
            data.phone.map((item)=>(
                <div className=' bg-gray-100 shadow-md px-6 py-4 rounded-lg' key={item.id} > 
                <p>
                     <Link href={`/phone/${item.id}`} > {item.name} </Link>
                  
                </p>
                </div>
            ))
        }
    </div>

        </div>
    )
}

export async function getStaticPaths(){
    const {data}=await client.query({
       query:gql`
       query{
        companies{
            id
        }
       }
       `
    });
    const paths=data.companies.map((item)=>({
        params:{
            id:item.id,
        }
    }));

    return {paths,fallback:false}
}

export async function getStaticProps({params}){
    const {id}=params;

    const {data}=await client.query({
        query:gql`
        query Company($id:ID!){
            company(where:{id:$id}){
                name
                phone{
                    name,
                    id
                }
            }
        }
        `,
        variables:{id}
    });
    return {
        props:{
            data:data.company
        }
    }
}