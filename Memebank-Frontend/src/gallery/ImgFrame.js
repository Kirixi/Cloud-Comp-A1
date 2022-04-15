import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import {ArrowUpward} from "@mui/icons-material";

function ImgFrame({ src, h, author, id, voteNum}) {
  const [show, setShow] = useState(0);
  let [thisVoteNum, setThisVoteNum] = useState(voteNum);

    function increaseVote(){
        setThisVoteNum(function (prev){
            return prev + 1
        })
        //send api post
    }

  return (
    <div className={"imgframe " + (show ? 'pop' : '')} style={{ height: h}}>
      <img className={show ? "mainimgpop" : "mainimg"} src={src} height={h} />
      <span className={(show ? 'show' : 'close')} onClick={() => setShow(0)}>X</span>
        <div>

            <div className="actions">
                <button className={show ? 'hide' : ''} onClick={() => setShow(show ? 0 : 1)}>Info</button>
                <div className={show ? '' : 'hide'}>
                    {author}
                </div>
                <div className={show ? '' : 'hide'}>
                    <IconButton onClick={increaseVote}>
                        <ArrowUpward/>
                    </IconButton>
                </div>

                <div className={show ? '' : 'hide'}>
                    {thisVoteNum}
                </div>
                <div className={show ? '' : 'hide'}>
                    {"author"}
                </div>
                <button onClick={() => window.location = src}>Download</button>
            </div>
        </div>

    </div>
  )
}

export default ImgFrame
