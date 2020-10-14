/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from './components/header/Header';
import { Table } from 'react-bootstrap';
import ListItemImg from './components/ListItemImg/ListItemImg';
import Image from 'react-bootstrap/Image'



const Details = () => {

  const location = useLocation();
  const history = useHistory();

  let status = "";
  let albumtitle = "";
  let userId = "";
  let aId = "";
  let tracks = [];

  const [albumpic, setAlbumPic] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  try {
    status = location.state.status;
    albumtitle = location.state.title;
    userId = location.state.userId;
    tracks = location.state.tracks;
    aId = location.state.id;
  } catch (err) {
    status = "false";
    tracks = [];
  }

  useEffect(() => {
    if (status !== "true") {
      history.push("/");
    }

    if (tracks.length > 0) {
      setAlbumPic(tracks[0].url);
      setAlbumId(tracks[0].albumId);
      setTitle(tracks[0].title);
      setId(tracks[0].id);
      console.log("YES");
    }
  }, [history, status, tracks]);

  const listItemImgOnClick = (track) => {
    setAlbumPic(track.url);
    setAlbumId(track.albumId);
    setId(track.id);
    setTitle(track.title);
  };

    return (

        <div>
            <span data-testid="headerdetails"><Header /></span>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4" data-testid="detailtable">
                    <div class="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table className="table table-striped table-bordered table-sm" cellspacing="0">
                            <thead>
                            <tr>
                                <th>Details</th>
                            </tr>
                            </thead>
                            <tbody>
                              
                               <tr>
                                    <span data-testid="thumbnailimage">
                                      {tracks.map((track) => (
                                           <ListItemImg data-testid="listimglink" track={track} onclick={listItemImgOnClick} />
                                         ))}
                                      </span>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h2>Album ID: {albumId}</h2>
                                <Image data-testid="albumpicture" src={albumpic} alt="" fluid />
                                <span id="idtext">Image ID: {id}</span>
                                <br />
                              <span><b>Title:</b> {title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}


export default Details;