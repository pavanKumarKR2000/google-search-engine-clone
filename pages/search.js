import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY,CONTEXT_KEY} from "../keys";
import Response from '../response';
import SearchResults from "../components/SearchResults";

const search = ({results}) => {
 
 const {query} = useRouter();  

  return (
      <div>
          <Head>
              <title>{query.term} - Google Search</title>
          </Head>
          <Header />
          <SearchResults results={results} />
      </div>
  )
}

export default search;

export async function getServerSideProps(context) {
    
    const useDummyData = false;
    const startIndex = context.query.start || '0';

    const data =useDummyData?Response:await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then(response => response.json());

    return {
        props: {
            results: data
        }
    }
}