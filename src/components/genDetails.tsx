import { useEffect, useState } from "react";
import "../styles/genDet.scss";
import { LeastChild } from "./leastChild";
import Localbase from "localbase";
import { useParams } from "react-router-dom";

type dataProps ={
    profile: any,
    email: any,
    education: any,
    socials: any,
    guarantor: any
}

export const GenDetails = () => {

    let {id}= useParams();

    let db = new Localbase('lendsqrDB');
    const [data, setData] = useState<dataProps | null>(null);

    useEffect(() => {
        db.collection('User').doc({ id: `${id}` }).get().then((document: any) => {
            setData(document)
          })
    }, [])

    

  return (
    <>
    {data && (<section className='gendet'>
                <section className='info'>
                    <h2>Personal Information</h2>
                    <div className="child_cont">
                        <LeastChild head="full name" body={data.profile.firstName+ " " + data.profile.lastName} />
                        <LeastChild head="Phone Number" body={data.profile.phoneNumber} />
                        <LeastChild head="Email Address" body={data.email} />
                        <LeastChild head="Bvn" body={data.profile.bvn} />
                        <LeastChild head="Gender" body={data.profile.gender} />
                        <LeastChild head="Marital status" body="Single" />
                        <LeastChild head="Children" body="None" />
                        <LeastChild head="Type of residence" body="Parent's Apartment" />
                    </div>
                </section>
                <section className='info'>
                    <h2>Education and Employment</h2>
                    <div className="child_cont">
                        <LeastChild head="level of education" body={data.education.level} />
                        <LeastChild head="employment status" body={data.education.employmentStatus} />
                        <LeastChild head="sector of employment" body={data.education.sector} />
                        <LeastChild head="Duration of employment" body={data.education.duration} />
                        <LeastChild head="office email" body={data.education.officeEmail} />
                        {/* <LeastChild head="Monthly income" 
                            body={data.education.monthlyIncome.map((inc: string) => (inc))} /> */}
                        <LeastChild head="loan repayment" body={data.education.loanRepayment} />
                    </div>
                </section>
                <section className='info'>
                    <h2>Socials</h2>
                    <div className="child_cont">
                        <LeastChild head="Twitter" body={data.socials.twitter} />
                        <LeastChild head="Facebook" body={data.socials.facebook} />
                        <LeastChild head="Instagram" body={data.socials.instagram} />
                    </div>
                </section>
                <section className='info'>
                    <h2>Guarantor</h2>
                    <div className="child_cont">
                        <LeastChild head="full Name" body={data.guarantor.firstName+ " " + data.guarantor.lastName} />
                        <LeastChild head="Phone Number" body={data.guarantor.phoneNumber} />
                        <LeastChild head="Email Address" body={data.guarantor.address} />
                        <LeastChild head="gender" body={data.guarantor.gender} />
                    </div>
                </section>
            </section>
    )
}
</>
  )
}
