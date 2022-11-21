import React from "react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import '../component/CardBig.css';


export default function Profile() {

  const [data, setData] = useState([]);
  const akun =[ 
    "adijaay",
    "fangkiigopramana",
    "sirazaf",
    "mrkaamil"
]
  
  useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      for(let i=0;i<akun.length;i++){
        await axios
        .get("https://api.github.com/users/" + akun[i])
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      }
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);



   
    return (
      <>
      <div style={{ display: "flow", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{marginLeft: 30 ,color: "white"}}>Github Profile Anggota</h1>
      </div>

      <div className="containerTop">
       {data.map((item) => (
          <Fragment key={item.id}>
            <div className="containerBig" key={item.id}>
                  <img src={item.avatar_url} alt={item.avatar_url} style={{width: '100%', height: '60%', borderRadius: "100%"}} />
                  <div style={{marginTop: 20, marginLeft: 20, marginRight: 20, textAlign: "center", backgroundColor: "rgb(65, 65, 100)", padding: 5, borderRadius: 12}}>
                  <p id="title" >{item.name}</p>
                  <p id="subtitle" >{"/" + item.login}</p>
                  <p id="genre">{item.public_repos + " Public Repositories" }</p>
                  <p id="genre">{item.bio }</p>
                  <p id="subtitle">{item.company }</p>
                  </div>
                  
              </div>
          </Fragment>
        ))}
          
        </div>
      </>
    );
  }
  