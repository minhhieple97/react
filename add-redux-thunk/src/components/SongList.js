import React from "react"
import { connect } from "react-redux"
import { selectSong } from "../actions"
const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              onClick={() => props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }
  return <div className="ui divided list">{renderList()}</div>
}
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  }
}
export default connect(mapStateToProps, { selectSong })(SongList)
