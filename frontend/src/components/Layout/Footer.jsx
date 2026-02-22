import  { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Kunal.</div>
<div>
  <Link to={'https://github.com/kunalsingh001'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/kunal071414/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/kunal-singh-2a4742248/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  
</div>
      
    </footer>
  )
}

export default Footer