// style & animation
import styled from "styled-components"
import {motion} from 'framer-motion'
// redux
import {useSelector} from 'react-redux'
// import { gameDetailsUrl } from "../api";
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util'
// image
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

const GameDetail = ({pathId}) => {
    const history = useHistory();
    // exit detail
    const exitDetailHander = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/')
        }
    }
    // get platform images
    const getPlatform = (platform) => {
        switch(platform){
            case "Playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    // data
    const {screen, game, isLoading} = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && ( 
        <CardShadow className="shadow" onClick={exitDetailHander}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`} > {game.name} </motion.h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms className="platforms">
                            {game.platforms.map(data => (
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} />
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="image" />
                </Media>
                <Description className="description">
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0. 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1; 
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrolbar-thumb{
       background-color: #ff7676; 
    }

    &::-webkit-scrollba-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;