import { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber - 1);
        }
        if (direction === "right" && slideNumber < 6) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber + 1);
        }

    }

    const [num, setNum] = useState(-1);

    return <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIos style={{ display: !isMoved && "none" }} className="sliderArrow left" onClick={() => handleClick("left")} />
            <div className="container" ref={listRef}>
                <ListItem index={0} setNum={setNum} num={num} />
                <ListItem index={1} setNum={setNum} num={num} />
                <ListItem index={2} setNum={setNum} num={num} />
                <ListItem index={3} setNum={setNum} num={num} />
                <ListItem index={4} setNum={setNum} num={num} />
                <ListItem index={5} setNum={setNum} num={num} />
                <ListItem index={6} setNum={setNum} num={num} />
                <ListItem index={7} setNum={setNum} num={num} />
                <ListItem index={8} setNum={setNum} num={num} />
                <ListItem index={9} setNum={setNum} num={num} />
                <ListItem index={10} setNum={setNum} num={num} />
                <ListItem index={11} setNum={setNum} num={num} />
            </div>
            <ArrowForwardIos className="sliderArrow right" onClick={() => handleClick("right")} />
        </div>
    </div>;
};

export default List;
