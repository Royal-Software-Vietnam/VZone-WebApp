import axios from "axios"

export default function Profile (props:any) {
    return <div>
        Hello world
    </div>
}

export async function getStaticProps() {
    const { data } = await axios('https://isound.cyclic.app/audio/toprate')
  
    return {
      props: {
        posts: data
      }
    }
  }