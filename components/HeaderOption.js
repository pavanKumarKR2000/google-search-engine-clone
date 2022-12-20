
const HeaderOption = ({ Icon, title, selected }) => {
  
  console.log(process.env.API_KEY);  

  return (
      <div className={`flex items-center cursor-pointer space-x-1 border-b-4 border-transparent  pb-1 ${selected?'text-blue-500 border-blue-500':'hover:text-gray-500'}`}>
          <Icon className="h-4"/>
          <p className="hidden sm:inline-flex">{title}</p>
      </div>
  )
}

export default HeaderOption;