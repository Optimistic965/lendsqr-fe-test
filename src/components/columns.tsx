
type columnsRettype = {
    Header: string,
    accessor: string
}[]

export const columns: columnsRettype = [
    {
        Header: "Organization",
        accessor:"orgName"
    },
    {
        Header: "Username",
        accessor:"userName"
    },
    {
        Header: "Email",
        accessor:"email"
    },
    {
        Header: "Phone Number",
        accessor:"phoneNumber"
    },
    {
        Header: "Date Joined",
        accessor:"createdAt"
    },
    {
        Header: "Status",
        accessor:"lastActiveDate"
    }
]
