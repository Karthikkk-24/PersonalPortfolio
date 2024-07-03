import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
    return (
        <div className="h-screen w-full flex items-center justify-center px-10 gap-10">
            <div className='w-1/2 h-full flex flex-col items-start justify-center gap-4'>
                <h2 className="text-left text-3xl uppercase text-primary">
                    My name is Karthik Shettigar
                </h2>
                <h2 className="text-left text-3xl uppercase text-primary">
                    Currently Working at RudraTech IT Services as a Software Developer
                </h2>
                <TypeAnimation
                    sequence={[
                        'Programmed and wired for JavaScript',
                        1000,
                        'Programmed and wired for NodeJS',
                        1000,
                        'Programmed and wired for ReactJS',
                        1000,
                        'Programmed and wired for MongoDB',
                        1000,
                    ]}
                    speed={50}
                    className='text-primary'
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
            <div className='w-1/2 h-full flex flex-col items-center justify-center'>

            </div>
        </div>
    );
}
