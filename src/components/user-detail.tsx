import React, { useEffect, useState } from 'react'
import { NavLink, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import Localbase from "localbase";
import arro from "../assets/np_back_3007750_000000 1.svg"
import fil_star from "../assets/np_star_1208084_000000 1-filled.svg"
import star from "../assets/np_star_1171151_000000 1-notfilled.svg"
import "../styles/user_page.scss";

type dataProps ={
  profile: any,
  email: any,
  education: any,
  socials: any,
  guarantor: any,
  accountBalance: any,
  accountNumber: any
}

export const UserDetail = () => {
  
  const {id} = useParams();
  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  const method = "get";
  // const {dt, isPending, error} = useFetch(url, method);

  // console.log(dt);
  
  let db = new Localbase('lendsqrDB');
  const [data, setData] = useState<dataProps | null>(null);
  // db.delete();
  
  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchData = () => {

      try {
        axios(
          {
            method: method,
            url: url,
            cancelToken: source.token
          }
        )
        .then((res) => {
          db.collection("User").add(res.data, `${id}`)
          .then(() => {
            db.collection('User').doc({ id: `${id}` }).get().then((document: any) => {
              setData(document)
            })
          })
        })
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Caught cancel");
        } else {
          throw error;
        }
      }
  }

  fetchData();

  return( () => {
    source.cancel();
  })
  }, [method])

  return (
    <section className='detail'>
      <div className="arrow cont">
        <img src={arro} alt="back_arr" />
        <NavLink to="/dashboard">Back to User</NavLink>
      </div>
      <div className='user_heading'> 
        <h1>User Details</h1>
        <div className="btn_cont">
            <button className='btn blckLst'> Blacklist User</button>
            <button className='btn actUr'> Activate User</button>
        </div>
      </div>
      <div className="main_heading">
          <div className="top">
            <div className="profile">
              <div className="img-cont">
                <img src={data?.profile.avatar} alt="user_icon" />
              </div>
              <div className='names'>
                <h2>{data?.profile.firstName + " " + data?.profile.lastName}</h2>
                <h3>{data?.accountNumber}</h3>
              </div>
            </div>
            <div className="user_teir">
              <h3 className='title'>User’s Tier</h3>
              <div className="star_cont">
                <div className="img-cont">
                  <img src={fil_star} alt="star" />
                </div>
                <div className="img-cont">
                  <img src={star} alt="star" />
                </div>
                <div className="img-cont">
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
            <div className="acct_details">
              <h3 className='Acct_bln'>{data?.profile.currency+ data?.accountBalance}</h3>
              <h4 className="bank_name">{data?.profile.bvn}</h4>
            </div>
          </div>
          <div className="bottom">
            <NavLink to={`/user/${id}/geDe`}>Genral Details</NavLink>
            <NavLink to={`/user/${id}/docs`}>Documents</NavLink>
            <NavLink to={`/user/${id}/bnkDe`}>Bank Details</NavLink>
            <NavLink to={`/user/${id}/loan`}>Loans</NavLink>
            <NavLink to={`/user/${id}/sav`}>Savings</NavLink>
            <NavLink to={`/user/${id}/appNsys`}>App and System</NavLink>
          </div>
      </div>

      <section className='data'>
        <Outlet />
      </section>
      
    </section>
  )
}
