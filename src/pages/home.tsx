import { Link, Outlet } from "react-router-dom";
import "../styles/home.scss";
import { SidebarEle } from "../components/sidebar_ele";

// IMPORTING IMAGES
import Logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import notifyBell from "../assets/notification.svg";
import userImg from "../assets/image 4.svg";
import briefcase from "../assets/briefcase 1.svg";
import downArr from "../assets/np_dropdown_615120_000000 1.svg";
import badge from "../assets/badge-percent 1.svg";
import loanRequest from "../assets/Group 104.svg";
import loan from "../assets/sack 1.svg";
import user from "../assets/user-friends 1.svg";
import gua_Tor from "../assets/users 1.svg";
import decMod from "../assets/handshake-regular 1.svg";
import save from "../assets/piggy-bank 1.svg";
import whtlst from "../assets/user-check 1.svg";
import karma from "../assets/user-cog 1.svg";
import audtlg from "../assets/clipboard-list 1.svg";
import sysmsg from "../assets/tire-sysMsg.svg";
import preferenx from "../assets/sliders-h 1.svg";
import bank from "../assets/bank.svg";
import coin from "../assets/coins-solid 1.svg";
import serv from "../assets/galaxy 1.svg";
import trans from "../assets/icon.svg";
import scroll from "../assets/scroll 1.svg";
import serAcct from "../assets/user-cog 1.svg";
import report from "../assets/chart-bar 2.svg";
import lgOut from "../assets/sign-out 1.svg";



export const Home = () => {

    const customers: {icon: string, text: string}[] = [
        {
            icon: user,
            text: "User"
        },
        {
            icon: gua_Tor,
            text: "Guarantors"
        },
        {
            icon: loan,
            text: "Loans"
        },
        {
            icon: decMod,
            text: "Decision Models"
        },
        {
            icon: save,
            text: "Savings"
        },
        {
            icon: loanRequest,
            text: "Loan Requests"
        },
        {
            icon: whtlst,
            text: "Whitelist"
        },
        {
            icon: karma,
            text: "Karma"
        },

    ];
    const business: {icon: string, text: string}[] = [
        {
            icon: briefcase,
            text: "Organization"
        },
        {
            icon: loanRequest,
            text: "Loan Products"
        },
        {
            icon: bank,
            text: "Savings Products"
        },
        {
            icon: coin,
            text: "Fees and Charges"
        },
        {
            icon: trans,
            text: "Transactions"
        },
        {
            icon: serv,
            text: "Services"
        },
        {
            icon: serAcct,
            text: "Service Account"
        },
        {
            icon: scroll,
            text: "Settlements"
        },
        {
            icon: report,
            text: "Reports"
        }
        
    ];
    const settings: {icon: string, text: string}[] = [
        {
            icon: preferenx,
            text: "Preferences"
        },
        {
            icon: badge,
            text: "Fees and Pricing"
        },
        {
            icon: audtlg,
            text: "Audit Logs"
        },
        {
            icon: sysmsg,
            text: "Systems Messages"
        },
    ];


  return (
    <main className="home">
        {    /*    ---------------TOPBAR-------------      */      }
        <header>
            <div className="logo_cont">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="se_et_dtail_cont">
                <label className="search_field">
                    <input type="search" name="se_anything" id="se_anything" placeholder="Search for anything"/>
                    <span className="search_icon_cont">
                        <img src={search} alt="search icon" />
                    </span>
                </label>
                <div className="more_detail">
                    <Link to="#">Docs</Link>
                    <div className="notification_icon">
                        <img src={notifyBell} alt="notification icon" />
                    </div>
                    <div className="user_info">
                        <div className="user_profile_cont">
                            <img src={userImg} alt="User png"/>
                        </div>
                        <h4>Ayodeji</h4>
                        <div className="down_arr_cont">
                            <img src={downArr} alt="down arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="col">
            <aside>
                <div id="first_tab">
                    <div className="icon_cont">
                        <img src={briefcase} alt="icon" />
                    </div>
                    <h2>Switch Organization</h2>
                    <div>
                        <img src={downArr} alt="icon" /> 
                    </div>
                </div>
                <SidebarEle key={Math.random() * 10000} mainIcon={briefcase} message={"Dashboard"}/>

                <section className="customer nav_cont">
                    <h2>Customer</h2>
                    { customers.map((customer) => 
                        <SidebarEle key={Math.random() * 10000} mainIcon={customer.icon} message={customer.text}/>)}
                </section>
                <section className="business nav_cont">
                <h2>Businesses</h2>
                    { business.map((busi) => 
                        <SidebarEle key={Math.random() * 10000} mainIcon={busi.icon} message={busi.text}/>)}
                </section>
                <section className="settings nav_cont">
                <h2>Settings</h2>
                    { settings.map((sett) => 
                        <SidebarEle key={Math.random() * 10000} mainIcon={sett.icon} message={sett.text}/>)}
                </section>
                <div className="logout_cont">
                     <SidebarEle key={Math.random() * 10000} mainIcon={lgOut} message="Logout"/>
                     <h4>v1.2.0</h4>
                </div>

            </aside>
            <section className="host">
                <Outlet />
            </section>
        </section>
    </main>
  )
}
