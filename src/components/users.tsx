import '../styles/users_page.scss';
import { Lcard } from './lil_card';


export const Users = () => {
  return (
    <section className='users_page'>
        <h1>Users</h1>
        <div className="card_cont">
            <Lcard />
        </div>

    </section>
  )
}
