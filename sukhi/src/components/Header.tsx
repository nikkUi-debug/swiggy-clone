import Search from './Search'

function Header() {

    //icon+title
    //search
    //usericon
  return (
    <header className="px-15">
        <div className="flex justify-between">
            <div className="flex items-center">
                <img className="h-40 w-50" src="sukhi-logo.png" alt="Sukhi Logo" />
                <h2 className="text-[54px] text-[#B87C4C] lobster-regular pt-[50px]">Sukhi</h2>
            </div>
            <div>
                <Search />             
                <img src="user-icon.png" alt="User Icon" />
            </div>
        </div>
      
    </header>
  )
}

export default Header
