import React, { useEffect, useState } from 'react'

const Info = () => {
    
    const [data,setdata]=useState([]);

    const getcoviddata=async()=>{
        try{
        const res=await fetch('https://data.covid19india.org/data.json');
        const adata=res.json();
        console.log(adata);
        setdata(adata.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getcoviddata();
    },[]);
    
  return (
    <>
    <div id="holder">
        <div id="row1" className="row">
            <div id="card1" className="card"><h3 align="center">Our Country</h3><br /><span>India</span></div>
            <div id="card2" className="card"><h3 align="center">Total Recovered</h3><br /><span>{data.recovered}</span></div>
            <div id="card3" className="card"><h3 align="center">Total Confirmed</h3><br /><span>200</span></div>
        </div>

        <div id="row2" className="row">
            <div id="card4" className="card"><h3 align="center">Total Deaths</h3><br /><span>17,000</span></div>
            <div id="card5" className="card"><h3 align="center">Total Active</h3><br /><span>20,000</span></div>
            <div id="card6" className="card"><h3 align="center">Last Updated</h3><br /><span>{new Date().toLocaleString()}</span></div>
        </div>
    </div>
    </>
  )
}

export default Info
