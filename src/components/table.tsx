import {useState} from "react";
import useFetch from "../hooks/useFetch";
import dots from "../assets/ic-more-vert-18px.svg";
import "../styles/table.scss";
import { Table as TB } from "antd";
import { useNavigate } from "react-router-dom";

const {Column} = TB;


type dtaCont = {
  key: React.Key,
  id: string,
  createdAt: string,
  orgName: string,
  userName: string,
  email: string,
  phoneNumber: string,
}

export const Table = () => {
  const [url, setUrl] = useState<string>("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
  const [method, setMethod] = useState<string>("get");
  const {dt:data, isPending, error} = useFetch(url, method);
  
  
  const navigate = useNavigate();
  const GetDataNav = (id: string): void => {

    navigate(`/user/${id}`)
  }


  return (
    <section>
      {error && <div>{error}</div>}
      <TB
        bordered
        loading={isPending}
        dataSource={data}
      >
        <Column title="ORGANIZATION" dataIndex="orgName" align="center" key="orgName"
        filterIcon = "true"
        />
        <Column title="USERNAME" dataIndex="userName" key="userName" align="center"/>
        <Column title="EMAIL" dataIndex="email" key="email" align="center"/>
        <Column title="PHONE NUMBER" dataIndex="phoneNumber" key="phoneNumber" align="center"/>
        <Column title="DATE JOINED" dataIndex="createdAt" key="createdAt" align="center"
          render={ (createdAt: string) => (
            new Date(createdAt).toDateString()
          )
          }
        />
        <Column title="STATUS" dataIndex="lastActiveDate" key="lastActiveDate" align="center"
          render= {() => (
            new Date().toISOString() > "lastActiveDate" ? <span className="status inact">Inactive</span>  : <span className="status act">Active</span>
        )}
        />
        <Column 
          dataIndex= "id"
          key="id"
          render= {(id, record: dtaCont) => (
            <img 
                alt="any"
                style={{cursor: "pointer"}}
                src={dots}
                onClick={() => GetDataNav(id)}
            />
        )}
        />
      </TB>
      </section>
  )
}
