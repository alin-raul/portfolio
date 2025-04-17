import React, { useState, useEffect, useRef } from "react";
// Import the CSS file directly

// --- Configuration ---
const TRANSITION_DURATION_MS = 300; // Must match CSS transition-duration (in ms)
const SEQUENCE = ["g2", "g3", "g4", "g5", "g6", "g7", "g8", "g1"]; // Order of animation
const ALL_ELEMENT_CLASSES = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"];
// --- End Configuration ---

function LogoRan() {
  return (
    <div className="invert">
      <svg
        className="hoverAnimateSvg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1024 1024"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* ... your defs ... */}
          <clipPath id="__lottie_element_6">
            <rect width="1024" height="1024" x="0" y="0" />
          </clipPath>
          <clipPath id="__lottie_element_13">
            <path d="M0,0 L204,0 L204,404 L0,404z" />
          </clipPath>
          <clipPath id="__lottie_element_24">
            <path d="M0,0 L204,0 L204,404 L0,404z" />
          </clipPath>
          <clipPath id="__lottie_element_33">
            <path d="M0,0 L203,0 L203,405 L0,405z" />
          </clipPath>
          <clipPath id="__lottie_element_41">
            <path d="M0,0 L203,0 L203,406 L0,406z" />
          </clipPath>
          <clipPath id="__lottie_element_49">
            <path d="M0,0 L204,0 L204,404 L0,404z" />
          </clipPath>
          <clipPath id="__lottie_element_57">
            <path d="M0,0 L204,0 L204,404 L0,404z" />
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_6)">
          {/* Add classes "animatableElement gX" and REMOVE inline opacity attribute */}
          {/* Make sure all 8 groups have the correct classes */}
          <g
            className="animatableElement g1"
            clipPath="url(#__lottie_element_57)"
            transform="matrix(1,0,0,1,308.99993896484375,511.85546875)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,1,0)"
              opacity="0"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.99993896484375 C0,201.99993896484375 202.0000457763672,0 202.0000457763672,0 C202.0000457763672,0 202,403.9999694824219 202,403.9999694824219 C202,403.9999694824219 0,201.99993896484375 0,201.99993896484375 C0,201.99993896484375 0,201.99993896484375 0,201.99993896484375z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g2"
            clipPath="url(#__lottie_element_49)"
            transform="matrix(0,-1,1,0,108,715)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,1,0)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.99993896484375 C0,201.99993896484375 202.0000457763672,0 202.0000457763672,0 C202.0000457763672,0 202,403.9999694824219 202,403.9999694824219 C202,403.9999694824219 0,201.99993896484375 0,201.99993896484375 C0,201.99993896484375 0,201.99993896484375 0,201.99993896484375z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g3"
            clipPath="url(#__lottie_element_41)"
            transform="matrix(0,1,1,0,107,309)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,1,1)"
              opacity="0"
              style={{ display: "block" }}
            >
              <g opacity="0" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="0"
                  d=" M0,201.9999542236328 C0,201.9999542236328 202,0 202,0 C202,0 201.9999542236328,404 201.9999542236328,404 C201.9999542236328,404 0,201.9999542236328 0,201.9999542236328 C0,201.9999542236328 0,201.9999542236328 0,201.9999542236328z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g4"
            clipPath="url(#__lottie_element_33)"
            transform="matrix(1,0,0,-1,309,512)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,0,1)"
              opacity="0"
              style={{ display: "block" }}
            >
              <g opacity="0" transform="matrix(1,0,0,1,1,-0.999908447265625)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="0"
                  d=" M0,201.9999542236328 C0,201.9999542236328 202,0 202,0 C202,0 201.9999542236328,404 201.9999542236328,404 C201.9999542236328,404 0,201.9999542236328 0,201.9999542236328 C0,201.9999542236328 0,201.9999542236328 0,201.9999542236328z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g5"
            clipPath="url(#__lottie_element_24)"
            transform="matrix(-1,0,0,-1,715.0001220703125,511.99993896484375)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,1,0)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.99993896484375 C0,201.99993896484375 202.0000457763672,0 202.0000457763672,0 C202.0000457763672,0 202,403.9999694824219 202,403.9999694824219 C202,403.9999694824219 0,201.99993896484375 0,201.99993896484375 C0,201.99993896484375 0,201.99993896484375 0,201.99993896484375z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g6"
            transform="matrix(1,0,0,1,-208,0)"
            style={{ display: "block" }}
          >
            <g opacity="1" transform="matrix(-1,0,0,-1,922,915.85546875)">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="rgb(0,0,0)" fillOpacity="1" d="M0 0" />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.99993896484375 C0,201.99993896484375 202.0000457763672,0 202.0000457763672,0 C202.0000457763672,0 202,403.9999694824219 202,403.9999694824219 C202,403.9999694824219 0,201.99993896484375 0,201.99993896484375 C0,201.99993896484375 0,201.99993896484375 0,201.99993896484375z"
                />
                <g opacity="0" transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g7"
            clipPath="url(#__lottie_element_13)"
            transform="matrix(-1,0,0,-1,917,713.85546875)"
            style={{ display: "block" }}
          >
            <g
              transform="matrix(1,0,0,1,1,0)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.99993896484375 C0,201.99993896484375 202.0000457763672,0 202.0000457763672,0 C202.0000457763672,0 202,403.9999694824219 202,403.9999694824219 C202,403.9999694824219 0,201.99993896484375 0,201.99993896484375 C0,201.99993896484375 0,201.99993896484375 0,201.99993896484375z"
                />
              </g>
            </g>
          </g>
          <g
            className="animatableElement g8"
            transform="matrix(1,0,0,1,-208,0)"
            style={{ display: "block" }}
          >
            <g opacity="1" transform="matrix(1,0,0,-1,720,713.8554077148438)">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,0,0)"
                  fillOpacity="1"
                  d=" M0,201.9999542236328 C0,201.9999542236328 202,0 202,0 C202,0 201.9999542236328,404 201.9999542236328,404 C201.9999542236328,404 0,201.9999542236328 0,201.9999542236328 C0,201.9999542236328 0,201.9999542236328 0,201.9999542236328z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LogoRan;
