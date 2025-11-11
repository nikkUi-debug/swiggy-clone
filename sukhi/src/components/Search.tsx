import SearchIcon from '@mui/icons-material/Search';

export default function Search() {

    return(
        <div className="relative">
            <input type="text" placeholder="Search..." className="pr-6" />
            <button className="absolute right-2.5"><SearchIcon /></button>
        </div>
    );
};