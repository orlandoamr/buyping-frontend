import Page from '../Pages';
import logo from './logo.jpeg';


const Splash = ()=>{
  return (
    <Page className="m-0 my-0 bg-green-100 min-h-screen" showHeader={true} showNavBar={TextTrackCueList} title="Hola">
      <section className="text-center flex-1 mx-28 py-64 text-3xl font-serif">
        <div className="splash_swot">
        BUYPING
        </div>
        <img src={logo}  className="w-52 my-4"/>
        <div className="splash_swot">
        Loading ...
        </div>
      </section>
    </Page>
  );
}

export default Splash;