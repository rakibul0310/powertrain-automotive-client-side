import Parts from '../Parts/Parts';
import useParts from '../../hooks/useParts'

const Technologies = () => {
    const [parts] = useParts();
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-9'>Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-6 my-12 gap-4'>
                {
                    parts.map(part => <Parts key={part._id} part={part}></Parts>)
                }
            </div>
        </div>
    );
};

export default Technologies;