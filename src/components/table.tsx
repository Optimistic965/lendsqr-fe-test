import {useState, useMemo} from "react";
import useFetch from "../hooks/useFetch";
import filter from "../assets/filter.svg";
import dots from "../assets/ic-more-vert-18px.svg";
import "../styles/table.scss";
import { Table as TB } from "antd";


type dtaCont = {
  createdAt: string,
  orgName: string,
  userName: string,
  email: string,
  phoneNumber: string,
}
export const Table = () => {
  const [url, setUrl] = useState("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");

  const {dt:data, isPending, error} = useFetch(url, "get");

  const cols: Array<string> = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status", ""];

  return (
    <section>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && <TB></TB>}
      </section>
  )
}
