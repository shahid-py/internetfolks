
import style from "../styles/Sectionapi.module.css"
import {useState } from "react"



export default function Sectionapi () {
 

  const [text, setText] = useState("")
  const [links, setLinks] = useState([])
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const result = await res.json()
        
        const links = {
          originalLink:result.result["original_link"],
          shortLink:result.result["full_short_link"],
          copied:false
      };
      
       
        setLinks(links)
        setText("")
      }
      
      shortenLink()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied!")
  }

  
  
  return (
    <div className={style.Sectionapi}>
        
        <div className={style.inner}>
        <div className={style.inputgroup}>
        <input
          className={style.input}
          value={text}
          type="url"
          placeholder="Shorten a link here..."
            
          onChange={(e)=> setText(e.target.value)}
        />

       <span >Please add a valid link</span>
        </div>

      <button
      type="submit"
        className={style.btn}
        
        onClick={handleSubmit}
        >
        Shorten it
      </button>
    </div>
    
    <div className={style.innerresult}>
      <ul className={style.lists}>
    <div className={style.itemheader}>
            <h4>{links.original_link}</h4>
          </div>
          
      <div className={style.list}>
        <h4 className={style.copyurl}>{links.full_short_link}</h4>
        
          <button
          onClick={handleCopy}
          className={style.btncopy}>
            {buttonText}
          </button>
        
      </div>
      </ul>
      
    </div>
  </div>
            

  )
   }


