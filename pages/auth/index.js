import Link from 'next/link'
import Router from 'next/router'
import User from '../../components/User'
export default function Auth() {
  return (
    <div className="container">
      Go to <Link href="/"><a>Auth</a></Link> page
      <button onClick={()=> Router.push('/')}>Go to Auth</button>
      <User name="Max" age={28}/>
    </div>
  )
}
