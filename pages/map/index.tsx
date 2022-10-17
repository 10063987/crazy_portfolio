import dynamic from 'next/dynamic'


const Map = () => {
    const MapWithNoSSR = dynamic(() => import("../../components/Map"), { ssr: false });

    return (<>
        <div className='w-screen h-screen bg-red-500'>
            <div className='w-[500px] h-[500px] m-auto'>
                <MapWithNoSSR />
            </div>
        </div>
    </>)
}

export default Map;