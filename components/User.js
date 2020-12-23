import styles from './User.module.css'

const user =({name, age})=>(
  <div  className={styles.User}>
  <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    {/*<style jsx>{`*/}
    {/*        div {*/}
    {/*            border: 1px solid #eee;*/}
    {/*            box-shadow: 0 2p 3px #ccc;*/}
    {/*            padding: 20px;*/}
    {/*            text-align: center;*/}
    {/*        }*/}
    {/*    `}</style>*/}
  </div>
  </div>
)

export default user
