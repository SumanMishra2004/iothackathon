
import { Fade } from 'react-awesome-reveal';
import Navbar from './components/Navbar/Navbar';
import TypingAnimation from './components/magicui/typing-animation';
import { MouseParallax } from 'react-just-parallax';
import Tilt from 'react-parallax-tilt';

const App = () => {


  return (
    <div className='h-screen w-screen bg-[#E9F1FF] overflow-y-scroll overflow-x-hidden '>
      <div className='md:w-[90%] w-[98%]  mx-auto h-auto pb-8'>

        <Navbar />
        <div className="w-full h-full  flex flex-col gap-8 ">
          <div className="w-full md:h-[14rem]  border-black h-[10rem] flex justify-between items-center p-4 bg-white border-2 md:rounded-[25px] rounded-2xl shadow-lg">
            <TypingAnimation text='HackSicle' duration={300} className="md:text-[12vw]  text-[18vw] mx-auto md:mx-0 firsttextFont font-bold" />
          </div>
          <div className="textArea w-full flex gap-4 md:h-16 h-fit md:flex-row flex-col justify-between">
            <Fade direction='down' triggerOnce duration={600} className="text md:w-[70%] h-full bg-green-400  flex justify-start items-center border-2 border-black rounded-2xl">

              <p className='h-fit text-black w-full md:text-2xl text-base px-6'>

                Brain freeze? More like code freeze –<span className='font-bold'> Chill and Hack it! ♦️ </span>  Brain fr

              </p>
            </Fade>
            <Fade direction='left' duration={800} triggerOnce className="text md:w-[25%] h-full bg-blue-700 text-white w-fit rounded-xl text-xl p-5 md:text-[1.75rem] flex items-center justify-center gap-2 border-2 border-black">
              Register now
            </Fade>
          </div>
          <Fade direction='up' delay={500} className='size-full' triggerOnce>

            <MouseParallax enableOnTouchDevice >

              <div className="VideoArea md:h-[32rem] h-[25rem] w-full border-2 shadow-2xl border-black rounded-3xl">

              </div>
            </MouseParallax>
          </Fade>
          <div className="whaatis w-full h-fit border-black border-b-2 flex flex-col justify-between gap-5 items-start">
            <Fade direction='left' triggerOnce>
              <span className='sm:text-[2rem] pt-5 font-thin text-black text-[1rem] '>Cool Hacks, Hot Ideas</span></Fade>
            <TypingAnimation text='What is HackSicle' className='sm:text-[4.5rem] text-[2rem] font-extrabold text-black ' duration={350} />
          </div>
          <div className="lg:h-[80vh] h-fit w-full">
            <div className="sm:grid lg:grid-cols-7 lg:grid-rows-6 gap-10 size-full sm:grid-cols-5 sm:grid-rows-9 hidden">

              <Fade direction='down' triggerOnce className="col-span-2 row-span-3 bg-white border border-black rounded-xl shadow-lg">1

              </Fade>

              <Fade direction='left' triggerOnce className="row-span-3 col-start-1 row-start-4 bg-white border border-black rounded-xl shadow-lg">3</Fade>
              <Fade direction='up' triggerOnce className="col-span-2 row-span-3 col-start-2 row-start-4 bg-white border border-black rounded-xl shadow-lg">4</Fade>
              <Fade direction='down' triggerOnce className="row-span-3 col-start-3 row-start-1 bg-white border border-black rounded-xl shadow-lg">6</Fade>
              <Fade direction='left' triggerOnce className="col-span-2 row-span-5 col-start-4 row-start-1 bg-white border border-black rounded-xl shadow-lg">7</Fade>
              <Fade direction='up' triggerOnce className="col-span-2 col-start-4 row-start-6 bg-white border border-black rounded-xl shadow-lg">8</Fade>
              <Fade direction='right' triggerOnce className="lg:col-span-2 lg:row-span-6 lg:col-start-6 lg:row-start-1 sm:col-span-5 sm:row-span-3 sm:row-start-7 bg-white border border-black rounded-xl shadow-lg">9</Fade>
            </div>
            <div className="flex gap-6 flex-col w-full sm:hidden">
              <div className="element1 w-full h-[14rem] shadow-md rounded-md bg-green-400 border-2 border-black"></div>
              <div className="element  w-full h-[8rem] shadow-md rounded-md bg-green-400 border-2 border-black"></div>
              <div className="element  w-full h-[17rem] shadow-md rounded-md bg-green-400 border-2 border-black"></div>
              <div className="element  w-full h-[8rem] shadow-md rounded-md bg-green-400 border-2 border-black"></div>
              <div className="element  w-full h-[25rem] shadow-md rounded-md bg-green-400 border-2 border-black"></div>
              <div className="registationbutton w-full h-[5rem] bg-blue-500 shadow-md rounded-md border-2 border-black"></div>
              <div className="imgArea w-full h-[25rem] shadow-md rounded-md border-2 border-black"></div>
            </div>


          </div>
          <div className="whaatis w-full h-fit border-black border-t-2 flex flex-col justify-between gap-5 items-start">
            <Fade direction='down' triggerOnce className='sm:text-[2rem] pt-5 font-thin text-black text-[1rem] '>Freeze Frame: Your Journey</Fade>
            <TypingAnimation text='Icy-nerary' className='sm:text-[4rem] text-[2rem] font-extrabold text-black ' duration={500} key={12} />
          </div>
          <div className="w-full h-fit flex flex-col gap-4 items-end my-8">
            <Fade direction='down' triggerOnce>

              <div className="items w-[85%] h-auto py-5 bg-green-100 border-green-500 border-2 rounded-lg pl-9 relative shadow-md hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0">
                <span className='h-fit w-28 rounded-2xl bg-black absolute -left-14 top-3 text-white text-center py-2'>
                  day1
                </span>
                <p className='pl-9'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur quasi, sunt necessitatibus, minus reprehenderit voluptatum cum in molestias
                </p>
              </div>
            </Fade>
            <Fade direction='left' triggerOnce>
              <div className=" hover:translate-x-[2rem] duration-1000 ease-in-out items w-[85%] h-auto py-5 bg-green-200 border-green-700 border-2 rounded-lg pl-9 relative shadow-md  ml-5 lg:ml-0">
                <span className='h-fit w-28 rounded-2xl bg-black absolute -left-14 top-3 text-white text-center py-2'>
                  day1
                </span>
                <p className='pl-9'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur quasi, sunt necessitatibus, minus reprehenderit voluptatum cum in molestias
                </p>
              </div></Fade>   <Fade direction='right' triggerOnce>
              <div className="hover:translate-x-[2rem] duration-1000 ease-in-out items w-[85%] h-auto py-5 bg-green-300 border-green-800 border-2 rounded-lg pl-9 relative shadow-md  ml-5 lg:ml-0">
                <span className='h-fit w-28 rounded-2xl bg-black absolute -left-14 top-3 text-white text-center py-2'>
                  day1
                </span>
                <p className='pl-9'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur quasi, sunt necessitatibus, minus reprehenderit voluptatum cum in molestias
                </p>
              </div></Fade>   <Fade direction='up' triggerOnce>
              <div className="hover:translate-x-[2rem] duration-1000 ease-in-out items w-[85%] h-auto py-5 bg-green-400 border-green-950 border-2 rounded-lg pl-9 relative shadow-md  ml-5 lg:ml-0">
                <span className='h-fit w-28 rounded-2xl bg-black absolute -left-14 top-3 text-white text-center py-2'>
                  day1
                </span>
                <p className='pl-9'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur quasi, sunt necessitatibus, minus reprehenderit voluptatum cum in molestias
                </p>
              </div>  </Fade>


          </div>
          <div className="whaatis w-full h-fit border-black border-t-2 flex flex-col justify-between gap-5 items-start mt-6">
            <span className='sm:text-[2rem] pt-5 font-thin text-black text-[1rem] '>Freeze Frame: Your Journey</span>
            <span className='sm:text-[4rem] text-[2rem] font-extrabold text-black '>Icy-nerary</span>
          </div>
          <div className="w-full h-fit flex flex-wrap gap-9 lg:gap-32 justify-center">
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>
            <Tilt
              className="parallax-effect group flex flex-col justify-center items-center border-2 border-black
    h-[20rem] w-[15rem] bg-gray-300 hover:bg-green-400 duration-500 ease-in-out rounded-md gap-3"
              style={{ transformStyle: 'preserve-3d' }}
              perspective={500}
            >
              <div className="inner-element w-full h-[55%] ">
                <img
                  src={'/Sustain.png'}
                  className="img w-[85%] pt-3 mx-auto h-full transition-transform duration-500 ease-in-out"
                  alt="Image description"
                />
              </div>
              <span className="text-black text-xl font-bold inner-element2 transition-transform duration-500 ease-in-out group-hover:scale-110">
                Sustainability
              </span>
              <span className="text-black text-sm text-justify px-2 transition-opacity duration-500 ease-in-out group-hover:opacity-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sed doloribus porro omnis suscipit
              </span>
            </Tilt>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;