import './portfoliolist.scss'

export default function Portfoliolist({title,id,active,setselected}) {
  return (
    <li className={active? "portfoliolist active":"portfoliolist"} onClick={()=>setselected(id)}>{title}</li>
  );
}
