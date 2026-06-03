
const Contacts = () => {

          
    const iconClass =
  "h-12 w-12 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-2";
  return (
    <div className="flex flex-col justify-center  py-10 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-400">
            Contact
        </h1>
      <p className="text-3xl my-8">Building something interesting? I'd love to hear about it.</p>
      <div className="flex flex-row gap-8">
           <a  href="https://www.linkedin.com/in/vansh-goel-06a7401ab" >
           <img className={iconClass}
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
             alt="linkedin" />
             </a> 
                 
                <a href="https://github.com/Vanshgoe">
                    <img
            className={`${iconClass} invert`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub" />
             </a> 
               
                <a href="https://x.com/goel_vansh84641">
                    <img
            className={`${iconClass} invert`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
            alt="X" />
             </a> 
            </div>
    
    
    </div>
  )
}

export default Contacts;
