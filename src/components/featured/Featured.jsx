import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import bckgnd from '../../images/bckgnd.png';
import frozen from '../../images/frozen.png';
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={bckgnd}
        alt=""
      />
      <div className="info">
        <img
          src={frozen}
          alt=""
        />
        <span className="desc">
          When their kingdom becomes trapped in perpetual winter,
          fearless Anna (Kristen Bell) joins forces with mountaineer
          Kristoff (Jonathan Groff) and his reindeer sidekick to find
          Anna's sister, Snow Queen Elsa (Idina Menzel), and break
          her icy spell. 
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
