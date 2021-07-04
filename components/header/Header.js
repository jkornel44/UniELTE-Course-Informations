import HeaderIcon from './HeaderIcon';
import Avatar from './Avatar';
import { HomeIcon, SearchIcon, CalendarIcon, AcademicCapIcon} from '@heroicons/react/outline'

function Header() {

    return(
        <div className='flex py-2 overflow-x-auto w-full bg-transparent'>
            <div className='flex felx-grow space-x-3'>
                <HeaderIcon Icon={HomeIcon} title={'Kezdőlap'} page={''}/>
                <HeaderIcon Icon={SearchIcon} title={'Keresés'} page={'search'}/>
                <HeaderIcon Icon={AcademicCapIcon} title={'Kurzusaim'} page={'courses'}/>
                <HeaderIcon Icon={CalendarIcon} title={'Órarend'} page={'timetable'}/>
            </div>

            <div className='flex flex-1 justify-end'>
                <Avatar Icon={HomeIcon} title={'Kezdőlap'}/>
            </div>
        </div>
  );
}

export default Header;
