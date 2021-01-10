import React from 'react';
import './Video.css';

function Video({ name }) {
  return (
    <div className={name === 'trailers' ? 'trailerss' : 'Video'}>
      {name === 'venom' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8vmPwKvn8MY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'hobsandshaw' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HZ7PAyCDwEg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'rampage' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wXGkeTEdUDM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'jurassicworld' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vn9mMeWcgoM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'missionimpossible' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wb49-oV0F78"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'interstellar' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Lm8p5rlrSkY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'martian' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ej3ioOneTy8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'arrival' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/92HVT9RwihY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'snowpiercer' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nX5PwfEMBM0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}
      {name === 'cloverfield' && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yQy-ANhnUpE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      )}

      {name === 'trailers' && (
        <div className="trailers">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8vmPwKvn8MY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HZ7PAyCDwEg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wXGkeTEdUDM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vn9mMeWcgoM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wb49-oV0F78"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Lm8p5rlrSkY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ej3ioOneTy8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/92HVT9RwihY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nX5PwfEMBM0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yQy-ANhnUpE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
}

export default Video;
