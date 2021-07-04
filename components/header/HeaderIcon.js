import Link from 'next/link'

function HeaderIcon({ Icon , title, page}) {

    return(
        <Link href={`/${page}`}>
            <div className='flex justify-center md:bg-transparent bg-gray-700 px-3 py-3 hover:bg-white rounded-xl transition duration-300 ease-in-out transform cursor-pointer'>
                <Icon className='h-5'/>
                <p className='text-semibold pl-4 m-0'> {title} </p>
            </div>
        </Link>
  );
}

export default HeaderIcon;
