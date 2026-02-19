
import Card from './components/Card'

const App = () => {
  
  const jobOpenings = [
    {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    nameOfCompany: "Meta",
    post: "UI/UX Designer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    nameOfCompany: "Amazon",
    post: "Backend Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    nameOfCompany: "Apple",
    post: "Frontend Developer",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    nameOfCompany: "Netflix",
    post: "Full Stack Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    nameOfCompany: "Google",
    post: "Backend Developer",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    nameOfCompany: "Microsoft",
    post: "Cloud Engineer",
    datePosted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    nameOfCompany: "Adobe",
    post: "UI Developer",
    datePosted: "6 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    nameOfCompany: "Oracle",
    post: "Database Engineer",
    datePosted: "8 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    nameOfCompany: "IBM",
    post: "DevOps Engineer",
    datePosted: "9 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    nameOfCompany: "Tesla",
    post: "Software Engineer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote"
  }
  ];
  

  return (
      <div className="parent">
        {jobOpenings.map(function(elem,id){
          console.log(id);
          return <div key={id}>
            <Card brand={elem.brandLogo}
                company={elem.nameOfCompany}
                post={elem.post}
                datePosted={elem.datePosted}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
          />
          </div>
        })}
      </div>
  )
}

export default App
