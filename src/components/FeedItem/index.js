import React from "react";
import "./style.scss";
export default function FeedItem({ feeds }) {
  return (
    <div className="_myFeedItem">
      <div className="_itemImg">
        <img
          src="https://dummyimage.com/600x400/ededed/636363&text=No+images"
          alt=""
        />
      </div>
      <div className="_itemInfo">
        <h5>{feeds.title}</h5>
        <p>{feeds.contentSnippet}</p>
        <a href={feeds.link} target="_blank" rel="noreferrer">
          {feeds.link}
        </a>
      </div>
    </div>
  );
}
