import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const data = [
    { title: 'Title1', desc: '1cdsdsfdsvsdewfdew' },
    { title: 'Title2', desc: '2cdsdsfdsvsdewfdew' },
    {
      title: 'Title3',
      desc: '3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfds vsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsv sdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3cdsds fdsvsdewfdew3 cdsdsfdsvsdew fdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3c dsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew',
    },
  ];

  return <Collapse data={data} />;
}


function Collapse(props){
  const { data } = props;
  return(
    <div>
      {data.map((elem, idx) => {
        return <Unit item={elem} key={idx}/>
      })}
    </div>
  )
}

function Unit(props){
  const { item } = props
  const [show, setShow] = useState(false)
  const refContent = useRef()
  useEffect(()=>{
    refContent.current.style.height = show? `${refContent.current.scrollHeight}px` : "0px"
  },[show])
  return(
    <div className="wrapper">
      <h4 className="title" onClick = {() => setShow(!show)}>{item.title}</h4>
      <article ref={refContent}>{item.desc}</article>
    </div>
  )
}