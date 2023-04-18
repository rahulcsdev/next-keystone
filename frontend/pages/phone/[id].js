import client from '../../helpers/apollo-client'
import { gql } from '@apollo/client';
import {DocumentRenderer} from '@keystone-6/document-renderer'
export default function Phone({data}){
    console.log(data)
    return (
       <div className='h-screen px-4 py-5'>
        <h1 className='text-xl font-semibold' >Name of the phone {data.name}</h1>
        <p>Brand Name {data.company.name}</p>
        <DocumentRenderer  document={data.document.document} />
       </div>
    )
}



export async function getStaticPaths(){
    const {data}=await client.query({
        query:gql`
        query{
            phones{
                id
            }
        }
        `
    });
    const paths=data.phones.map((item)=>({
        params:{
            id:item.id
        }
    }));
    return {paths,fallback:false};
}

export async function getStaticProps({params}){
    const {id}=params;

    const data=await client.query({
  query:gql`
  query Phone($id: ID!) {
    phone(where:{id:$id}) {
      name
      id
      document {
        document
      }
      company {
        name
      }
    }
  }
  `,
  variables:{id}
    });
    return {
        props:{
            data:data.data.phone
        }
    }
}