
function Avatar() {
    let id = 'TEST_ACCOUNT'
    return(
        <div className='flex justify-center hover:bg-white rounded-xl py-2 px-2 cursor-pointer'>
            
            <p className='text-semibold pl-4 m-0 px-3 py-2 hidden md:block'> {id} </p>
            <div className='h-10 w-10 rounded-md shadow-md bg-red-300'>
                <p className='font-bold text-2xl text-center text-red-800 pt-1'> {id.charAt(0) + id.charAt(1)}</p>
            </div>

        </div>
  );
}

export default Avatar;