import YouTube from "react-youtube"; 

const Video = () => {

  const opts = { 
    height: "490", 
    width: "1040", 
    playerVars: { 
      autoplay: 1, 
    }, 
  }; 

  const _onReady = (event) => { 
    event.target.pauseVideo(); 
  } 
    return(
      <>
      <div className="block-contents" style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginTop:100
      }}>
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>The Experience!</h2>
              <p data-wow-duration="1s" data-wow-delay=".3s">
							Rider, where safety meets comfort, enjoy experience
							</p>
          </div>
          
      </div>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '55vh',

        }}>
         
         <YouTube videoId="iePUQhnfmf8" autoplay 
            opts={opts} onReady={_onReady} /> 
      </div>
      </>
    )
}


export default Video;