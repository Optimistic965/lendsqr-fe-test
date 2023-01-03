import '../styles/users_page.scss';
import { Lcard } from './lil_card';
import users from "../assets/users_card.svg";
import acvusr from "../assets/actv_user.svg";
import loan from "../assets/loan.svg";
import savings from "../assets/savings.svg";
import { Table } from './table';



export const Users = () => {

  // useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", "get");

  const cardContent : {color: string, imag: string, contxt: string, num: string}[] = [
    {
      color: "rgba(223, 24, 255, 0.1)",
      imag: users,
      contxt: "Users",
      num: "2,453"
    },
    {
      color: "rgba(87, 24, 255, 0.1)",
      imag: acvusr,
      contxt: "Active Users",
      num: "2,453"
    },
    {
      color: "rgba(245, 95, 68, 0.1)",
      imag: loan,
      contxt: "Loans",
      num: "240,530"
    },
    {
      color: "rgba(255, 51, 102, 0.1)",
      imag: savings,
      contxt: "Savings",
      num: "105,453"
    }
  ]
  return (
    <section className='users_page'>
        <h1>Users</h1>
        <div className="card_cont">
          {
            cardContent.map((contet) => {
              return <Lcard key={Math.random() * 10000} color={contet.color} imge={contet.imag} text={contet.contxt} count={contet.num}/>
            })
          }
        </div>
        <Table />
    </section>
  )
}
